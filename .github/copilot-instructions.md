# Copilot Instructions

## Project Overview

This workspace contains README template repositories for GitHub projects, specifically variations of the popular "Best README Template" project. The main repositories are template collections that help developers create professional README files.

### Repository Variants

- **Best-README-Blank-Repo**: Customized blank template with `tonkatommy` placeholder configurations
- **Best-README-Template**: Original template with example content and documentation  
- **testing-auto-readme-generator**: Node.js project for testing README generation workflows

## Template Structure & Patterns

### Placeholder Variables System

All templates use a consistent placeholder replacement system. When customizing templates, search and replace these variables:

**Primary placeholders** (found in `Best-README-Blank-Repo`):
- `tonkatommy` → target GitHub username
- `repo_name` → target repository name  
- `project_title` → display name for the project
- `project_description` → brief project summary
- `project_license` → license type (e.g., "MIT License")

**Additional placeholders** (found in other templates):
- `github_username` → GitHub username
- `twitter_handle` → Twitter handle without @
- `linkedin_username` → LinkedIn profile ID
- `email_client` → email provider (e.g., "gmail")
- `email` → contact email address

### Directory Structure Conventions

- **Images directory**: Use `readme-images/` for `Best-README-Blank-Repo`, `images/` for other variants
- **Standard files**: `LICENSE.txt`, `CHANGELOG.md`, `README.md`, `BLANK_README.md`
- **Assets**: `logo.png` (80x80), `screenshot.png` for product demos

### Markdown Reference System

Templates use markdown reference-style links for maintainability:
```markdown
[![Shield Name][shield-variable]][url-variable]

[shield-variable]: https://img.shields.io/badge/...
[url-variable]: https://example.com
```

### Badge Styling

Consistent shield styling patterns:
- Use `style=for-the-badge` for main project badges  
- Use `style=flat` for `Best-README-Blank-Repo` variant
- Framework badges follow: `[![Name][Name]][Name-url]` convention

## Development Workflows

### Template Customization Process
1. Start with appropriate BLANK template (`BLANK_README.md` or `README.md` in blank repo)
2. Use editor's find-replace for all placeholder variables
3. Update image paths to match directory structure (`images/` vs `readme-images/`)
4. Customize shield references at bottom of file
5. Replace framework badges in "Built With" section as needed

### Key Files to Modify
- **README.md**: Main project documentation (use as reference)
- **BLANK_README.md**: Template starting point for new projects
- **Images directory**: Logo and screenshot assets
- **LICENSE.txt**: Update license text to match `project_license` placeholder

## Project-Specific Patterns

### Cross-repo Consistency
- All templates derive from `othneildrew/Best-README-Template`
- Maintain consistent section ordering: About → Built With → Getting Started → Usage → Roadmap → Contributing → License → Contact → Acknowledgments
- Preserve "back to top" links: `<p align="right">(<a href="#readme-top">back to top</a>)</p>`

### Node.js Integration (`testing-auto-readme-generator`)
- Uses `cross-spawn` and `pre-commit` for automation
- Basic package.json setup with git hooks
- Focus on template generation and testing workflows

When working with these templates, prioritize maintaining consistency with the established placeholder system and directory conventions across all repository variants.