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

## Host on Netlify (from Git)

Import [surazz14/pipo](https://github.com/surazz14/pipo) in the Netlify dashboard. Use these settings (also in `netlify.toml`):

| Setting | Value |
| --- | --- |
| Branch | `main` |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | `22` |

Do not add the `@netlify/plugin-nextjs` package — Netlify applies its Next.js adapter automatically.

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
