#!/bin/sh
# Rebuild report.pdf from report.md with tools that are already installed:
#   pandoc (Markdown -> self-contained HTML) + headless Google Chrome (HTML -> PDF).
# Page size, typography and the page-number footer come from pdf/print.css.
set -e
cd "$(dirname "$0")/.."
pandoc report.md --standalone --embed-resources --css pdf/print.css \
  --metadata pagetitle="Engine Plant Operations Report" -o pdf/report.html
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --log-level=3 \
  --no-pdf-header-footer --print-to-pdf="$PWD/report.pdf" "file://$PWD/pdf/report.html"
echo "Wrote $PWD/report.pdf"
