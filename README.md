# tablou

Umbrella landing page for the civic dashboards, served free on Cloudflare
Workers Static Assets at https://tablou.cristian-nichifor.com.

## Deploy

```
pnpm exec wrangler deploy
```

No build step — plain HTML in `public/`. Requires `wrangler` (`npm i -g wrangler`)
and OAuth login to the CN Webify Cloudflare account.

## Linked projects

- [ro-budget-dashboard](https://github.com/CristianNichifor/ro-budget-dashboard) — React dashboard (buget.cristian-nichifor.com)
- [ro-budget-dashboard-bff](https://github.com/CristianNichifor/ro-budget-dashboard-bff) — Fastify/Hono API (api.buget.cristian-nichifor.com)
