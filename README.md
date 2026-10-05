<div align="center">

<a href="https://www.lib.ncsu.edu/" aria-label="nc state university libraries logo"><img src="assets/lib_logo_whiteBG.svg" width="400" alt="NC State University Libraries Logo" /></a>

<h2>NC State University Libraries Python Workshops</h2>

<a href="https://www.lib.ncsu.edu/workshops"><img alt="NC State Libraries Workshops" src="https://img.shields.io/badge/NC%20State%20Libraries-Workshops-red"></a>
<a href="https://www.lib.ncsu.edu/staff/department/data-science-services"><img alt="Data Science Services" src="https://img.shields.io/badge/Data%20Science%20Services-Libraries-red"></a>
<a href="https://go.ncsu.edu/getdatahelp"><img alt="GetDataHelp" src="https://img.shields.io/badge/Get%20Data%20Help-go.ncsu.edu%2Fgetdatahelp-red"></a>
<a href="mailto:getdatahelp@ncsu.edu"><img alt="Email: getdatahelp@ncsu.edu" src="https://img.shields.io/badge/Email-getdatahelp%40ncsu.edu-red"></a>
<br/>

</div>

# AI in Data Science Workshops

This repository is organized by workshop so each content area can scale independently.

## Workshop Structure

```text
workshops/
  <workshop_slug>/
    README.md
    data/
    notebookLM/ (optional)
    *.ipynb
```

## Available Workshops

### ER Wait Time Data Analysis
- **Workshop Folder**: [workshops/er_wait_time/](workshops/er_wait_time/)
- **Workshop README**: [workshops/er_wait_time/README.md](workshops/er_wait_time/README.md)
- **Template Notebook**: [workshops/er_wait_time/er_wait_time_data.ipynb](workshops/er_wait_time/er_wait_time_data.ipynb)
- **Filled Notebook**: [workshops/er_wait_time/er_wait_time_data_filled.ipynb](workshops/er_wait_time/er_wait_time_data_filled.ipynb)

### Engine Production Analysis
- **Workshop Folder**: [workshops/engine_production/](workshops/engine_production/)
- **Workshop README**: [workshops/engine_production/README.md](workshops/engine_production/README.md)
- **Template Notebook**: [workshops/engine_production/engine_production_data.ipynb](workshops/engine_production/engine_production_data.ipynb)
- **Filled Notebook**: [workshops/engine_production/engine_production_data_filled.ipynb](workshops/engine_production/engine_production_data_filled.ipynb)
- **Facilitation Guide**: [workshops/engine_production/story_map_one_page.md](workshops/engine_production/story_map_one_page.md)

### ISE498: AI-Assisted Analysis and Reporting
- **Workshop Folder**: [workshops/ise498/](workshops/ise498/)
- **Workshop README**: [workshops/ise498/README.md](workshops/ise498/README.md)
- **Template Notebook**: [workshops/ise498/engine_production_gemini.ipynb](workshops/ise498/engine_production_gemini.ipynb)
- **Filled Notebook**: [workshops/ise498/engine_production_gemini_filled.ipynb](workshops/ise498/engine_production_gemini_filled.ipynb)
- **Report Guide (Part 2)**: [workshops/ise498/report_with_claude.md](workshops/ise498/report_with_claude.md)
- **Facilitation Guide**: [workshops/ise498/facilitator_guide.md](workshops/ise498/facilitator_guide.md)

## Adding a New Workshop

1. Create a new folder in `workshops/<new_workshop_slug>/`
2. Add a workshop-specific `README.md`
3. Add notebooks, `data/`, and any supporting resources
4. Add an entry in the **Available Workshops** section above

## Global Files

- `requirements.txt` contains shared Python dependencies.
- `assets/` contains shared branding assets used across workshop docs.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
