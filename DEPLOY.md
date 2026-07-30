# Deploying this site

Static site, no build step. Any static host serves it as-is.

## State

| Piece | Status |
|---|---|
| GitHub repo | `JosaElegado/josaelegado.work` |
| Pages build | ✅ built, from `main` at root |
| Custom domain set on Pages | ✅ `www.josaelegado.work` |
| `CNAME` file in repo | ✅ present |
| **Cloudflare DNS** | ❌ **still points at Wix — the only thing left** |

Everything on the GitHub side is finished. The domain does not work yet
because its DNS still hands traffic to Wix, which no longer has a site
connected (hence Wix's `ConnectYourDomain Error`).

## The remaining step (needs a Cloudflare login)

`josaelegado.work` uses Cloudflare nameservers (`vida`/`ram.ns.cloudflare.com`),
so records are edited in Cloudflare, not Wix or the registrar.

**Cloudflare → DNS → Records** for `josaelegado.work`:

| Action | Type | Name | Value | Proxy |
|---|---|---|---|---|
| Edit existing | CNAME | `www` | `josaelegado.github.io` | **DNS only** |
| Delete | A | `@` | `185.230.63.107` (Wix) | — |
| Add | A | `@` | `185.199.108.153` | **DNS only** |
| Add | A | `@` | `185.199.109.153` | **DNS only** |
| Add | A | `@` | `185.199.110.153` | **DNS only** |
| Add | A | `@` | `185.199.111.153` | **DNS only** |

**Proxy must be grey cloud / DNS only.** If Cloudflare proxies these,
GitHub sees Cloudflare's IP instead of yours, cannot validate the domain,
and never issues the TLS certificate — you get an SSL warning rather than
a site. Enable the proxy later if you want it.

Then in the repo: **Settings → Pages → Enforce HTTPS** once the certificate
is issued (usually under an hour after DNS propagates).

## Alternative: Cloudflare Pages

Because DNS is already on Cloudflare, Cloudflare Pages writes the DNS
records for you instead of you editing six of them by hand. Connect the
same GitHub repo, add the custom domain, done. The site itself does not
change. Fewer manual steps; costs one GitHub-app authorisation in
Cloudflare.

## Still undecided

- The contact address in the markup is `hello@josaelegado.com`, but the
  site serves from `.work`. That mailbox may not exist. It is in every
  page footer and on `lets-build.html`.
- The Wix Premium plan keeps billing until cancelled. RISE's blog content
  still lives on that Wix site.
