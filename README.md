# Ammad Fareed — Software Developer

A responsive, single-page portfolio for Ammad Fareed. It introduces his web, mobile, SaaS, and AI development services and presents five selected projects. The site is a static React frontend; it has no backend or database.

## Stack and requirements

- React 19, Vite 8, JavaScript, CSS, and Lucide React
- Node.js 24 LTS (recommended; Vite 8 also supports other compatible versions) and npm 11+

## Install and run

```bash
nvm use
npm install
npm run dev
```

Open the Local URL printed by Vite, normally `http://localhost:5173/`.

## Build and checks

```bash
npm run lint
npm run build
npm run preview
```

The production files are written to `dist/`. This project is prepared for local review; it has not been deployed.

## Content and configuration

| Content                                                             | Edit here                                               |
| ------------------------------------------------------------------- | ------------------------------------------------------- |
| Biography and skill groups                                          | `src/components/About.jsx`                              |
| Service titles and descriptions                                     | `src/data/services.js`                                  |
| Project names, order, descriptions, links, badges, and image status | `src/data/projects.js`                                  |
| Contact email and LinkedIn profile                                  | `src/config/site.js`                                    |
| Colors and layouts                                                  | `src/styles/global.css`                                 |
| SEO metadata                                                        | `index.html`, `public/robots.txt`, `public/sitemap.xml` |
| Open Graph artwork                                                  | `public/og-image.png` (1200 × 630)                      |

The displayed email address is `ammad.fareed786@gmail.com`, and the LinkedIn links point to Ammad Fareed's profile. The contact form reads its Web3Forms access key from the root `.env` file, which is ignored by source control.

### Contact form

The form submits through `https://api.web3forms.com/submit` using `VITE_WEB3FORMS_ACCESS_KEY` from `.env`. It includes required fields, email validation, a hidden honeypot, duplicate-submission protection, loading state, and success/error feedback. For deployment, set the same variable in the hosting provider's build settings and rebuild. Vite embeds all `VITE_` variables into the browser bundle; Web3Forms access keys are browser-visible by design. Never put private API tokens or passwords in these variables.

### Project images

All five project cards use one owner-supplied screenshot, optimized as WebP under `public/images/projects/`. Admittedly links to `https://admittedly.co/`, Brainio links to `https://brainio.com/`, and TrueClaim.ai links to `https://www.trueclaim.ai/`. To add or replace a card image, set `image`, `imageAlt`, `imageWidth`, and `imageHeight` in `src/data/projects.js`.

## Outstanding review

- Confirm Ammad’s specific responsibilities for each project and any technology details not supplied directly by the owner. Admittedly and TheCarBlock stacks and integrations now reflect the owner's details.
- Review the JK Financial and TheCarBlock screenshots for visible customer and financial information before any public deployment.
- Confirm any remaining JK Financial integration details before publishing them as implementation claims.

Public product descriptions were checked against the official sites for [TrueClaim](https://www.trueclaim.ai/), [CarBlock](https://thecarblock.com/), [Admittedly](https://admittedly.co/), and [Brainio](https://brainio.com/). Those sites do not establish Ammad’s individual contribution.
