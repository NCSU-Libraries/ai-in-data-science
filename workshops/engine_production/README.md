<div align="center">

<a href="https://www.lib.ncsu.edu/" aria-label="nc state university libraries logo"><img src="../../assets/lib_logo_whiteBG.svg" width="400" alt="NC State University Libraries Logo" /></a>

<h2>NC State University Libraries Python Workshops</h2>

<a href="https://www.lib.ncsu.edu/workshops"><img alt="NC State Libraries Workshops" src="https://img.shields.io/badge/NC%20State%20Libraries-Workshops-red"></a>
<a href="https://www.lib.ncsu.edu/staff/department/data-science-services"><img alt="Data Science Services" src="https://img.shields.io/badge/Data%20Science%20Services-Libraries-red"></a>
<a href="https://go.ncsu.edu/getdatahelp"><img alt="GetDataHelp" src="https://img.shields.io/badge/Get%20Data%20Help-go.ncsu.edu%2Fgetdatahelp-red"></a>
<a href="mailto:getdatahelp@ncsu.edu"><img alt="Email: getdatahelp@ncsu.edu" src="https://img.shields.io/badge/Email-getdatahelp%40ncsu.edu-red"></a>
<br/>

</div>

# Engine Production Analysis

- [Back to repository overview](../../README.md)

## 📓 Notebooks Available

### 🎓 Educational Template (Recommended for Learning)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/NCSU-Libraries/ai-in-data-science/blob/main/workshops/engine_production/engine_production_data.ipynb)

**`engine_production_data.ipynb`** - Interactive learning template with:
- Step-by-step instructions
- Guided prompts for interpretation
- Accessibility features
- Placeholder cells for student work

### 📊 Completed Analysis (Reference)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/NCSU-Libraries/ai-in-data-science/blob/main/workshops/engine_production/engine_production_data_filled.ipynb)

**`engine_production_data_filled.ipynb`** - Complete analysis with:
- All code executed with results
- Full visualizations and outputs
- Statistical check results
- Action-focused operational conclusions

## 📘 Facilitation Guide

- **One-page story map**: `story_map_one_page.md`

Use this guide while teaching or presenting to keep a clear story flow:
- What is happening
- Where loss is concentrated
- Why it may be happening
- What to do next

## 📊 Overview

This workshop analyzes hourly engine production operations data and demonstrates practical manufacturing analytics workflows. It includes lightweight data cleaning, exploratory analysis, concentration analysis for quality and downtime losses, and a simple statistical check to support operational decision-making.

## 🚀 Quick Start

### Option 1: Open in Google Colab (Recommended)
Click an "Open In Colab" badge above to run the notebook directly in your browser.

### Option 2: Local Setup
1. Clone this repository:
	```bash
	git clone https://github.com/NCSU-Libraries/ai-in-data-science.git
	cd ai-in-data-science
	```

2. Install required packages:
	```bash
	pip install -r requirements.txt
	```

3. Launch Jupyter:
	```bash
	jupyter notebook workshops/engine_production/engine_production_data.ipynb
	```

## 📚 Dataset Information

- **Source file**: `data/engine_production_data_original.csv`
- **Format**: CSV
- **Primary fields**: `Timestamp`, `Shift`, `Day_of_Week`, `Machine_ID`, `Model_Type`, `Production_Count`, `Defective_Count`, `Downtime_Min`

## 📖 Notebook Contents

### 1. Data Loading & Trust Check
- Load source data and inspect structure
- Validate missingness, duplicates, and value consistency
- Parse and validate timestamps and category labels

### 2. Baseline KPI Analysis
- Total production and throughput context
- Defect rate and quality baseline
- Downtime totals and efficiency proxy

### 3. Loss Concentration Analysis
- Rank contribution by `Machine_ID`
- Compare patterns across `Shift`
- Evaluate concentration by `Model_Type`

### 4. Pattern & Statistical Analysis
- Day-of-week and shift hotspot patterns
- One simple statistical check for observed differences
- Interpretation with practical significance in mind

### 5. Decision Output
- Prioritized actions
- Expected impact and key limitations
- Suggested owner, timeline, and follow-up metric

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
