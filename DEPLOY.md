# Deploying this site

Static site, no build step. Any static host serves it as-is.

## Current setup

GitHub Pages, from `main` at the repo root.
Preview: **https://josaelegado.github.io/josaelegado.work/**

## Going live on www.josaelegado.work

The domain currently points at Wix ("RISE Innovation Advisors"). Two steps,
in this order:

**1. Add the DNS records** at whoever manages the domain (Wix, if it was
bought through them: Wix dashboard → Domains → Advanced → DNS records).

| Type  | Host | Value                   |
|-------|------|-------------------------|
| CNAME | www  | `josaelegado.github.io` |

For the bare domain (`josaelegado.work` with no `www`), add four A records
pointing at GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Removing Wix's existing records for `www` is what takes the old site off
the domain. Wix will keep hosting it internally until the plan is
cancelled — that is a separate decision.

**2. Tell Claude to re-add the CNAME file.** It is deliberately absent
right now: with it present, the preview URL 301-redirects to the custom
domain, so there is no way to see the site before the DNS flip. Once DNS
is pointing at GitHub, the file goes back:

```
echo "www.josaelegado.work" > CNAME && git add CNAME && git commit -m "Point Pages at the custom domain" && git push
```

Then enable **Enforce HTTPS** in the repo's Settings → Pages once the
certificate is issued (usually within an hour of DNS propagating).

## Anything still to decide

- The contact address in the markup is `hello@josaelegado.com`, but the
  site serves from `.work`. That mailbox may not exist. It appears in
  every page footer and on lets-build.html.
