---
title: My struggles at creating a Solana token display/trade site with ViteJs
date: 2022/3/13
description: My journey coding this as I go along
tag: Solana
author: Chad
---

# Creating Solana token display/trade site with ViteJs

This is a page where users can connect their wallets and view the tokens they have init. I decided to go against the mnorm and use ViteJS and it has not been a good experience. In this article I wrote each title for each commit I made, so I am always oblivious of the next struggle I am going to face. I eventually fail to make this work but atleast I now know not to use VueJS or other cutting edge tech for my Solana projects.

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
`npm i @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/spl-token`

### Copy Pasta my existed code

Didnt work, and I remembered where I got the example from had a TS version of the same code

### Copy pasta the documentation

[I copied the example in the Solana labs wallet adapter page exactly](https://solana-labs.github.io/wallet-adapter/)

This didnt work either

### Fixing Vite compability issues

Given that Vite is being lean it doesnt have many of the features that webpack has. First `global` was undefined, and because that is used by the wallet, app was crashing. Adding ...

```
define: {
    global: {},
  },
```

... to the `vite.config.ts` file solved this problem.

Then the documentation was importing `@solana/wallet-adapter-react-ui/styles.css` using `require`, which was again `undefined`. Converting this to a simple `import` solved this issue, and it all worked.

### Vite issues when building

Given that I have just vitnesed that the wallet adapter is not as easily compatible with Vite, I sensed that the build step is also probably going to have some issues. I rather solve these build issues earlier rather than later, as less code means there is less possible places the code can be broke form. I came across few issues so far:

1. **Some node modules librarys were not in TS:** So I modified the `tsconfig.json` file to by changing the `"skipLibCheck"` to false`false`

2. **[commonjs] Complex binding patterns require an initialization value:** This is coming from to a blockchain library that solana wallet adapter uses. Still not sure what the solution or the issue is ...

```
vite v2.8.6 building for production...
??? 184 modules transformed.
[commonjs] Complex binding patterns require an initialization value (1:6) in /token-trickle/node_modules/@blocto/sdk/dist/blocto-sdk.module.js
file: /token-trickle/node_modules/@blocto/sdk/dist/blocto-sdk.module.js:1:6
1: var global$1 = (typeof global !== "undefined" ? global :
         ^
2:   typeof self !== "undefined" ? self :
3:   typeof window !== "undefined" ? window : {});
error during build:
SyntaxError: Complex binding patterns require an initialization value (1:6)

```

I believe the issue is similar to earlier where the [global][https://nodejs.org/docs/latest/api/globals.html#global-objects] is not defined when using Vite because it is part of [Node's built in functions called Commonjs](https://nodejs.org/docs/latest/api/modules.html#modules-commonjs-modules), unlike with webpack it is.

**What I have tried so far?**

1. Googled alot and clicked on pretty much every link, but it looks like not many people had this error before.
2. define `$global` like I defined `glonbal` in `vite.config.ts`
3. Deploy using Vercel, incase there is an issue wit my machine
4. Stack overflow is down
5. [Trying to provide custom build configuration now](https://github.com/solana-labs/wallet-adapter/blob/master/FAQ.md#babel--rollup--vite--snowpack--esbuild)
6. Tryed setting [`ignoreGLobal` flag](https://github.com/rollup/plugins/tree/master/packages/commonjs#ignoreglobal) in [vite config `build.commonjsOptions` ](https://vitejs.dev/config/#build-commonjsoptions)
7. Adding an alias to `"global$1" = "global"` in `vite.config.js`

**What fixed the build issue?**
Started researching in Vite issues. [This issue/solution helped me.](https://github.com/vitejs/vite/issues/7257#issuecomment-1066064513). I had to update `define: { global: {}, }` to `define: { global: "globalThis", }`. Then the build managed to complete with no more errors.

Then when I tried to run the built project I got the error `ReferenceError: Buffer is not defined`, so back to drawing board ...

**What fixed the runing the built files issue?**

I realised this is another node built in feature that is not available in browser, just like global. So this is the same issue... I feel like there will be more of these issues when I start importing more packages.

I continued searching on vite issues, and [I tried using pre built version of the breaking package](https://github.com/vitejs/vite/issues/5970), then tried few of the other node polyfill solutions I tried with the previous problem, but none worked.

Then [I installed buffer package, and added it to the entry point of the project](https://github.com/vitejs/vite/discussions/3126#discussioncomment-2349415) and built project started working fine

## Getting tokens

I start by getting this token so I can select what token to trickle to another wallet.

I Googled and found nothing to help, then I searched on Github and [came across this `getTokenAccountsByOwner`](https://github.com/jayito/Solana-Get-tokens/blob/3d4dd309e20e557767e789063e4b91159105be9a/src/App.js#L24) which how I will implement this feature.

[Reading more about `getTokenAccountsByOwner` in the docs ...](https://docs.solana.com/developing/clients/jsonrpc-api#gettokenaccountsbyowner)

### More issues with Vite compatibility

Again buffer is undefined somewhere, I give up with vite for now, already wasted enough time on debuggig Vite, I will port my changes over to a create reat app.

## Conclusion

There is a reason every one using the same tech stack to integrate with Solana, if you wanna work with cutting edge tech then prepare to do the extra work that this comes with.

### Update 1

Latest create react app also had the same issues from the start. So I am jumping on to Next js.

### Update 2

All went smoothly, when using Next js, untill I got to the same spot where I got stuck with Vite. Using Yarn fixed it. and carrying on

### Update 3

I can get all the Tokens public keys but not sure how to get all the mint addressrs

### update 4

Everything worked on Next JS ...
