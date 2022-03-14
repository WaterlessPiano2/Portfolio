import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>GigaChad the Dev - Personal site</title>
        <meta
          name="description"
          content="This site is used to introduce GigaChad & showcase his tech skills. 
TLDR. Fullstack Javascript developer, looking for cool Solana projects to get involved in."
        />

        <meta property="og:url" content="https://www.gigachad.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GigaChad the Dev -  Personal site" />
        <meta
          property="og:description"
          content="This site is used to introduce GigaChad & showcase his tech skills. 
TLDR. Fullstack Javascript developer, looking for cool Solana projects to get involved in. "
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/media/FMxN1V3X0A4pwkk?format=jpg&name=large"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gigachad.dev" />
        <meta property="twitter:url" content="https://www.gigachad.dev/" />
        <meta
          name="twitter:title"
          content="GigaChad the Dev -  Personal site"
        />
        <meta
          name="twitter:description"
          content="This site is used to introduce GigaChad & showcase his tech skills. 
TLDR. Fullstack Javascript developer, looking for cool Solana projects to get involved in."
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/media/FMxN1V3X0A4pwkk?format=jpg&name=large"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
