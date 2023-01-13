import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">

      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCf6EVyDj9192Ovx7864CAwdmA3CtJXr8" />

    </Html>
  )
}
