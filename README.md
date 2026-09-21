# Pipo Fremantle

Nepalese restaurant website for **Pipo Fremantle**, in Fremantle Food Court. Built with Next.js.

Menu links (and `/menu`) send guests to the live ordering page: [pipofremantle.lifeintouch.net](https://pipofremantle.lifeintouch.net/).

## Pages

- `/` Home
- `/about` About us
- `/contact` Contact
- `/menu` redirects to the online menu

## Edit the restaurant (hosting-friendly)

| What | File |
| --- | --- |
| Name, address, hours, menu URL | `src/config/site.ts` |
| Colours, radii, flag stripe | `src/theme/tokens.css` |

The Nepal red / blue palette lives in the theme file. Change those variables and the whole site follows.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Host on Netlify

This repo is ready for Netlify (see `netlify.toml`). The easiest path is GitHub:

1. Open [app.netlify.com](https://app.netlify.com) and add a new site from Git.
2. Choose the `surazz14/pipo` repository, branch `main`.
3. Netlify detects Next.js. Build command is `npm run build`, publish directory is `.next`, Node `22`.
4. Deploy. Later pushes to `main` update the live site.

## Docker

```bash
docker compose up --build -d
```

The app listens on port **3000**. Point your reverse proxy (Caddy, nginx, a VPS) at that port.

To stop:

```bash
docker compose down
```

`next.config.ts` uses `output: "standalone"` for Docker. On Netlify that flag is skipped automatically.
