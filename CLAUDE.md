# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll static site/blog deployed on GitHub Pages at https://flpvvvv.com. Based on the LOFFER template.

## Development Commands

```bash
# Install dependencies
bundle install

# Run local development server (default: http://localhost:4000)
bundle exec jekyll serve

# Build the site to _site/
bundle exec jekyll build
```

## Architecture

### Content Structure
- `_posts/` - Blog posts as Markdown files with naming convention `YYYY-MM-DD-title.md`
- `_layouts/` - HTML templates: `default.html` (base), `post.html` (articles), `page.html` (static pages)
- `_includes/` - Reusable partials: `head.html`, `nav.html`, `footer.html`, `toc.html`, etc.
- `_sass/` - SCSS partials imported by `style.scss`

### Post Front Matter
```yaml
---
layout: post
title: Post Title
date: YYYY-MM-DD
Author: flpvvvv
tags: [tag1, tag2]
comments: false     # Enable Disqus/Gitalk
toc: true           # Show table of contents
pinned: false       # Pin to top of listing
---
```

### Key Configuration (`_config.yml`)
- Navigation defined in `navigation` array
- Pagination: 8 posts per page
- Excerpt separator: `<!-- more -->`
- MathJax enabled for LaTeX rendering (inline with `$...$`, block with `$$...$$`)

### Styling
- Theme color controlled in `_sass/_variables.scss` via open-color palette (currently `teal`)
- Mobile breakpoint: 1200px
- TOC appears as fixed sidebar on wide screens when `toc: true`