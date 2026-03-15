# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro static site/blog deployed on GitHub Pages at https://flpvvvv.com. A modern, elegant bio site for a data scientist with heavy mathematical content.

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
- `src/styles/` - Global CSS with Tailwind

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
- Markdown plugins: remark-math, rehype-katex for LaTeX rendering
- Shiki for syntax highlighting

**tailwind.config.mjs**
- Custom color palette (teal primary, warm neutral grays)
- Typography plugin for prose styling
- Dark mode via class strategy

### Styling
- Theme color: Teal (`primary-*`)
- Fonts: Crimson Pro (serif body), Inter (sans UI), JetBrains Mono (code)
- Dark/light mode toggle in header
- Reading progress bar at top of page

### Math Rendering
- Inline math: `$...$`
- Block math: `$$...$$`
- Uses KaTeX (fast, no JavaScript runtime required)

### Deployment
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Uses pnpm for package management
- Builds to `dist/` and deploys to `gh-pages` branch
- Custom domain configured via CNAME file