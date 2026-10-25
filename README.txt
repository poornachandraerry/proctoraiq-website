# ProctorAIQ sample marketing website

## Included
- `index.html`: responsive landing page with Features, Pricing, Demo workflow, Security, Blog, Contact and footer sections.
- `privacy.html` and `terms.html`: draft legal pages that must be customised and reviewed.
- `assets/style.css`: responsive styling.
- `assets/script.js`: mobile menu, current year and demo contact-form behaviour.

## Important before publishing
1. Replace sample prices, copy, email address, legal text and any claims that do not match the actual product.
2. The contact form currently opens the visitor's default email app. It does not store submissions on the server. Connect a form backend or your own API for real lead capture.
3. The hero dashboard is a visual mock-up, not a live dashboard. The site is a static marketing website and does not implement the exam application, authentication, AI proctoring or a database.
4. The Google Fonts import requires an internet connection; the site will fall back to system fonts if unavailable.
5. Privacy and terms pages are starter drafts, not legal advice.

## Hosting on GoDaddy (Linux cPanel hosting)
1. In GoDaddy, open **My Products** and confirm you have a web hosting plan, not just a domain registration.
2. If you only own the domain, purchase/activate a hosting plan or use a separate static hosting provider and point the domain DNS to it.
3. Open the hosting plan's **cPanel Admin**.
4. In cPanel, open **File Manager** and navigate to `public_html` (or the document root assigned to your domain/subdomain).
5. Upload `proctoraiq-godaddy-website.zip`, select it and click **Extract**.
6. Make sure `index.html` is directly inside the document root, not nested in an extra folder. The final layout should be `public_html/index.html`, `public_html/privacy.html`, `public_html/terms.html`, and `public_html/assets/...`.
7. In GoDaddy's domain DNS settings, ensure the domain points to this hosting account. If the domain is already connected to a live website, do not replace DNS records until you have backed up the existing site and confirmed the intended destination.
8. In cPanel, enable/issue SSL for the domain (often AutoSSL or the hosting dashboard's SSL option). Then enable HTTPS redirect if available.
9. Visit `https://your-domain/` and test mobile navigation, section links, privacy/terms pages and the contact form.
10. If you see the old website, allow for DNS/cache propagation and clear browser cache. Do not delete other hosting files unless you know they belong to this website.

## Domain-only GoDaddy account
A domain registration alone does not provide a `public_html` folder. You need hosting or a static hosting service. If using GoDaddy hosting, the nameserver/DNS setup may be managed automatically when the domain is attached to the hosting plan. Follow the hosting plan's exact instructions rather than guessing A records.

## If you want separate URLs for every navigation item
This starter uses a single-page layout with anchors such as `your-domain/#pricing`. It is simple to maintain and matches the scrolling layout shown in the sample video. Privacy and Terms are separate pages. The navigation can be split into separate HTML pages later if you prefer `/features.html`, `/pricing.html`, etc.
