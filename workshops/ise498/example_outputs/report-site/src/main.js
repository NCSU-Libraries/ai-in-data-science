import { marked } from 'marked';
import '@fontsource/barlow-condensed/latin-500.css';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource-variable/source-serif-4/opsz.css';
import '@fontsource-variable/source-serif-4/opsz-italic.css';
import './style.css';
import './print.css';

// Read at build time from the evidence pack one folder up; nothing is pasted by hand.
// Edit ../report.md and rebuild (or keep `npm run dev` running) to update the page.
import reportMarkdown from '../../report.md?raw';

// Every PNG in ../charts, copied into the build with a hashed file name.
const chartUrls = import.meta.glob('../../charts/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const THEME_KEY = 'report-theme';
const report = document.querySelector('#report');

report.innerHTML = marked.parse(reportMarkdown);
polishText(report);
buildHeader(report);
mountCharts(report);
markSummary(report);
markSoWhatLines(report);
wrapTables(report);
buildToc(report, document.querySelector('#toc-list'));
setUpThemeToggle(document.querySelector('#theme-toggle'));
setUpContentsDisclosure(document.querySelector('.toc'));
document.querySelector('#print-button').addEventListener('click', () => window.print());

// Curly quotes and apostrophes (the Markdown uses straight ones),
// and keep "p < 0.001" together on one line.
function polishText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (node.parentElement.closest('code, pre')) continue;
    node.nodeValue = node.nodeValue
      .replace(/(\w)'/g, '$1’')
      .replace(/'/g, '‘')
      .replace(/(^|[\s(\[])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\bp < (?=\d)/g, 'p < ');
  }
}

// Title plus a title block built from the "Period: … · Source: …" line under it.
function buildHeader(root) {
  const h1 = root.querySelector('h1');
  if (!h1) return;
  document.title = h1.textContent;

  const header = document.createElement('header');
  header.className = 'report-header';
  h1.before(header);
  header.append(h1);

  const meta = header.nextElementSibling;
  if (!meta || meta.tagName !== 'P') return;
  const fields = meta.textContent.split(' · ').map((part) => {
    const colon = part.indexOf(': ');
    return colon > 0 ? [part.slice(0, colon), part.slice(colon + 2)] : null;
  });
  if (fields.some((field) => field === null)) {
    header.append(meta); // keep the line as written if it doesn't follow that pattern
    return;
  }
  const block = document.createElement('dl');
  block.className = 'title-block';
  for (const [label, value] of fields) {
    const cell = document.createElement('div');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = label;
    dd.textContent = value;
    cell.append(dt, dd);
    block.append(cell);
  }
  header.append(block);
  meta.remove();
}

// Point each chart at its built file and present it as a captioned figure.
function mountCharts(root) {
  for (const img of root.querySelectorAll('img')) {
    const src = img.getAttribute('src');
    const url = chartUrls[`../../${src}`];
    if (url) img.src = url;
    else console.warn(`Chart not found in ../charts: ${src}`);
    img.decoding = 'async';

    const paragraph = img.parentElement;
    if (paragraph.tagName !== 'P' || paragraph.childNodes.length !== 1) continue;
    const figure = document.createElement('figure');
    figure.className = 'plate';
    const caption = document.createElement('figcaption');
    caption.textContent = img.alt;
    paragraph.replaceWith(figure);
    figure.append(img, caption);
  }
}

function markSummary(root) {
  const heading = [...root.querySelectorAll('h2')].find((h) => /executive summary/i.test(h.textContent));
  const list = heading?.nextElementSibling;
  if (list?.tagName === 'UL') list.classList.add('summary');
}

function markSoWhatLines(root) {
  for (const p of root.querySelectorAll('p')) {
    const lead = p.firstChild;
    if (lead?.nodeName === 'STRONG' && /^so what:?$/i.test(lead.textContent.trim())) {
      p.classList.add('so-what');
    }
  }
}

// Wide tables scroll sideways on small screens instead of squeezing the page.
function wrapTables(root) {
  for (const table of root.querySelectorAll('table')) {
    const wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    wrap.tabIndex = 0;
    wrap.setAttribute('role', 'region');
    const heading = previousHeading(table);
    wrap.setAttribute('aria-label', heading ? `${heading.textContent} table` : 'Table');
    table.replaceWith(wrap);
    wrap.append(table);
  }
}

function previousHeading(el) {
  let node = el.previousElementSibling;
  while (node && !/^H[1-6]$/.test(node.tagName)) node = node.previousElementSibling;
  return node;
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-');
}

// Contents list from the h2/h3 headings, with the current section highlighted.
function buildToc(root, list) {
  const headings = [...root.querySelectorAll('h2, h3')];
  const used = new Set();
  const links = new Map();
  let parentItem = null;
  let subList = null;

  for (const heading of headings) {
    const base = slugify(heading.textContent) || 'section';
    let id = base;
    for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`;
    used.add(id);
    heading.id = id;

    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = heading.textContent;
    item.append(link);
    links.set(heading, link);

    if (heading.tagName === 'H2' || !parentItem) {
      list.append(item);
      parentItem = item;
      subList = null;
    } else {
      if (!subList) {
        subList = document.createElement('ol');
        parentItem.append(subList);
      }
      subList.append(item);
    }
  }

  let current = null;
  const update = () => {
    const line = window.innerHeight * 0.25;
    let active = headings[0];
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= line) active = heading;
      else break;
    }
    const link = links.get(active);
    if (link === current) return;
    current?.removeAttribute('aria-current');
    link?.setAttribute('aria-current', 'true');
    current = link;
  };
  let queued = false;
  window.addEventListener(
    'scroll',
    () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        update();
      });
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
  update();
}

function setUpThemeToggle(button) {
  const root = document.documentElement;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches);
  const render = () => button.setAttribute('aria-pressed', String(isDark()));

  button.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the choice still applies to this visit.
    }
    render();
  });
  systemDark.addEventListener('change', render);
  render();
}

// The contents list is always open beside the report on wide screens and
// collapses into a "Contents" disclosure on narrow ones.
function setUpContentsDisclosure(details) {
  const summary = details.querySelector('summary');
  const wide = window.matchMedia('(min-width: 60.01rem)');
  const sync = () => {
    details.open = wide.matches;
    summary.tabIndex = wide.matches ? -1 : 0; // a plain label on wide screens
  };
  wide.addEventListener('change', sync);
  sync();
  summary.addEventListener('click', (event) => {
    if (wide.matches) event.preventDefault();
  });
  details.addEventListener('click', (event) => {
    if (event.target.closest('a') && !wide.matches) details.open = false;
  });
}
