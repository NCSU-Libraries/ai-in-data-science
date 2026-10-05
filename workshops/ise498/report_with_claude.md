# Part 2: Write the Report with Claude

- [Back to the ISE498 workshop overview](README.md)

In Part 1 you built an **evidence pack** in Colab: `findings.md` (every number, computed by code) and three
charts. Now Claude turns that pack into a formatted report for the plant manager. You'll see it done two ways:

| | **Demo A: Claude chat** (everyone) | **Demo B: Claude Code** (optional) |
|---|---|---|
| Where | [claude.ai](https://claude.ai) in your browser | A terminal, inside the evidence-pack folder |
| You need | A Claude account (the Free plan works) | Claude Code installed and signed in (Pro, Max, Team, Enterprise or an API account; not the Free plan) |
| You get | A Markdown report, then a PDF and an optional web page | `report.md`, an audit file, `report.pdf` and a Vite web page, all written to disk |
| Time | About 12 minutes | About 20 minutes for all four prompts (in class, a 5-minute instructor demo) |

> **No evidence pack?** Use the example one: download `findings.md` and the `charts/` images from
> [`example_outputs/`](example_outputs/).

---

## The Report Brief (Both Demos Use It)

Copy this prompt as is. Each part has a job; see [why the brief works](#why-the-brief-works) below.

```text
You are writing a short operations report for the plant manager of an engine plant.

SOURCE OF TRUTH
The evidence pack: findings.md (built by code from the cleaned data) and the three charts in charts/.

RULES
1. Use only numbers from sections 1-10 of findings.md (section 11 is the analyst's own wording, not data).
   Do not calculate, estimate or round to new numbers. If the report needs a number that isn't there,
   write "not in the data" instead.
2. Present causes as hypotheses ("likely", "worth checking"). The data has no reason codes.
3. Build the story around the analyst takeaways in section 11 of findings.md. If a takeaway is not
   supported by the numbers, leave it out and list it under "Notes for the analyst" at the end.
4. Include the limitations from section 10, especially that machine and model effects cannot be separated.
5. Write for a busy manager: plain language, no code, and explain any statistic in one short line.

FORMAT: Markdown, with this structure
# <title>
<one line: period covered and data source>
## Executive summary      (3 bullets, each with one key number)
## What we analyzed       (2-3 sentences: data, period, cleaning)
## Findings               (one ### subsection per finding: key numbers, the matching chart as
                           ![short caption](charts/<file name>), and a one-line "So what")
## Recommendations        (table: Action | Evidence | Suggested owner (role) | First step this week |
                           Success metric, measured against a current figure from findings.md, with no
                           invented targets)
## Limitations
## Appendix: data cleaning log
## Notes for the analyst  (only if rule 3 left something out)

LENGTH: 1-2 pages: 600-900 words, not counting the appendix and the notes.
```

---

## Demo A: Claude Chat (claude.ai)

1. **Unzip** `evidence_pack.zip`. You'll see `findings.md` and a `charts/` folder.
2. Open [claude.ai](https://claude.ai) and start a **new chat**.
3. **Attach** `findings.md` and the three PNG files from `charts/` with the **+** button (or drag them into
   the chat). If Claude won't take the `.md` file, rename it to `findings.txt` or paste its text into the message.
4. **Paste the report brief** and send it.
5. **Read the draft.** Longer documents often open in a side panel (an *artifact*). Does it sound like
   something you'd hand to a plant manager?
6. **Make Claude check its own work.** Send:

   ```text
   Audit your report. In a table, list every quantity it contains (counts, rates, minutes, shares; skip
   labels such as M1 or 03:00, and group repeats), where it appears, and the exact line of findings.md
   that supports it. Flag anything without support, then give me a corrected report if needed.
   ```

7. **Fact-check it yourself** with the [checklist](#fact-check-checklist). Claude's audit helps, but
   you sign off on the report.

> **Try this:** to see rule 3 at work, add a takeaway the numbers don't support (for example, "M3 has the
> most downtime") before you build the pack. Claude should leave it out of the report and list it under
> "Notes for the analyst".

### Get the Formats You Need

**Markdown (always start here).** Copy or download the report and save it as `report.md` **inside your
`evidence_pack` folder**, next to `charts/`, so the image links work. Preview it in VS Code
(`Cmd/Ctrl + Shift + V`), on GitHub, or in any Markdown app.

**PDF.** Ask:

```text
Create a PDF of this report: US Letter, clean typography, the three charts embedded, page numbers.
```

File creation is available on every Claude plan. It relies on the **code execution and file creation**
setting (Settings → Capabilities), which is on by default for most accounts, and it uses your usage limit
faster than plain chat. If you don't get a PDF to download, use this fallback:

```text
Give me the report as one print-ready HTML file. Load the charts from charts/<file name> and include
print styles for US Letter.
```

Save the result as `report.html` in your `evidence_pack` folder, open it in your browser, then choose
**Print → Save as PDF**.

**Web page (optional).** Ask:

```text
Turn this report into a polished single-page web report as an HTML artifact. Redraw the three charts
from the tables in findings.md (Figure 1: section 7 hour table, Figure 2: sections 4 and 8,
Figure 3: section 6) and keep every number identical to findings.md.
```

The artifact can't see your PNG files, so Claude redraws the charts from the tables. **Check that the
redrawn values match `findings.md`.**

---

## Demo B (Optional): Claude Code as an Agent

Claude Code works on files on your computer: it reads the pack, writes the report, runs tools to build a
PDF and a web page, and checks its own output.

### One-Time Setup

- Install Claude Code ([setup guide](https://code.claude.com/docs/en/setup)):
  - macOS, Linux or WSL: `curl -fsSL https://claude.ai/install.sh | bash`
  - Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`
- Run `claude` once and sign in with a Pro, Max, Team or Enterprise plan, or an API (Console) account.
- For the web page you also need [Node.js](https://nodejs.org/) 22 or newer (the current LTS is fine).

### Run It

```bash
cd path/to/evidence_pack    # the unzipped folder that holds findings.md and charts/
claude --permission-mode manual
```

Recent versions of Claude Code start in **auto mode**, where it edits files and runs most commands without
stopping to ask. `--permission-mode manual` makes it ask before every file edit and command, so the audience
sees each step. Read each request before you approve it. **Shift+Tab** switches modes during a session.

Then send these prompts one at a time. Look at the result after each one.

**B1: Write the report**

```text
Read findings.md and look at each PNG in charts/. Then write report.md in this folder, following this brief:

<paste the report brief here>
```

**B2: Audit it**

```text
Audit report.md against findings.md. Write report_audit.md with a table that lists every quantity in the
report (counts, rates, minutes, shares; skip labels such as M1 or 03:00, and group repeats) and the exact
line of findings.md that supports it. If anything is unsupported, fix report.md and tell me what you changed.
```

**B3: Make a PDF**

```text
Create report.pdf from report.md with the charts embedded: US Letter, readable typography, page numbers
in the footer. Don't use LaTeX; for example, convert with pandoc to HTML and print it with a headless
browser. Ask before installing anything, and tell me which tool you used.
```

**B4: Build a web page (Vite)**

```text
Create a small Vite project (vanilla JavaScript, no framework) in report-site/ that presents report.md
as a polished single-page report. Load report.md and the charts from the parent folder at build time
instead of pasting the text by hand. Add a table of contents, light and dark mode, and a print stylesheet.
Then run npm install and npm run build, fix any errors, and tell me how to preview it.
```

Preview the site inside `report-site/` with `npm run preview` (after a build) or `npm run dev`. Opening
`dist/index.html` directly shows a blank page, because the page needs a local server.

**What makes this "agentic":** you describe the outcome, and Claude Code plans the steps, runs real tools,
reads their output and fixes its own errors. The brief and the evidence pack keep it honest, exactly as in
the chat.

---

## Fact-Check Checklist

Before anyone else sees the report:

- [ ] **Numbers:** spot-check five numbers against `findings.md`. All five must match exactly.
- [ ] **Evidence:** every recommendation points to a finding in the report.
- [ ] **Causes:** causes are written as hypotheses ("likely", "worth checking"), not facts.
- [ ] **Limitations:** the report says machine and model effects can't be separated (M1 = V6, M2 = V8, M3 = EV-1).
- [ ] **Charts:** each chart matches its caption and the text around it. Chart labels are rounded to one
      decimal, so the 4.1% on a chart is the 4.09% in the text.
- [ ] **Your voice:** your takeaways shaped the story, or Claude explains why it left one out.

---

## Why the Brief Works

| Part of the brief | Its job |
|---|---|
| **Role and audience** ("plant manager") | Sets the tone, the length and the level of detail |
| **Source of truth** (the evidence pack) | Gives Claude verified numbers instead of guesses |
| **Rules** | Guardrails against invented numbers, causes stated as facts, and missing limitations |
| **Your takeaways** (rule 3) | Keeps you in charge of the interpretation |
| **Format and length** | Makes the output predictable, easy to compare and quick to review |

The same brief works in the chat and in Claude Code. What changes is who does the file handling: you
(chat) or the agent (Claude Code).

## What Good Looks Like

The [`example_outputs/`](example_outputs/) folder has a complete run: the evidence pack from the filled
notebook, plus the report, audit, PDF and Vite page that Claude Code produced in a rehearsal of the Demo B
prompts. (The prompts above include small wording fixes from that rehearsal.) Your report will read
differently, and that's expected. The numbers should not.
