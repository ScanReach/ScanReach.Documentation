# ScanReach.Docs

A modern user manual written as a website using raw Markdown and Vitepress.

Currently hosted at [https://scanreach.github.io/ScanReach.Documentation/](https://scanreach.github.io/ScanReach.Documentation/)

Vitepress docs: https://vitepress.dev/guide/what-is-vitepress

## Features:

- [x] Raw text in Markdown format instead of pdf or html
- [x] Accessible on all devices in browser
- [ ] Printable to PDF -> Probably need to use cypress or similar to render each site to pdf then merge them
- [x] Searchable -> Press `cmd+k` or `ctrl+k` to search
- [x] Short update cycle -> Push to main and it's live
- [x] Version support
- [x] Customiseable

## Getting started

1. Install [Node.js](https://nodejs.org/en/download/)
2. Open terminal and run `npm install`
3. Run `npm run docs:dev`

## Edit files

All files are located in the `docs` folder

## Show new file in sidebar:

Open `.vitepress/config.mts` and add the file to the `sidebar` array in appropriate place
