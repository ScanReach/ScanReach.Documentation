# AI Testing fun,

`docker compose up -d`

Download the required model
`docker exec -it scanreachdocumentation-ollama-1 ollama pull gemma:2b`

Ask the docs
`docker exec -it scanreachdocumentation-doc-chat-1 python chat_server.py`

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

### Toggle word wrap for easier editing:

- In VSCode: `View -> Toggle Word Wrap`

## Show new file in sidebar:

Open `.vitepress/config.mts` and add the file to the `sidebar` array in appropriate place

## Adding New FAQ Entries

To add new FAQ entries to this page:

1. **Choose the appropriate category** or create a new one if needed
2. **Add a new `<details>` block** under the relevant category heading
3. **Use this template:**

```html
<details>
  <summary>Your question here?</summary>

  Your detailed answer here. You can include: - Lists and bullet points - [Links
  to other documentation](/docs/page-name) - Code snippets - Multiple paragraphs
</details>
```

### Writing Guidelines:

- Keep questions concise and specific
- Provide actionable answers with clear steps
- Link to relevant documentation pages when appropriate
- Use consistent formatting and language
- Test any code examples or procedures before adding them
