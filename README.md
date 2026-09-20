# Pipo Fremantle

Nepalese restaurant website for **Pipo Fremantle**, in Fremantle Food Court. Built with Next.js so it is simple to host with Docker.

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

## Docker (recommended for hosting)

```bash
docker compose up --build -d
```

The app listens on port **3000**. Point your reverse proxy (Caddy, nginx, a VPS) at that port.

To stop:

```bash
docker compose down
```

## Production build without Docker

```bash
npm run build
npm start
```

`next.config.ts` uses `output: "standalone"` so the Docker image only needs the standalone server, static assets, and `public/`.
