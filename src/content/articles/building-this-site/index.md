---
title: 'Building this website'
description: 'Building my own website: the decisions behind a small, careful portfolio website.'
pubDate: 2026-11-27
tags: ['technical']
cover: './cover.png'
coverAlt: 'This website in both desktop and mobile view'
---

I needed a portfolio to show my skills and write about technical and data analysis projects. I wanted it to live somewhere I control, so I built my own website from the ground up. The goal was a small but well-polished site, and to learn professional tooling along the way.

## Choosing the tools

The design vision was a polished yet minimal look, loosely modelled on a newspaper broadsheet. The tools I chose reflect that:

- [Astro](https://astro.build/), which builds a static site and sends readers very little JavaScript, suiting a site that's mostly for reading.
- Plain CSS with design tokens, rather than a framework, to learn the standard properly and keep things minimal.
- Self-hosted open-source fonts[^fonts] so there are no requests to third parties, in keeping with a site that doesn't track its readers.

## Accessibility as a requirement

Building a website comes with the responsibility to make it accessible. I chose [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) as the target. Some concrete examples of this process:

- Contrast ratios checked for every colour, in both light and dark themes.
- A skip link and a visible focus outline for people who navigate by keyboard.
- The current page announced in the navigation for those who rely on screen readers.
- Tables that scroll on phones, yet stay usable from a keyboard.
- A dark mode that follows the system setting, with a toggle whose animation is switched off for people who prefer reduced motion.

## Working like an engineering team of one

I worked the way a professional team would, with Git for version control and [continuous integration (CI)](https://www.cisco.com/site/us/en/learn/topics/computing/what-is-ci-cd.html) checking every change:

- Feature branches and pull requests, even though I work alone, with the `main` branch protected so it's always deployable.
- Automated checks on every change (linting, formatting, type checks and the build), with automatic deployment to GitHub Pages.
- Small commits with Conventional Commits messages.
- A decision log recording why, not just what, and the associated trade-offs for each decision.

I also used an AI coding assistant, Claude Code, under my direction: for planning, explaining tools, reviewing, and making changes. Every decision stayed mine, including the design choices and the approval of each commit.

## What went wrong, and what I learned

Git, mostly. My university workflow was code, commit, push, repeat. Here, with several branches open at once, each squash-merge left the other branches out of date, and every rebase stopped on a conflict in the decision log, since each branch added an entry to its top. The lesson: merge one branch at a time and rebase the next straight away.

## Where it goes from here

The experience of building this site exposed me to professional workflows: planning before building, documenting decisions, and running automated checks to catch mistakes before deployment. The site is deliberately small, and the next step is filling it with what it was built for: articles analysing public Australian datasets, as well as some of my other tech projects.

[^fonts]:
    Open fonts for this website:
    [Libre Caslon Text](https://fonts.google.com/specimen/Libre+Caslon+Text)
    [IBM Plex Sans](https://www.ibm.com/plex/)
    [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
