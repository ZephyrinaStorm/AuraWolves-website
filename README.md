# Aura Wolf Community Website

A dark, responsive, furry/ brony fan community site built using the two supplied images.

## Pages
- Home
- My Story (editable placeholders for life story, four girlfriends, family, supporters)
- Events (official Fortnite X links and placeholders for furry/brony schedules)
- Discord (https://discord.gg/Byy8KDhuKR)

## Upload manually to GitHub
1. Create a new GitHub repository (e.g. `aura-wolf-community`).
2. Select **Add file > Upload files**.
3. **Extract the ZIP first**. Upload all files and the `assets` folder contents to the repository root. GitHub does not deploy a ZIP file uploaded as one item.
4. Commit changes. Ensure `index.html`, `server.js`, `package.json`, and `render.yaml` are at the repository root.

## Deploy on Render
1. New > Web Service > select your GitHub repository.
2. Runtime: Node. Build command: `npm install`. Start command: `npm start`.
3. The `render.yaml` also supports Render Blueprints if you choose that route.
4. Test the assigned `.onrender.com` URL.
5. Add `aurawolfcommunity.com` under Render **Settings > Custom Domains**.
6. Enter the **exact DNS records shown by Render** in DreamHost DNS, then verify in Render. DNS cannot be configured through `.env`.

## Editing
- `script.js`: text for every page, including event links and story sections.
- `styles.css`: layout, colors, responsive styling.
- `assets/logo.png` and `assets/banner.png`: your uploaded images.
- `index.html`: shared site shell and navigation.

## Notes
- This is a public informational website; no database or login is needed.
- The Events page links to X rather than scraping or embedding live posts.
- The Story page intentionally contains placeholders for private details; get permission before publishing personal information about other people.
- Do not put secrets in client-side JS, HTML or GitHub. Render Environment settings can hold server-side secrets when needed.
