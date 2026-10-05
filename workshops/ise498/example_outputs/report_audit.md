# Number audit: report.md vs findings.md

*Audited 2026-10-05. Every number in report.md is matched to the line of findings.md that states it.*

## Result

- **108 number occurrences** in report.md (on 35 report lines) were checked. **All are supported** by a line in findings.md. No number was calculated, estimated or rounded.
- **No changes to report.md were needed.**
- Two numbers in the "Notes for the analyst" (about two-thirds, about 0.6%) are quoted from the analyst takeaways in section 11, which are written by the analyst rather than computed. The report uses them only to explain why it uses the computed 65.8%, 0.63% and 0.62% instead.
- Only format changes were made: "6.3×" is written "6.3 times", "->" is written "→", and the period "2024-10-21 07:00 to 2024-11-04 06:00" is written "Oct 21 to Nov 4, 2024", as in the findings.md title.

## Watch-outs (supported, but easy to misread)

- **2.39% means two different things in findings.md:** the Shift 3 defect rate (line 53) and M3's defect rate in the 03:00–06:59 window (line 72). The report uses both, each with its label (report lines 20 and 34).
- **Chart labels are rounded:** Figure 1 shows 4.1% and 0.6%, and Figure 3 shows one decimal (for example 3.5%). The report text quotes the findings.md values (4.09%, 0.65%, 3.48%), so text and chart labels differ slightly.

## How the check was done

1. A script listed every number in report.md: integers, decimals, percentages, times, ranges, the p-value and number words such as "one".
2. Each number was matched to the findings.md line that states it. Section 11 (analyst wording) was used only for the quote in the analyst notes.
3. The script confirmed that each quoted value appears verbatim on the cited findings.md line, and that every extracted number is listed in the table below.

**Not counted as numbers:** identifiers and labels (M1, M2, M3, M99, V6, V8, EV-1, Shift 1–3, chart file names), heading and section numbering, references such as "Takeaway 3" or "section 10", and wording that is not a data value: "any one machine" (idiom), "a few bad nights" (idiom), "worth checking first", "first place to look", column header "First step this week", "a first check".

## Audit table

Line numbers refer to the current report.md and findings.md. The "Exact text" column quotes the findings.md line verbatim; for rows of a findings.md table, the outer pipes are dropped.

| # | report.md line | Number(s) as written in report | What it is | findings.md line | Exact text of that findings.md line | Status |
|---:|---:|---|---|---:|---|---|
| 1 | 3 | 21, 4, 2024 | Period covered | 1 | `# Evidence pack: engine production, Oct 21 to Nov 4, 2024` | Supported |
| 2 | 3 | 14 | Length of period (plant days) | 10 | `Period \| 2024-10-21 07:00 to 2024-11-04 06:00 (14 plant days; a plant day starts at 07:00)` | Supported |
| 3 | 7 | 03:00, 06:59 | High-defect window | 68 | `- The main elevated window, 03:00–06:59, lies in Shift 3 and covers 4 of 24 hours (16.7% of the day).` | Supported |
| 4 | 7 | 6.3 | Window defect rate vs all other hours | 70 | `- Defect rate in that window: 4.09%, versus 0.65% in all other hours (6.3×).` | Supported ("6.3×" written as "6.3 times") |
| 5 | 8 | 61.7% | M2 share of all downtime | 44 | `M2 \| V8 \| 335 \| 12,244 \| 36.5 \| 247 \| 2.06% \| 56.3% \| 2,058 \| 61.7% \| 44` | Supported |
| 6 | 9 | 865 | Estimated engines lost on M2 | 109 | `- M2 output: 19.5 engines per hour during long-stoppage hours vs 39.1 in its other hours. Estimated engines lost: about 865 (7.1% of M2's actual output).` | Supported |
| 7 | 9 | one | One model per machine | 121 | `- Each machine builds exactly one model (M1 = V6, M2 = V8, M3 = EV-1), so machine effects and model effects cannot be separated.` | Supported |
| 8 | 13 | 21, 4, 2024 | Period covered | 1 | `# Evidence pack: engine production, Oct 21 to Nov 4, 2024` | Supported |
| 9 | 13 | one, one, one | Definition of a machine-hour | 11 | `Unit of observation \| one machine-hour (one row per machine per hour)` | Supported |
| 10 | 13 | 1,002 | Machine-hours after cleaning | 12 | `Rows after cleaning \| 1,002 machine-hours` | Supported |
| 11 | 13 | 36,888 | Engines produced | 31 | `Engines produced \| 36,888` | Supported |
| 12 | 19 | 23:00–06:59 | Shift 3 hours | 14 | `Shifts \| Shift 1 (07:00–14:59); Shift 2 (15:00–22:59); Shift 3 (23:00–06:59)` | Supported |
| 13 | 19 | 65.8%, 289 | Shift 3 defects and share of all defects | 53 | `Shift 3 \| 23:00–06:59 \| 335 \| 12,472 \| 289 \| 2.39% \| 65.8% \| 874 \| 2.7 \| 9` | Supported |
| 14 | 19 | 439 | All defective engines | 33 | `Defective engines \| 439` | Supported |
| 15 | 20 | 2.39% | Shift 3 defect rate | 53 | `Shift 3 \| 23:00–06:59 \| 335 \| 12,472 \| 289 \| 2.39% \| 65.8% \| 874 \| 2.7 \| 9` | Supported |
| 16 | 20 | 0.63% | Shift 1 defect rate | 51 | `Shift 1 \| 07:00–14:59 \| 333 \| 12,205 \| 76 \| 0.63% \| 17.3% \| 1,295 \| 4.0 \| 18` | Supported |
| 17 | 20 | 0.62% | Shift 2 defect rate | 52 | `Shift 2 \| 15:00–22:59 \| 334 \| 12,211 \| 74 \| 0.62% \| 16.9% \| 1,164 \| 3.6 \| 17` | Supported |
| 18 | 21 | 2.24% | M1 defect rate, Shift 3 (highest of its shifts) | 61 | `M1 (V6) \| 0.48% \| 0.50% \| 2.24%` | Supported |
| 19 | 21 | 3.48% | M2 defect rate, Shift 3 (highest of its shifts; M2 highest in every shift) | 62 | `M2 (V8) \| 1.36% \| 1.27% \| 3.48%` | Supported |
| 20 | 21 | 1.23% | M3 defect rate, Shift 3 (highest of its shifts) | 63 | `M3 (EV-1) \| 0.00% \| 0.00% \| 1.23%` | Supported |
| 21 | 21 | 2.06% | M2 overall defect rate (highest machine) | 44 | `M2 \| V8 \| 335 \| 12,244 \| 36.5 \| 247 \| 2.06% \| 56.3% \| 2,058 \| 61.7% \| 44` | Supported |
| 22 | 22 | p < 0.001 | Shift test result (Kruskal-Wallis) | 117 | `- Result: H = 97.8, p < 0.001 (significance level 0.05).` | Supported |
| 23 | 28 | 03:00–06:59 | High-defect window | 68 | `- The main elevated window, 03:00–06:59, lies in Shift 3 and covers 4 of 24 hours (16.7% of the day).` | Supported |
| 24 | 30 | 03:00 | Hour the spike starts | 67 | `- Median hourly defect rate: 0.67%. Elevated hours (more than twice the median): 03:00–06:59.` | Supported |
| 25 | 31 | 4, 24, 16.7% | Window length and share of the day | 68 | `- The main elevated window, 03:00–06:59, lies in Shift 3 and covers 4 of 24 hours (16.7% of the day).` | Supported |
| 26 | 31 | 245, 439, 55.8% | Defects in the window | 69 | `- Defects in that window: 245 of 439 (55.8%).` | Supported |
| 27 | 32 | 4.09%, 0.65%, 6.3 | Window defect rate vs all other hours | 70 | `- Defect rate in that window: 4.09%, versus 0.65% in all other hours (6.3×).` | Supported ("6.3×" written as "6.3 times") |
| 28 | 33 | 206 | Estimated excess defects in the window | 71 | `- Estimated excess defects in that window (defects above what the rest-of-day rate predicts): about 206.` | Supported |
| 29 | 34 | 3.89%, 0.53%, 5.74%, 1.32%, 2.39%, 0.00% | Window vs other hours, by machine | 72 | `- Defect rate in that window by machine: M1 3.89% vs 0.53% in other hours; M2 5.74% vs 1.32% in other hours; M3 2.39% vs 0.00% in other hours.` | Supported |
| 30 | 35 | 14, 14 | Days Shift 3 was the worst shift | 73 | `- Shift 3 had the highest defect rate of the 3 shifts on 14 of 14 plant days.` | Supported |
| 31 | 37 | 03:00–06:59 | Chart caption: highlighted window | 67 | `- Median hourly defect rate: 0.67%. Elevated hours (more than twice the median): 03:00–06:59.` | Supported |
| 32 | 39 | 03:00–06:59 | High-defect window | 68 | `- The main elevated window, 03:00–06:59, lies in Shift 3 and covers 4 of 24 hours (16.7% of the day).` | Supported |
| 33 | 43 | 2,058, 61.7% | M2 downtime minutes and share | 44 | `M2 \| V8 \| 335 \| 12,244 \| 36.5 \| 247 \| 2.06% \| 56.3% \| 2,058 \| 61.7% \| 44` | Supported |
| 34 | 43 | 3,333 | All recorded downtime | 35 | `Downtime recorded \| 3,333 min (55.55 h)` | Supported |
| 35 | 43 | 660 | M1 downtime minutes | 43 | `M1 \| V6 \| 331 \| 14,766 \| 44.6 \| 152 \| 1.06% \| 34.6% \| 660 \| 19.8% \| 0` | Supported |
| 36 | 43 | 615 | M3 downtime minutes | 45 | `M3 \| EV-1 \| 336 \| 9,878 \| 29.4 \| 40 \| 0.41% \| 9.1% \| 615 \| 18.5% \| 0` | Supported |
| 37 | 44 | 44, 20–58, 1,558, 46.7% | Long stoppages: count, length, total, share | 106 | `- 44 long stoppages, 1,558 min in total (46.7% of all recorded downtime); each lasted 20–58 min.` | Supported |
| 38 | 44 | (no number; "all on M2" / "none on M1 or M3") | Long stoppages all on M2 (none on M1, M3) | 107 | `- Long stoppages by machine: M1: 0, M2: 44, M3: 0.` | Supported |
| 39 | 44 | 14, 14 | Days with a long stoppage | 108 | `- They happened on 14 of 14 plant days (2–5 per day on days with a stoppage).` | Supported |
| 40 | 45 | 19.5, 39.1, 865, 7.1% | M2 output in stoppage hours vs other hours; engines lost | 109 | `- M2 output: 19.5 engines per hour during long-stoppage hours vs 39.1 in its other hours. Estimated engines lost: about 865 (7.1% of M2's actual output).` | Supported |
| 41 | 56 | 03:00, 06:59, 03:00, 06:59, 03:00, 06:59 | High-defect window (3 mentions) | 68 | `- The main elevated window, 03:00–06:59, lies in Shift 3 and covers 4 of 24 hours (16.7% of the day).` | Supported |
| 42 | 56 | 4.09%, 0.65%, 0.65% | Window rate vs other hours (baseline in metric) | 70 | `- Defect rate in that window: 4.09%, versus 0.65% in all other hours (6.3×).` | Supported |
| 43 | 56 | 55.8% | Share of defects in the window | 69 | `- Defects in that window: 245 of 439 (55.8%).` | Supported |
| 44 | 57 | 44, 44, 44 | Long stoppages, all on M2 (evidence, first step, metric baseline) | 107 | `- Long stoppages by machine: M1: 0, M2: 44, M3: 0.` | Supported |
| 45 | 57 | 61.7% | M2 share of downtime | 44 | `M2 \| V8 \| 335 \| 12,244 \| 36.5 \| 247 \| 2.06% \| 56.3% \| 2,058 \| 61.7% \| 44` | Supported |
| 46 | 57 | 865 | Estimated engines lost on M2 | 109 | `- M2 output: 19.5 engines per hour during long-stoppage hours vs 39.1 in its other hours. Estimated engines lost: about 865 (7.1% of M2's actual output).` | Supported |
| 47 | 57 | 14 | Comparison period (plant days) | 122 | `- The period is 14 plant days; longer-term or seasonal patterns are not visible.` | Supported |
| 48 | 58 | one | One model per machine | 121 | `- Each machine builds exactly one model (M1 = V6, M2 = V8, M3 = EV-1), so machine effects and model effects cannot be separated.` | Supported |
| 49 | 63 | one | One model per machine | 121 | `- Each machine builds exactly one model (M1 = V6, M2 = V8, M3 = EV-1), so machine effects and model effects cannot be separated.` | Supported |
| 50 | 64 | 14 | Length of period | 122 | `- The period is 14 plant days; longer-term or seasonal patterns are not visible.` | Supported |
| 51 | 66 | 24, 24 | Missing defect counts and downtime values | 124 | `- 24 defect counts and 24 downtime values are missing.` | Supported |
| 52 | 67 | 865 | Estimated engines lost on M2 | 109 | `- M2 output: 19.5 engines per hour during long-stoppage hours vs 39.1 in its other hours. Estimated engines lost: about 865 (7.1% of M2's actual output).` | Supported |
| 53 | 67 | 206 | Estimated excess defects | 71 | `- Estimated excess defects in that window (defects above what the rest-of-day rate predicts): about 206.` | Supported |
| 54 | 71 | 10, 1,018, 1,008 | Duplicates removed | 18 | `- Removed 10 exact duplicate rows (1,018 -> 1,008 rows).` | Supported ("->" written as "→") |
| 55 | 72 | 50, 17 | Labels standardized | 19 | `- Standardized 50 abbreviated day names and 17 lowercase model labels.` | Supported |
| 56 | 73 | 3, one | Rows reassigned from M99 | 20 | `- Reassigned 3 rows with unknown machine ID 'M99' using the one-model-per-machine rule (V6 -> M1, V8 -> M2, EV-1 -> M3).` | Supported |
| 57 | 74 | 5 | 'Maintenance' text entries made missing | 21 | `- Converted Downtime_Min to numbers; 5 text entries ('Maintenance') became missing because their duration is unknown.` | Supported |
| 58 | 75 | 6, 1,008, 1,002 | Impossible rows dropped | 22 | `- Dropped 6 impossible rows: negative production or more defects than engines produced (1,008 -> 1,002 rows).` | Supported ("->" written as "→") |
| 59 | 76 | 24, 24 | Missing values kept as missing | 23 | `- Kept missing values as missing (not zero): 24 defect counts and 24 downtime values.` | Supported |
| 60 | 82 | two-thirds, 0.6% | Analyst's rounded wording, quoted in Notes for the analyst | 128 | `- Quality loss is mainly a night-shift problem: Shift 3 makes about two-thirds of all defects (2.39% defect rate vs about 0.6% on the day shifts), and it happens on every machine.` | Supported as a quote (section 11 is analyst wording, not computed); not used as a finding |
| 61 | 82 | 65.8% | Shift 3 share of defects | 53 | `Shift 3 \| 23:00–06:59 \| 335 \| 12,472 \| 289 \| 2.39% \| 65.8% \| 874 \| 2.7 \| 9` | Supported |
| 62 | 82 | 0.63% | Shift 1 defect rate | 51 | `Shift 1 \| 07:00–14:59 \| 333 \| 12,205 \| 76 \| 0.63% \| 17.3% \| 1,295 \| 4.0 \| 18` | Supported |
| 63 | 82 | 0.62% | Shift 2 defect rate | 52 | `Shift 2 \| 15:00–22:59 \| 334 \| 12,211 \| 74 \| 0.62% \| 16.9% \| 1,164 \| 3.6 \| 17` | Supported |

