
to do 
- [ ] add basic formatting:
  - [ ] colours
  - [x] links/nav
- [x] add header component 
- [x] footer content
- [ ] page elements (title/quote/banner/text sections)

- [x] create postgres (or other serverless db) db for signed up users to enable login
- [ ] also record signed up users comments

- [x] integrate DIY Authentication: inside lib folder (auth.js and serverAuth.js)
- [x] get commenting submission and retrieval

- [ ] add next-fiction url to nav link once deployed
- [ ] add dynamic footnotes

- [ ] add SEO elements; e.g. next.config.mjs
- [ ] test app using lighthouse, optimize scores



using vercel neon db - neon red

HTML
CSS
JAVASCRIPT

TYPESCRIPT
ENV
TAILWIND
ESLINT
bcrypt
jose : library which generates and handles JWTs
DIY Auth

~~nextAuth + Credentials Provider  (instead of paid OAuth service)~~
~~Google Search Console or credentials~~

- 

JWT
[Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
[PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)
[Prisma](https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)
[Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)






This is a next app I was making...

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000).

# Memo:

[Next.js start-up documentation](https://nextjs.org/docs/app/getting-started/installation) 

+ Next can be configured for TypeScript by renaming a file to .ts or .tsx and running 'dev' -- the required TS packages will be installed
+ To create a new next.js app and automatically link with remote/master github account:
 
## TO MAKE A NEXT.JS APP

```bash
npx create-next-app@latest
```

## TO MAKE FOLDER STRUCTURE

Default (Vite):
+ public: static assets
+ src/app: Main front-end:
  + each page folder/page
  + layout.js: global layout
  + page.js: global page/default

Optional:
+ styles (put css in here)
+ src/pages (put pages in here)
+ src/components
+ src/utils

## TO MAKE COMPONENTS

+ Navigation.js inside components folder (for nav links)
+ Header.js
+ Footer.js

## TO MAKE STYLES
+ If you make separate CSS files, import these in layout.js (you can also make a folder in src but correct layout.js import path)

## TO MAKE PAGES
Create-next will make a 'app/page.js' which is the index. Inside app folder you can then add more folders (one per new page). Next uses file-system routing, so folder structure/layout creates the nested routes. Next creates a default homepage, called app/page.tsx. Other routes and pages can branch out from it.

To create a new page, make a folder in app, and add a page.tsx/js inside. The pathname of the page will be based on the folder structure, e.g:

```bash 
app/dashboard/profile/page.tsx will be found at pathname:

www.[...]dashboard/profile
```

## SHARE GLOBAL STYLE AND COMPONENTS WITH PAGES
In react, global style is set up in the app.jsx. In Next, unless you make an _app.js page (to mimic react), style is imported into each page separately (?).

You can import global.css to any component, but by default should import it into your top-level component, which is the root layout file (layout.js/ts). Anything inside the root layout.tsx file will be shared across every page of the site. UI added to sub-folder layout.tsx files doesn't need to be put inside the root layout file.

When you make a next.js app you can opt to use Tailwind. The CSS will be part of the jsx. If you want to keep the CSS separate and customize your selectors and classes, you can use CSS modules. The css files will be called things like 'home.module.css'.

Create a module.css file (and put inside a sub-folder, e.g. app/styles). Import this into page.ts and create the element bracketing the filename. For instance, inside your module.css file add a class:

```bash
.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

Then where you want this element to go, write:

```bash 
<div className={styles.shape} />
```

### Class state toggling:

You can npm install clsx and use to apply conditional classes based on state. For instance inside a page.ts:

```bash
import clsx from 'clsx';

      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
```

Other css you can use with Next:
+ Sass (scss files)
+ CSS-in-JS (styled-jsx, styled-components, emotion)

## SHARING LAYOUT BETWEEN PAGES

Anytime you want to share layout between pages, you can make a layout.ts(x)/js page to bring in shared components, e.g. a navbar, header, footer, etc. Anything that will display on multiple pages.

In this app, the components are stored inside app/ui/dashboard.

### Create Links
To link between pages use next's in-built <Link /> component. Import Link into your nav-links (or other link) component. Here, that is inside app/ui/dashboard/nav-links.tsx.

## TO SET UP A DB

Next.js can work serverless (it has built-in next-start server support). Vercel provides dbs: 
1. first deploy on Vercel (do not have to first do this);
2. Navigate to your app's dashboard;
3. Navigate to 'storage' tab and choose a db (e.g. Neon Vercel Postgres);
4. Once db is connected, 'show secret' under .env.local and 'copy snippet';
5. Paste this into an .env file in your code editor
6. in code editor terminal run:
```bash
npm i @vercel/postgres
```
to install the Vercel Postgres SDK.
7. 
```bash
npm install prisma @prisma/client
npx prisma init
```
this will create a root folder called prisma containing a schema.prisma file
8. Update your prisma schema with any models you want to create e.g.
```bash
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       String @id @default(uuid())
  email    String @unique
  password String
  createdAt DateTime @default(now())
}
```
then run 
```bash
npx prisma db push
```
install 
```bash
npm install @prisma/client
```
this will create a 'generated' folder inside src

9. Create a root folder called lib, and make a prisma.js file inside which references generated folder. Paste:
```bash
import { PrismaClient } from '../src/generated/prisma';

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export { prisma };

```
10. If routes or pages enter data into or from the db, you need to import prisma into the page, e.g.
```bash
import { prisma } from '../lib/prisma';
```
alter pathname to where your lib/prisma.js is.

## TO DEPLOY

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

