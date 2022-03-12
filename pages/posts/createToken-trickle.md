---
title: Create token-trickle site
date: 2022/3/12
description: My journey coding this as I go along
tag: Solana
author: You
---

# Create token-trickle site

## Init

Chose Vite and react-ts for this project `npm create vite@latest tokenTrickle -- --template react-ts`.

[I used Vite site to set this up.](https://vitejs.dev/guide/#trying-vite-online)
I chose Vite as I wanted to try it out, it has a very lean boiler plate, compared to NextJS or create-react-app.

## Adding Tailwind

I feel naked without some styling, and without a designer and a design template, I prefer to utilise Tailwinds premade styling guide.

[I used Tailwind site to set this up.](https://tailwindcss.com/docs/guides/vite)

I styled the count button first to make sure Tailwind is installed properly.

## Adding the wallet

Here we are adding the wallet integration to the site.

This section is inspired by the wallet integration I have already done on the NFT section of this website. Its all open source on Github.

### NPM install dependencies

Run this long commad to install all the dependencies in one go.
`npm i @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets`
