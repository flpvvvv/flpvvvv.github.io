---
layout: post
title: Support Latex in Github Page to show math equations
date: 2019-11-30
Author: flpvvvv
tags: [Github Page,Bug]
comments: false
toc: false
pinned: true
---

Recently, I started to use Github Page to write a summary on a course that I followed in Edx about Statistics. I am using **Jekyll** to create static websites. In order to insert lots of math equations, I am using **Mathjax**. 

You can add these scripts in the **head** to import Mathjax:
~~~~
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
<script type="text/x-mathjax-config">
	MathJax.Hub.Config({
		tex2jax: {
			skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
			inlineMath: [['$','$']]
		}
	});
</script>
~~~~

By doing so, you can show most of the math functions correctly, except for some **inlineMath**: math between two $ signs.

what you want to show | what web shows
--- | ---
$\vert x \vert$ | *seperation of table column*
$\\{1\\}$ | $\{1\}$ *(no "{}")*
$(X)\_{0}+X_{1}$ | $(X)_{0}+X_{1}$ *(`<em>` tags)*

Solutions:

what you want to show | What you should enter
--- | ---
`|` | `\vert`
`{` | `\\{`
`}` | `\\}`
`)_` *(underscore)* | `)\_` or add a space between `\` and `_` 


