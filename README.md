This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SEO deployment settings

The app serves its XML sitemap at `/sitemap.xml` and crawler rules at `/robots.txt`. Set `NEXT_PUBLIC_SITE_URL` in each deployment environment to the canonical public origin (for example, `https://www.parlezhub.com`) so canonical URLs, structured data, and sitemap links use the correct host. Published blog posts are added to the sitemap from the configured API.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
cd /var/www/LinguaFlex-Landing
git pull                                      # if you deploy from git
docker tag linguaflex-landing:latest linguaflex-landing:rollback   # keep a backup
docker compose build                          # build new image (site stays up)
docker compose up -d                          # swap in the new container
docker compose ps                             # should say "(healthy)" after ~30s
docker compose logs -f --tail 50              # watch logs (Ctrl+C to exit)
