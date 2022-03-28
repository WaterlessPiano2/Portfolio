---
title: Creating a Next, Tailwind CSS, TypeScript and Solana Wallet Template
date: 2022/3/26
description: My journey coding this as I go along
tag: Solana
author: Chad
---

# Creating a Next, Tailwind CSS, TypeScript and Solana Wallet Template

I have a few project ideas that I would like to build. They will all use the same tech stack in the front end. I might aswell build this and have some okay styling to go with it. So I can quickly be up and runing with the next project.

## Init

Chose Next and for this project `npx create-next-app --example with-typescript with-typescript-app`.

[I used Next docs for TS to initialise the project.](https://github.com/vercel/next.js/blob/canary/docs/basic-features/typescript.md)
I chose Next as it worked reliably for me before, and I am pretty experienced with it, so it should be pretty smooth ride 🤞.

## Adding Tailwind

I feel naked without some styling, and without a designer and a design template, I prefer to utilise Tailwinds premade styling guide.

[I used Tailwind site to set this up.](https://tailwindcss.com/docs/guides/nextjs)

Aththe end I had to create a file called `_app.tsx` inside the pages folder, and add the following code to it to work.

```
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

```

Then Tailwind CSS started working. [Here is the whole commit that it took me to set this up.](https://github.com/WaterlessPiano2/Solana-Next-TS-Tailwind-Template/commit/ae965021e1e1ca3b4e1319081f2db77658592d6c)

## Adding the wallet

Here we are adding the wallet integration to the site.

This section is inspired by the wallet integration I have already done on the NFT section of this website. Its all open source on Github.

### NPM install dependencies

Run this long commad to install all the dependencies in one go.

```
npm i @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/spl-token
```

### Copy pasta the documentation

[I copied the example in the Solana labs wallet adapter page exactly](https://solana-labs.github.io/wallet-adapter/)

This worked on the local host but not on built. I got the following error:

```
Failed to compile.
./node_modules/@toruslabs/base-controllers/dist/types/interfaces.d.ts:30:5
Type error: Property or signature expected.
```

### Fixing build issues

I have tried to change NPM to Yarn, which didnt work. I installed `buffer` and `@solana/buffer-layout` as I seemd to have fixed similar issue like this before. These didnt work either.

I then bumped the version of the typescript installed on the project and it all worked.

I moved the wallet adapter to the `_app.tsx` so the wallet can be accessesd from anywhere in the app easily, rather than having to squeeze everything in the same component.

### Fetch tokens mint and amount

### Fetch tokens logo and name

### Display the tokens

### Send tokens

### Toggle for dev or main net

## Fetch and display NFTs
