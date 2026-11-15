# UChicago ASA

A standalone website for the University of Chicago Arab Student Association. Built with Next.js App Router, TypeScript, and pnpm, with an olive-and-terracotta palette, Arabic typography, and original SVG illustrations.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

## Verify and build

```sh
pnpm typecheck
pnpm build
```

The production website is exported to `out/`. Deploy that directory to a static host. There is no database, contact-form backend, or runtime secret to configure.

### Verification in this session

- Next.js production build and TypeScript check passed using the installed, lockfile-matched dependencies.
- Exported section anchors, resource URLs, scripts, stylesheets, and self-hosted font files were checked.
- The first mobile screen was visually reviewed in a 390px browser viewport.
- The restricted session could not serve a local HTTP preview. A file-based preview was used for the visual review; React navigation interactions still need a normal `pnpm dev` browser check.

## Edit content

- `src/lib/association.ts`: verified social, mailing-list, and Blueprint links.
- `src/app/page.tsx`: page content, community activities, and FAQs.
- `src/app/globals.css`: colors, responsive layout, and typography.
- `src/components/header.tsx`: keyboard-accessible mobile navigation.
- `src/components/artwork.tsx`: original vector artwork and icons.
- `src/app/layout.tsx`: metadata and bundled Fontsource fonts.

The fonts are self-hosted; the site makes no Google Fonts requests. Arabic is real selectable text with language and direction attributes. The illustrations are original decorative artwork, not photographs of ASA events. FAQs use native HTML disclosure controls and work without JavaScript.

## Research and content notes

Research completed November 15, 2026. The site uses the organization name **Arab Student Association**, as listed by the University.

1. [University mailing list](https://lists.uchicago.edu/web/info/arabstudentassociation) confirms the association and its subscription channel.
2. [UChicago Blueprint profile](https://blueprint.uchicago.edu/organization/arabstudentassociation) is the official organization directory destination. Its full profile requires JavaScript and was not available through the text research tool.
3. [Chicago Maroon, “Finding Your Flock,” September 19, 2023](https://chicagomaroon.com/39832/news/finding-your-flock-your-guide-to-affinity-spaces-and-cultural-organizations-on-campus/) supports the group’s cultural focus, study breaks, trivia nights, mailing list, and Instagram handle `@arabatuchicago`. The Instagram profile could not be fetched directly, so that handle is based on the published report.
4. [Former ASA leader Ramy El Rafai’s June 2025 graduation post](https://www.linkedin.com/posts/ramy-elrafai-cp3p-8769271a1_uchicago-graduation-ainshamsuniversity-activity-7344502769069817857-Xj0V) describes ASA’s celebration of heritage through Turathuna. The page treats it as part of ASA’s history, not a scheduled or annual event.

No current board roster, upcoming dates, meeting location, donation page, membership count, or group-chat link was invented. Current-event links point to the association’s existing channels. The site does not collect or submit personal information itself.

## Project location

Requested destination: `~/asa/website`. The build was prepared independently in `/private/tmp/uchicago-asa-website` because the current session cannot write to `~/asa/website`. No MSA application source, Git history, hosting identity, or private configuration is included.
