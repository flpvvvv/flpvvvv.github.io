# flpvvvv.github.io

Editorial math-first bio site and research notebook for flpvvvv, a data scientist writing about statistics, inference, machine learning, and the craft of understanding data.

Built with [Astro](https://astro.build) and deployed on [GitHub Pages](https://pages.github.com/).

## Site

- **URL**: https://flpvvvv.com
- **Author**: flpvvvv

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Math Rendering**: [MathJax](https://www.mathjax.org) SVG output via `remark-math` + `rehype-mathjax`
- **Syntax Highlighting**: Shiki (GitHub Dark theme)
- **Deployment**: GitHub Actions → GitHub Pages

## Highlights

- Compile-time MathJax for crisp static equation rendering
- Editorial scientific-journal visual system with warm paper tones and margin-driven layouts
- Markdown content collections for posts, tags, and archive pages
- Light/dark theme toggle, reading progress bar, and math-safe overflow handling for dense equations

## Content

The site is blog-first: long-form notes and essays, primarily grounded in the **MITx: 18.6501x Fundamentals of Statistics** course and related statistical topics.

Topics include:
- Probability theory and distributions
- Estimation methods (MLE, Method of Moments, M-estimation)
- Hypothesis testing
- Bayesian statistics
- Confidence intervals

## License

MIT