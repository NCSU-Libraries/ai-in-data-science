# ISE498 Facilitator Guide (60 Minutes)

- [Back to the ISE498 workshop overview](README.md)

**Main story:** what is happening → where loss is concentrated → why it may be happening → what to do next.

**Workflow lesson:** the AI writes the code and the prose; people set the rules, check the numbers and own
the interpretation.

---

## Before the Session

- [ ] Run `engine_production_gemini.ipynb` end to end in Colab with the **same type of Google account your
      participants will use** (test an @ncsu.edu account). Confirm the Gemini panel opens from the spark icon
      (✦) at the bottom of the notebook and answers. Gemini needs an 18+ account, and school-managed accounts
      may have it turned off; if so, participants can use a personal Google account.
- [ ] If Gemini doesn't appear, check **Settings → AI Assistance** for "Hide generative AI features".
- [ ] Confirm `evidence_pack.zip` downloads from Colab in your browser (allow pop-ups and downloads).
- [ ] Do a dry run of Demo A on claude.ai with [`example_outputs/`](example_outputs/). PDF creation needs the
      "code execution and file creation" setting (on by default for most accounts); otherwise show the
      HTML → Print → Save as PDF fallback.
- [ ] Demo B (optional): Claude Code installed and signed in (paid plan or API account), Node.js 22+. In a
      rehearsal the four prompts took about 10 (B1), 3 (B2), 3 (B3) and 6 (B4) minutes, so **run B1 and B2
      before class** in the demo folder, and run B4 once so npm's cache is warm. Start the live part with
      `claude --permission-mode manual`, so the audience sees each step (newer versions otherwise start in
      auto mode and don't stop to ask).
- [ ] Keep [`example_outputs/`](example_outputs/) open in a browser tab. It's the fallback for every stage.
- [ ] Tell participants to bring a laptop, a Google account and a Claude account.

## Run Sheet

| Time | Segment | You | Participants | Anchor line |
|---|---|---|---|---|
| 0:00 | Intro | Show the workflow diagram and the one rule | Open the notebook, **File → Save a copy in Drive** | "The report may only use numbers that code computed." |
| 0:05 | Step 0: Load | Run the cell together | Run the load cell | |
| 0:07 | Step 1: Trust check | Demo the loop once: paste prompt, read the code aloud, run, compare | Same | "Don't fix what you haven't looked at." |
| 0:12 | Step 2: Clean | Stress the explicit rules and "NaN, not 0" | Prompt, compare, catch-up cell if needed | "You decide the rules; the AI writes the code." |
| 0:19 | Step 3: KPIs | Point out the 1.22% vs 1.19% trap | Prompt, compare | "Define the metric, or the AI will define it for you." |
| 0:24 | Step 4: Concentration | Let them discover it, then ask "one problem or two?" | Prompts 4a and 4b | "Averages hide; breakdowns reveal." |
| 0:32 | Step 5: Takeaways | Ask 1-2 people to read a takeaway aloud | Write 3-4 takeaways | "The numbers are computed; the meaning is yours." |
| 0:36 | Step 6: Evidence pack | Open `findings.md` and walk through its sections | Run the builder, download the zip | "If it's not in the pack, it's not in the report." |
| 0:39 | Part 2, Demo A | Live on claude.ai: attach, brief, audit, PDF | Follow along | "Trust, then verify every number." |
| 0:51 | Part 2, Demo B (optional) | Show the B1 report and B2 audit you ran before class, run B3 (PDF) live, then show the B4 site | Watch | "Same brief, now the agent handles the files." |
| 0:56 | Wrap-up | 60-second close (below) | Questions | |

**Running behind?** Skip the stretch step. Do Step 3 as an instructor demo. Have everyone run the Step 2
catch-up cell at 0:19. Show Demo B from `example_outputs/` instead of running it live.

## Answer Key

Numbers from the reference run (`engine_production_gemini_filled.ipynb`), with the cleaning rules in Step 2.

**Baseline:** 14 plant days, 1,002 machine-hours, 36,888 engines, 439 defective (**1.22%**), 3,333 downtime
minutes (**5.7%** of machine time). A plant-wide 1.22% looks harmless, which is the point of Step 4.

**Finding 1: quality loss is about *when*.**
- Shift 3 (23:00-06:59) defect rate **2.39%** vs 0.63% and 0.62% on shifts 1 and 2. It makes 65.8% of defects.
- Inside Shift 3, the spike is **03:00-06:59**: 4.09% vs 0.65% in all other hours (**6.3×**). That's 245 of 439
  defects (55.8%) in 4 of 24 hours, about 206 more defects than the rest-of-day rate predicts.
- It shows up on every machine (M1 3.89% vs 0.53%, M2 5.74% vs 1.32%, M3 2.39% vs 0.00%) and Shift 3 was the
  worst shift on **all 14 plant days**. Kruskal-Wallis: H = 97.8, p < 0.001.
- Hypotheses to check: fatigue late in the night shift, end-of-shift handover or inspection practices,
  night staffing levels, lighting.

**Finding 2: downtime loss is about *where*.**
- M2 has **61.7%** of all downtime (2,058 of 3,333 minutes).
- All **44 long stoppages** (20-58 min each, 1,558 min, 46.7% of all downtime) happen on M2, on all 14 plant days
  (2-5 per day). M1 and M3 only have routine 5-10 minute stops.
- During a long-stoppage hour M2 makes 19.5 engines vs 39.1 in its other hours: about **865 engines lost**
  (7.1% of M2's output). The estimate sums, over the 44 stoppage hours, M2's average output in its other hours
  minus its actual output. Multiplying the rounded averages (44 × 19.6) gives 862 instead.
- Hypotheses to check: a recurring jam, tooling wear, a material-feed problem. M2's maintenance logs settle it.

**The limitation to listen for:** each machine builds one model (M1 = V6, M2 = V8, M3 = EV-1), so machine and
model effects can't be separated. M2's problems may belong to the V8 instead.

## Planted Data Issues (Steps 1-2)

| Issue | Rows | Rule in the Step 2 prompt |
|---|---|---|
| Exact duplicate rows | 10 | Remove |
| Abbreviated day names (`Mon`) | 50 | Expand |
| Lowercase model (`v6`) | 17 | Uppercase |
| Unknown machine `M99` | 3 | Reassign from the model (one model per machine) |
| `Maintenance` text in `Downtime_Min` | 5 | Missing (NaN), not 0 |
| Negative production (-50) | 3 | Drop |
| 20 defects out of 10 engines | 3 | Drop |
| Missing defect counts / downtime values | 24 / 21 in the raw data | Keep as missing |

## Coaching: Common Gemini Slips

| You'll see | Why it matters | Nudge |
|---|---|---|
| Missing or `Maintenance` downtime filled with 0 | Hides downtime that happened | "Rule 4 says NaN, not 0." |
| Every row with any missing value dropped | Throws away good production data | "Rule 7: keep missing values as missing." |
| `M99` rows dropped instead of reassigned | Loses 3 rows; small, but the rule was explicit | "What does rule 3 say?" |
| Defect rate of 1.19% | Denominator includes rows whose defect count is unknown | Reread the Step 3 metric definition. |
| Average of per-row defect rates instead of total defects ÷ total production | A different metric from the checkpoint | "Total defects divided by total production." |
| "Shift 1 has the most downtime, so add staff" | Downtime is an M2 problem, not a shift problem | "Is that the shift, or one machine?" |
| Long code that also edits `df_raw` | Step 1 should only look | "Do not change df_raw." |

## Coaching: Common Claude Slips

| You'll see | Fix |
|---|---|
| New numbers ("about 4× higher", sums, rounded percentages) | Rule 1. Run the audit prompt, then ask Claude to use the `findings.md` figure. |
| Causes stated as facts ("operator fatigue causes...") | Rule 2. Ask for hypotheses with what to check. |
| No mention of the machine-model link | Rule 4. Point Claude at section 10. |
| Broken chart images in the Markdown | Save `report.md` next to `charts/`, inside the evidence-pack folder. |
| A web-page artifact with redrawn charts | Compare its values with the `findings.md` tables before sharing. |
| Claude Code asks to install LaTeX (BasicTeX) for the PDF | Decline. B3 asks for pandoc to HTML plus a headless browser, which needs no install. |
| The Vite page is blank | Opening `dist/index.html` directly doesn't work. Use `npm run preview` or `npm run dev`. |

## Fallbacks

| Problem | Fallback |
|---|---|
| Gemini unavailable, or the daily Gemini limit is reached | Step 2 catch-up cell; run Steps 3-4 as an instructor demo or show the filled notebook |
| "This notebook was not authored by Google" warning | Click **Run anyway**, or save a copy in Drive first (your own copy skips it) |
| Download blocked in Colab | 📁 Files panel → right-click `evidence_pack.zip` → Download |
| Claude rejects `findings.md` | Rename it to `findings.txt`, or paste its text into the message |
| A participant has no evidence pack | `findings.md` and `charts/` from [`example_outputs/`](example_outputs/) |
| Claude message limit reached | Pair up, or follow the instructor's screen |
| No PDF from Claude | HTML file → browser **Print → Save as PDF** (see the Part 2 guide) |
| Demo B fails live | Show `example_outputs/report.pdf` and the `report-site/` page |

## 60-Second Close

- **Biggest risk:** night-shift quality, 03:00-06:59 (4.09% defect rate, every day)
- **Biggest opportunity:** M2 reliability (44 long stoppages, about 865 engines lost)
- **First action this week:** pull M2's maintenance logs; observe the 03:00-06:59 window on the floor
- **Metrics to watch:** defect rate 03:00-06:59; long stoppages per day on M2
- **Workflow:** Gemini wrote the analysis code, Claude wrote the report, and people set the rules, checked the
  numbers and owned the conclusions.
