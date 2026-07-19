# The Hong Kong War Crimes Trials: An Interactive History

An interactive, educational React website documenting the Hong Kong War Crimes Trials of 1946–1948. Built for ALPHA Education as a teaching resource and digital walking guide.

## Technology Stack

- **React 18** with TypeScript
- **Vite** (build tool)
- **React Router DOM** (client-side routing)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

The development server will start at `http://localhost:5173`.

## Project Structure

```
src/
  components/
    Header.tsx          # Persistent site header with navigation
    Footer.tsx          # Site footer with credits and map citation placeholder
    Layout.tsx          # Wrapper providing header + footer around all pages
    MapView.tsx         # Interactive map page with markers and content panel
    MarkerPin.tsx       # Clickable map marker component
    LocationList.tsx    # Accessible list of locations (screen-reader / mobile friendly)
    ContentPanel.tsx    # Panel displaying the four content components per location
  pages/
    Home.tsx            # Home page with hero, research goal, project overview, etc.
    About.tsx           # About ALPHA Education and project author
  data/
    sites.ts            # All site data — add new locations here
  types/
    site.ts             # TypeScript interfaces for site data
```

## How to Add a New Location

1. Open `src/data/sites.ts`.
2. Append a new object to the `sites` array following this shape:

```typescript
{
  id: 'unique-id',
  name: 'Location Name',
  x: 50, // percentage from left of map image (0–100)
  y: 50, // percentage from top of map image (0–100)
  narrative: 'What happened at this location...',
  trial: {
    summary: 'Trial summary...',
    charges: 'Charges...',
    verdict: 'Verdict...',
  },
  citations: ['Citation title and source with URL...'],
  questions: ['Question 1...', 'Question 2...'],
}
```

3. Adjust `x` and `y` values to position the marker correctly on the map image.
4. Save the file. The new location will appear automatically on the map and in the location list.

## How to Replace the Map Image

1. Place your historical map image in the `public/` directory (e.g. `public/hong-kong-1945.jpg`).
2. Open `src/components/MapView.tsx`.
3. Locate the `<img>` tag and update the `src` attribute:

```tsx
<img
  src="/hong-kong-1945.jpg"
  alt="Map of Hong Kong, c. 1945"
  ...
/>
```

4. Remove or update the swap-in note overlay below the image.
5. Update the map citation in `src/components/Footer.tsx` with the correct source and provenance.

## Deploying to GitHub Pages

1. **Configure the base path** (already set in `vite.config.ts`):

```typescript
export default defineConfig({
  base: '/hk-war-crimes-trials/',
  // ...
});
```

Change `/hk-war-crimes-trials/` to match your repository name if different.

2. **Build the project:**

```bash
npm run build
```

3. **Deploy the `dist/` folder to GitHub Pages.**

If you are using the `gh-pages` npm package:

```bash
npm install -D gh-pages
npx gh-pages -d dist
```

Or, if your repository is configured for GitHub Actions, commit the built `dist/` contents to a `gh-pages` branch or use an Actions workflow to build and deploy automatically.

4. **Update the repository settings:** Go to Settings > Pages and set the source to the `gh-pages` branch (or the folder you deployed).

## Accessibility Notes

- All interactive map markers are keyboard-focusable buttons with `aria-label` text.
- A parallel location list provides an accessible alternative to the map for screen-reader users and mobile visitors.
- The content panel uses `aria-live="polite"` to announce updates when a new location is selected.
- Navigation links indicate the current page with `aria-current="page"`.
- Colour contrast meets WCAG AA standards for text and interactive elements.

## Credits

- **Content and research:** ALPHA Education
- **Map image:** *Placeholder — citation to be added*

## License

Content provided for educational purposes. &copy; ALPHA Education.
