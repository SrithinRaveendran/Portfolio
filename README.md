# 🚀 Srithin Raveendran — Portfolio

A fully animated personal portfolio built with **React + Vite + Framer Motion**, showcasing projects, skills, education, and contact info.

---

## ✨ Features

- Typewriter animation cycling through job roles
- Scroll-triggered section reveals with Framer Motion
- Sticky navbar with blur effect on scroll
- Expandable project accordion cards with live/ongoing badges
- Responsive layout — works on all screen sizes
- JetBrains Mono + Inter font pairing for a clean dev aesthetic
- `prefers-reduced-motion` support for accessibility

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| Google Fonts | JetBrains Mono + Inter |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with mobile menu
│   │   ├── Hero.jsx         # Landing section with typewriter
│   │   ├── Skills.jsx       # Skill category cards
│   │   ├── Projects.jsx     # Accordion project cards
│   │   ├── Education.jsx    # Timeline + cert list
│   │   └── Contact.jsx      # Contact info + footer
│   ├── data.js              # All portfolio content (edit this!)
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & CSS variables
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# 1. Unzip the project
unzip portfolio-srithin.zip
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy.

---

## ✏️ Customization

All portfolio content lives in **`src/data.js`** — edit skills, projects, education, and certifications there without touching any component files.

### Update your social links

In `src/components/Hero.jsx` and `src/components/Contact.jsx`, replace the placeholder URLs:

```jsx
// Hero.jsx & Contact.jsx
{ href: "https://github.com/YOUR_USERNAME", ... }
{ href: "https://linkedin.com/in/YOUR_PROFILE", ... }
```

### Change the color theme

CSS variables are in `src/index.css`:

```css
:root {
  --bg: #0a0d14;       /* page background */
  --cyan: #00d4ff;     /* primary accent */
  --green: #39ff8f;    /* "ongoing" badge color */
  --text: #e8eaf0;     /* body text */
  --muted: #7a8099;    /* secondary text */
}
```

---

## ☁️ Deployment

### Vercel (recommended)

```bash
# Push to GitHub, then connect the repo on vercel.com
# Vercel auto-detects Vite — no config needed
```

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder to netlify.com/drop
```

### Manual

```bash
npm run build
# Upload contents of dist/ to any static host
```

---

## 📄 License

Personal portfolio — feel free to adapt for your own use.

---

*Built by Srithin Raveendran · [srithinraveendran@gmail.com](mailto:srithinraveendran@gmail.com)*
