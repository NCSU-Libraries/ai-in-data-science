# Example Outputs

- [Back to the ISE498 workshop overview](../README.md)

A complete run of the workshop. Use it to preview what each stage produces, or as a fallback during the session.

| File | What it is | Made by |
|---|---|---|
| [`findings.md`](findings.md) | The evidence pack: every number the report may use | Step 6 of [`engine_production_gemini_filled.ipynb`](../engine_production_gemini_filled.ipynb) |
| [`charts/`](charts/) | The three report charts | The same notebook cell |
| [`report.md`](report.md) | The formatted report | Claude Code, prompt B1 (the report brief) |
| [`report_audit.md`](report_audit.md) | Every number in the report traced to a line of `findings.md` | Claude Code, prompt B2 |
| [`report.pdf`](report.pdf) | The report as a 4-page US Letter PDF | Claude Code, prompt B3 (pandoc to HTML, then headless Chrome) |
| [`pdf/`](pdf/) | The script and print styles used for the PDF | Claude Code, prompt B3 |
| [`report-site/`](report-site/) | A Vite web page that renders `report.md` and the charts | Claude Code, prompt B4 |

## View the Web Page

Requires Node.js 22 or newer.

```bash
cd report-site
npm install
npm run dev        # or: npm run build, then npm run preview
```

Opening `dist/index.html` directly shows a blank page, because the page needs a local server.

## Rebuild the PDF

After editing `report.md`, run `sh pdf/build_pdf.sh` (macOS; needs pandoc and Google Chrome).

## Notes

- These files come from a rehearsal of the Demo B prompts in [`report_with_claude.md`](../report_with_claude.md).
  The prompts there include small wording fixes from that rehearsal.
- `findings.md` was regenerated after the rehearsal with clearer labels. No values changed, except that downtime
  hours now read 55.55 h instead of a float-rounded 55.5 h. The one audit row quoting that line was updated to match.
- Claude's wording changes from run to run. The numbers should not.
