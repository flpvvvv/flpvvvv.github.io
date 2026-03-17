# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro static site/blog deployed on GitHub Pages at https://flpvvvv.com. It is a modern editorial bio site and research notebook for a data scientist, with heavy mathematical and statistical content.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run local development server (default: http://localhost:4321)
pnpm dev

# Build the site to dist/
pnpm build

# Preview production build
pnpm preview
```

## Architecture

### Content Structure
- `src/content/posts/` - Blog posts as Markdown files with frontmatter
- `src/layouts/` - HTML templates: `BaseLayout.astro`, `PostLayout.astro`, `PageLayout.astro`
- `src/pages/` - Route pages: `index.astro`, `about.astro`, `posts/`, `tags/`
- `src/lib/posts.ts` - Shared post helpers for reading time, date formatting, grouping, and tag counts
- `src/styles/` - Global CSS with Tailwind
- `public/images/` - Site assets such as portrait, favicon, and social preview images

### Post Front Matter
```yaml
---
title: Post Title
description: Optional description for SEO
date: YYYY-MM-DD
author: flpvvvv
tags: [tag1, tag2]
toc: true        # Show table of contents (default: true)
draft: false     # Exclude from build if true
---
```

### Key Configuration

**astro.config.mjs**
- Site URL for sitemap generation
- Markdown plugins: `remark-math` + `rehype-mathjax/svg` for compile-time MathJax rendering
- MathJax SVG font cache is configured globally to keep heavy math pages smaller
- Shiki for syntax highlighting

**tailwind.config.mjs**
- Editorial palette with verdigris primary, terracotta accent, and warm paper neutrals
- Typography plugin for prose styling
- Custom font system: `Fraunces`, `Source Serif 4`, `IBM Plex Sans`, `IBM Plex Mono`
- Dark mode via class strategy

### Styling
- Theme feel: editorial scientific journal, not a generic tech blog
- Fonts: `Fraunces` (display), `Source Serif 4` (reading), `IBM Plex Sans` (UI), `IBM Plex Mono` (meta/code)
- Shared `paper-panel`, `tag-chip`, archive row, and note-panel styles live in `src/styles/global.css`
- Dark/light mode toggle in header
- Reading progress bar at top of page

### Math Rendering
- Inline math: `$...$`
- Block math: `$$...$$`
- Uses compile-time MathJax SVG output, so equations are rendered statically with no client-side math runtime
- Long display equations are allowed to scroll horizontally instead of being squeezed or boxed aggressively
- Math quality is a core requirement for this project; avoid regressing back to weaker equation styling/integration without explicit reason

### Deployment
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Uses pnpm for package management
- Builds to `dist/` and deploys to `gh-pages` branch
- Custom domain configured via CNAME file