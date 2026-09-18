# GroundWork Web

Websites for automotive detailing businesses that actually book jobs.

This repo contains three landing pages, each pitching a **different offer structure** for the same core product (a custom, mobile-first website for a detailing shop). All three share one premium design system — pill buttons, dark pricing sections, numbered steps, comparison tables, and honest FAQ sections — modeled after [groundwork-web.com](https://groundwork-web.com).

## The Three Offers

| Page | Offer | Pricing | Best For |
|---|---|---|---|
| [`version1.html`](version1.html) | **Own It Outright** | $2,497 – $4,997 one-time | Shops wary of monthly subscriptions |
| [`version2.html`](version2.html) | **Growth Plans** | $99 / $199 / $349 per month | Predictable recurring revenue, no contracts |
| [`version3.html`](version3.html) | **Results Guarantee** | $0 upfront → $249/mo if it works | Overcoming skepticism with a bold, low-risk pitch |

[`index.html`](index.html) is a comparison page linking to all three.

## Structure

```
index.html          Offer comparison / landing hub
version1.html        Offer 1: Own It Outright
version2.html        Offer 2: Growth Plans
version3.html        Offer 3: Results Guarantee
assets/style.css      Shared design system (colors, type, components)
assets/script.js      Contact form → mailto: handler (no backend needed)
```

Each page sets `<body class="theme-orange|theme-green|theme-blue">` to swap the accent color while sharing the same layout system.

## Local Preview

```bash
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```

## Deploying to GitHub Pages

1. Go to **Settings → Pages** on this repository.
2. Under **Source**, select the `main` branch and `/ (root)` folder.
3. Save. Pages will publish at `https://<username>.github.io/<repo>/`.

## Contact

📞 270-801-9780
✉️ cyruswilburn@icloud.com
