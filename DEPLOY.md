# Deploying this site

Static site, no build step. Any static host serves it as-is.

## State — checked 2 Aug 2026

| Piece | Status |
|---|---|
| GitHub repo | `JosaElegado/josaelegado.work` |
| Pages build | ✅ built, from `main` at root |
| `CNAME` file | ✅ `www.josaelegado.work` |
| **Cloudflare DNS** | ✅ **done** — four GitHub A records + `www` CNAME |
| **HTTP** | ✅ serves — `http://www.josaelegado.work/` loads |
| Cloudflare SSL/TLS mode | ✅ already **Full** |
| **HTTPS** | ❌ **no certificate.** Search Console: "Invalid server SSL certificate" |
| Local commits pushed | ❌ pending |

The DNS step described in earlier versions of this file is finished. Records:

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` – `.111.153` | DNS only ← **needs to change** |
| CNAME | `www` | `josaelegado.github.io` | DNS only ← **needs to change** |

The Wix `A @ 185.230.63.107` record is gone.

## Why HTTPS fails

GitHub Pages never issued a TLS certificate for the custom domain. The site
answers on port 80 but presents nothing valid on 443, which is exactly what
Google Search Console reports when indexing is attempted.

## The fix: let Cloudflare terminate TLS

SSL/TLS encryption mode is already **Full**, so only the proxy toggles are
left. In **Cloudflare → DNS → Records**, switch these five from grey cloud
(DNS only) to **orange cloud (Proxied)**:

- `A  @  185.199.108.153`
- `A  @  185.199.109.153`
- `A  @  185.199.110.153`
- `A  @  185.199.111.153`
- `CNAME  www  josaelegado.github.io`

Each row: **Edit → Proxy status → Proxied → Save**.

Cloudflare's Universal SSL certificate then covers the domain and HTTPS works
within a few minutes. Cloudflare reaches GitHub over TLS but does not validate
GitHub's certificate — which is what "Full" means, and is the normal
arrangement for a static public site fronted by Cloudflare.

Cloudflare shows a warning when proxying to GitHub Pages IPs. It is expected
in this configuration and can be dismissed.

**Consequence:** while proxied, GitHub can never issue its own certificate,
because it sees Cloudflare's IP rather than a direct resolution. That is fine —
Cloudflare is the one serving TLS now. To go back to GitHub-issued certs, turn
the proxy off first, then re-save the custom domain in repo Settings → Pages.

## The other remaining step

Commits are sitting on local `main`:

```
cd ~/josaelegado.work && git push origin main
```

## Alternative: Cloudflare Pages

Cloudflare Pages builds from the same repo and manages the certificate itself,
removing this class of problem. Costs one GitHub-app authorisation.

## After the site is live on HTTPS

- Submit `https://www.josaelegado.work/sitemap.xml` in Google Search Console.
- Request indexing for `/my-favorite-discoveries-in-India/` directly; a new
  domain with no backlinks can otherwise sit uncrawled for weeks.

## Still undecided

- Contact address in the markup is `josaelegado@gmail.com` but the site serves
  from `.work`. MX records point at Cloudflare Email Routing, so a
  `hello@josaelegado.work` forward is available if wanted.
- The Wix Premium plan keeps billing until cancelled. RISE's blog content still
  lives on that Wix site.
