# AI Image Prompts

Illustrations used in the docs. Generate each image with the prompt below and save it at the given path.
Pages pick the file up automatically on the next build or dev reload. Until the file exists, the page shows
a dashed placeholder with the prompt (dev only) and nothing in production.

- **Format:** PNG (or change the extension in the page), 16:9, about 1600x900
- **Location:** `public/images/ai/`
- **Source of truth:** the `<AIImage prompt="...">` tag in each page. Regenerate this file if you edit a prompt.

## 1. `handbook-hero.png`

- **Save as:** `public/images/ai/handbook-hero.png`
- **Used in:** `content/docs/index.mdx`
- **Alt text:** Illustrated React learning roadmap

```text
A winding learning path rising from bottom left to top right, made of glowing stepping-stone platforms. Each platform holds a small icon: a code bracket, a hook, a road sign, a cloud with arrows, a database cylinder, a test tube, a wrench, a rocket. A large softly glowing React-style atom orbit floats at the summit. No text. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 2. `code-splitting-chunks.png`

- **Save as:** `public/images/ai/code-splitting-chunks.png`
- **Used in:** `content/docs/advanced/code-splitting.mdx`
- **Alt text:** One large bundle compared with small chunks loaded on demand

```text
Left: one huge heavy cube labelled 'bundle.js' being pushed slowly into a browser window by a tired figure. Right: the same volume split into several small glowing cubes labelled 'home', 'dashboard', 'settings'; only the 'home' cube flies into the browser window immediately while the others wait on a shelf, one of them starting to move when a cursor clicks a nav link. Labels: 'bundle.js', 'home', 'dashboard', 'settings'. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 3. `portal-escape.png`

- **Save as:** `public/images/ai/portal-escape.png`
- **Used in:** `content/docs/advanced/portals.mdx`
- **Alt text:** A modal escaping a clipped container to render at the top level of the page

```text
Split scene. Left half: a small card container with a dashed border representing overflow hidden; a modal dialog inside it is cut off at the edges, with a red cross badge. Right half: the same card, but the modal floats out of it through a glowing circular portal and sits centred above the whole page on a dimmed backdrop, with a green check badge. A thin glowing thread still connects the modal back to its card to show it is still its React child. Labels: 'overflow: hidden', 'createPortal'. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 4. `components-ui-breakdown.png`

- **Save as:** `public/images/ai/components-ui-breakdown.png`
- **Used in:** `content/docs/fundamentals/components.mdx`
- **Alt text:** A web page exploded into nested component blocks

```text
An e-commerce web page shown in an exploded isometric view: the full page at the back, and in front of it its parts pulled apart as floating translucent layers: a navbar bar, a sidebar, a grid of three identical product cards, and a footer. Thin dotted lines connect each layer back to where it sits on the page. The three product cards are the same colour to show reuse. Labels on the layers: 'Navbar', 'Sidebar', 'ProductCard', 'Footer'. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 5. `list-keys-identity.png`

- **Save as:** `public/images/ai/list-keys-identity.png`
- **Used in:** `content/docs/fundamentals/lists-and-keys.mdx`
- **Alt text:** List items wearing name tags so React can match them after reordering

```text
Two vertical columns of rounded list-item cards, 'Before' on the left and 'After' on the right. Each card wears a small coloured name tag with a number: 1, 2, 3. In the After column the cards are shuffled into the order 3, 1, 2. Curved glowing connector lines link each card to its same-numbered card in the other column, showing that identity follows the tag, not the position. Labels: 'Before', 'After', 'key'. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 6. `virtual-dom-diff.png`

- **Save as:** `public/images/ai/virtual-dom-diff.png`
- **Used in:** `content/docs/getting-started/introduction.mdx`
- **Alt text:** Two virtual DOM trees compared, with only the changed node updated in the real DOM

```text
Three panels left to right. Left: a tree diagram of rounded node boxes labelled 'Old'. Middle: an identical tree labelled 'New' where exactly one node glows bright cyan to show it changed. A magnifying glass hovers between the two trees comparing them. Right: a stylised browser window whose page layout has only one small block highlighted in cyan, connected to the changed node by a thin glowing arrow. Labels: 'Old', 'New', 'DOM'. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 7. `headless-table.png`

- **Save as:** `public/images/ai/headless-table.png`
- **Used in:** `content/docs/libraries/tanstack-table/index.mdx`
- **Alt text:** One table logic engine powering several differently styled tables

```text
In the centre, a glowing engine block made of interlocking gears labelled 'logic', with small icons around it for sort arrows, a filter funnel, page numbers and a checkbox. Three cables run from it to three very different table designs on the right: a minimal monochrome table, a colourful card-style table, and a dense spreadsheet-like grid. Labels: 'logic', 'your markup'. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 8. `virtualization-window.png`

- **Save as:** `public/images/ai/virtualization-window.png`
- **Used in:** `content/docs/libraries/tanstack-table/server-side.mdx`
- **Alt text:** A long list where only the rows inside the viewport are rendered

```text
A very tall vertical strip of list rows extending far above and below the frame. A bright rectangular viewport window in the middle shows about eight solid, fully drawn rows. All rows outside the window are faint ghost outlines. A scrollbar on the right side, and a small counter badge reading '10,000 rows' at the top and '8 rendered' beside the window. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 9. `shadcn-copy-model.png`

- **Save as:** `public/images/ai/shadcn-copy-model.png`
- **Used in:** `content/docs/libraries/ui/shadcn-ui.mdx`
- **Alt text:** Component source files being copied into a project folder instead of installed as a sealed package

```text
Left side: a sealed, locked cardboard box labelled 'npm package' with a padlock. Right side: an open project folder labelled 'src/components/ui'. In the middle, readable source-code file sheets labelled 'button.tsx', 'dialog.tsx' and 'card.tsx' fly from a glowing registry cloud into the open folder, and a small hand with a pencil edits one of them. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```

## 10. `testing-trophy.png`

- **Save as:** `public/images/ai/testing-trophy.png`
- **Used in:** `content/docs/testing/setup.mdx`
- **Alt text:** The testing trophy: static analysis, unit, integration and end-to-end tests

```text
A stylised trophy shape built from four stacked horizontal layers, widest in the middle. From bottom to top: a thin base 'Static', a narrow layer 'Unit', the widest and brightest layer 'Integration', and a small top cup 'E2E'. Small icons beside each layer: a linter checkmark, a single gear, connected gears, a browser window. Style: modern flat vector illustration, clean and minimal, soft isometric depth, dark navy background (#0f172a), React cyan (#61dafb) as the main accent with violet (#8b5cf6) and emerald (#10b981) highlights, rounded shapes, subtle glow, generous whitespace, no logos, no watermark, 16:9 aspect ratio, 1600x900. Any text must be short, crisp, legible sans-serif labels spelled exactly as written.
```
