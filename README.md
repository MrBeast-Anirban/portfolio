# Anirban Maitra — Portfolio

A dual-mode portfolio site: a traditional GUI view and a fully interactive terminal
view, toggled from the switch in the top-left corner.

## Structure

```
index.html        all markup for both views
css/style.css      design system + styles
js/app.js          shared content data, GUI rendering, terminal engine
assets/            your résumé PDF (linked from the Contact section and the
                   terminal's `resume` command)
```

## Running it

No build step needed — it's plain HTML/CSS/JS.

- **Locally:** open `index.html` directly in a browser, or run a tiny server
  from this folder: `python3 -m http.server 8000`, then visit
  `http://localhost:8000`.
- **Deploying:** drag the folder into Netlify/Vercel, or push it to a GitHub
  repo and enable GitHub Pages — no server-side code involved.

## Editing content

All copy — the headline, about text, experience, projects, skills, and
contact details — lives in one place: the top of `js/app.js`
(`PROFILE`, `ABOUT`, `EDUCATION`, `EXPERIENCE`, `PROJECTS`, `SKILLS`
objects). Edit those objects and both the GUI and the terminal update
automatically, since they read from the same data.

To add a project, add an entry to the `PROJECTS` array with a `title`,
`desc`, `stack` array, `repo` URL, optional `demo` URL, and a `glyph`
(one of `waveform`, `nodes`, `bars`, `spiral`, `grid` — the small generative
preview icons on each project card; feel free to add your own to the
`previewSVG()` function in `app.js`).

## Terminal commands

`help`, `about`, `experience`, `projects`, `skills`, `education`, `contact`,
`social`, `resume`, `gui`, `clear`, `whoami`, `date`, `echo <text>` — plus a
couple of easter eggs (`sudo <anything>`).

## Contact form

The form has no backend — submitting it opens the visitor's email client
with a pre-filled `mailto:` message addressed to you. If you'd rather
collect submissions server-side, swap the `wireContactForm()` handler in
`app.js` for a call to a form service (Formspree, Netlify Forms, etc.) or
your own API endpoint.

## Swapping the résumé

Replace `assets/Anirban_Maitra_Resume.pdf` with an updated file of the same
name, or update the `resume` path in the `PROFILE` object in `app.js`.
