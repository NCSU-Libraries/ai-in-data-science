# Evidence pack: engine production, Oct 21 to Nov 4, 2024

Every number in this file was computed by code from the cleaned dataset on 2026-10-05 10:36. It is the single source of truth for the report.

## 1. Dataset

| Item | Value |
|---|---|
| Source file | engine_production_data_original.csv |
| Period | 2024-10-21 07:00 to 2024-11-04 06:00 (14 plant days; a plant day starts at 07:00) |
| Unit of observation | one machine-hour (one row per machine per hour) |
| Rows after cleaning | 1,002 machine-hours |
| Machines (model built) | M1 (V6), M2 (V8), M3 (EV-1) |
| Shifts | Shift 1 (07:00–14:59); Shift 2 (15:00–22:59); Shift 3 (23:00–06:59) |

## 2. Data cleaning log

- Removed 10 exact duplicate rows (1,018 -> 1,008 rows).
- Standardized 50 abbreviated day names and 17 lowercase model labels.
- Reassigned 3 rows with unknown machine ID 'M99' using the one-model-per-machine rule (V6 -> M1, V8 -> M2, EV-1 -> M3).
- Converted Downtime_Min to numbers; 5 text entries ('Maintenance') became missing because their duration is unknown.
- Dropped 6 impossible rows: negative production or more defects than engines produced (1,008 -> 1,002 rows).
- Kept missing values as missing (not zero): 24 defect counts and 24 downtime values.

How missing values are handled: defect rates use only rows with a known defect count, and downtime totals use only rows with a known downtime value.

## 3. Headline KPIs

| Metric | Value |
|---|---:|
| Engines produced | 36,888 |
| Average engines per machine-hour | 36.8 |
| Defective engines | 439 |
| Defect rate | 1.22% |
| Downtime recorded | 3,333 min (55.55 h) |
| Share of machine time lost to downtime (of 978 machine-hours with a known downtime value) | 5.7% |
| Long stoppages (≥ 20 min) | 44 |

## 4. By machine

| Machine | Model | Machine-hours | Engines | Engines per hour | Defects | Defect rate | Share of defects | Downtime (min) | Share of downtime | Long stoppages |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| M1 | V6 | 331 | 14,766 | 44.6 | 152 | 1.06% | 34.6% | 660 | 19.8% | 0 |
| M2 | V8 | 335 | 12,244 | 36.5 | 247 | 2.06% | 56.3% | 2,058 | 61.7% | 44 |
| M3 | EV-1 | 336 | 9,878 | 29.4 | 40 | 0.41% | 9.1% | 615 | 18.5% | 0 |

## 5. By shift

| Shift | Hours | Machine-hours | Engines | Defects | Defect rate | Share of defects | Downtime (min) | Avg downtime per machine-hour (min) | Long stoppages |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Shift 1 | 07:00–14:59 | 333 | 12,205 | 76 | 0.63% | 17.3% | 1,295 | 4.0 | 18 |
| Shift 2 | 15:00–22:59 | 334 | 12,211 | 74 | 0.62% | 16.9% | 1,164 | 3.6 | 17 |
| Shift 3 | 23:00–06:59 | 335 | 12,472 | 289 | 2.39% | 65.8% | 874 | 2.7 | 9 |

## 6. Defect rate by machine and shift

Table view of Figure 3.

| Machine | Shift 1 | Shift 2 | Shift 3 |
|---|---:|---:|---:|
| M1 (V6) | 0.48% | 0.50% | 2.24% |
| M2 (V8) | 1.36% | 1.27% | 3.48% |
| M3 (EV-1) | 0.00% | 0.00% | 1.23% |

## 7. When defects happen: hour of day

- Median hourly defect rate: 0.67%. Elevated hours (more than twice the median): 03:00–06:59.
- The main elevated window, 03:00–06:59, lies in Shift 3 and covers 4 of 24 hours (16.7% of the day).
- Defects in that window: 245 of 439 (55.8%).
- Defect rate in that window: 4.09%, versus 0.65% in all other hours (6.3×).
- Estimated excess defects in that window (defects above what the rest-of-day rate predicts): about 206.
- Defect rate in that window by machine: M1 3.89% vs 0.53% in other hours; M2 5.74% vs 1.32% in other hours; M3 2.39% vs 0.00% in other hours.
- Shift 3 had the highest defect rate of the 3 shifts on 14 of 14 plant days.

Table view of Figure 1. Defect rates use only rows with a known defect count, so they can differ slightly from defects ÷ engines.

| Hour | Shift | Engines | Defects | Defect rate |
|---|---|---:|---:|---:|
| 07:00 | Shift 1 | 1,484 | 9 | 0.61% |
| 08:00 | Shift 1 | 1,562 | 14 | 0.92% |
| 09:00 | Shift 1 | 1,478 | 10 | 0.68% |
| 10:00 | Shift 1 | 1,548 | 12 | 0.78% |
| 11:00 | Shift 1 | 1,537 | 9 | 0.59% |
| 12:00 | Shift 1 | 1,577 | 10 | 0.67% |
| 13:00 | Shift 1 | 1,555 | 8 | 0.51% |
| 14:00 | Shift 1 | 1,464 | 4 | 0.29% |
| 15:00 | Shift 2 | 1,484 | 11 | 0.74% |
| 16:00 | Shift 2 | 1,528 | 8 | 0.56% |
| 17:00 | Shift 2 | 1,539 | 7 | 0.50% |
| 18:00 | Shift 2 | 1,534 | 9 | 0.60% |
| 19:00 | Shift 2 | 1,595 | 7 | 0.44% |
| 20:00 | Shift 2 | 1,558 | 13 | 0.83% |
| 21:00 | Shift 2 | 1,491 | 10 | 0.67% |
| 22:00 | Shift 2 | 1,482 | 9 | 0.63% |
| 23:00 | Shift 3 | 1,554 | 12 | 0.82% |
| 00:00 | Shift 3 | 1,582 | 11 | 0.70% |
| 01:00 | Shift 3 | 1,552 | 8 | 0.53% |
| 02:00 | Shift 3 | 1,608 | 13 | 0.83% |
| 03:00 | Shift 3 | 1,540 | 67 | 4.41% |
| 04:00 | Shift 3 | 1,588 | 66 | 4.27% |
| 05:00 | Shift 3 | 1,565 | 53 | 3.39% |
| 06:00 | Shift 3 | 1,483 | 59 | 4.36% |

## 8. Long stoppages (≥ 20 min)

- 44 long stoppages, 1,558 min in total (46.7% of all recorded downtime); each lasted 20–58 min.
- Long stoppages by machine: M1: 0, M2: 44, M3: 0.
- They happened on 14 of 14 plant days (2–5 per day on days with a stoppage).
- M2 output: 19.5 engines per hour during long-stoppage hours vs 39.1 in its other hours. Estimated engines lost: about 865 (7.1% of M2's actual output).
- Routine stops (under 20 min): 271 stops, 1,775 min in total, 5–10 min each, on 3 machines.

## 9. Statistical check

- Question: do defect rates differ between shifts?
- Test: Kruskal-Wallis H test (non-parametric) on the defect rate of each machine-hour, grouped by shift.
- Sample sizes (machine-hours with a known defect count): Shift 1: 328, Shift 2: 325, Shift 3: 325.
- Result: H = 97.8, p < 0.001 (significance level 0.05).

## 10. What this data cannot tell us

- Each machine builds exactly one model (M1 = V6, M2 = V8, M3 = EV-1), so machine effects and model effects cannot be separated.
- The period is 14 plant days; longer-term or seasonal patterns are not visible.
- There are no downtime reason codes, defect types, staffing, or maintenance records, so causes can only be hypothesized.
- 24 defect counts and 24 downtime values are missing.

## 11. Analyst takeaways (written by the analyst, not computed)

- Quality loss is mainly a night-shift problem: Shift 3 makes about two-thirds of all defects (2.39% defect rate vs about 0.6% on the day shifts), and it happens on every machine.
- The spike sits at 03:00-06:59, where the defect rate is 4.09%, 6.3 times the rest of the day, and Shift 3 was the worst shift on all 14 plant days. Fatigue or end-of-shift practices are worth checking.
- Downtime is a machine problem: M2 has 61.7% of all downtime because of 44 long stoppages (20-58 min) that never happen on M1 or M3. They cost an estimated 865 engines.
- Each machine builds one model, so we can't tell whether M2's problems come from the machine or from the V8. Maintenance records for M2 should settle it.

## 12. Charts

| File | What it shows | Table view |
|---|---|---|
| `charts/fig1_defect_rate_by_hour.png` | Defect rate for each hour of the day, grouped by shift; elevated hours highlighted | Section 7 |
| `charts/fig2_downtime_by_machine.png` | Downtime minutes per machine, routine stops vs long stoppages | Sections 4 and 8 |
| `charts/fig3_defect_rate_machine_shift.png` | Defect rate for every machine and shift combination | Section 6 |
