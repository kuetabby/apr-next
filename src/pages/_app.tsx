import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

import { useEffect } from "react";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((register) => {
            console.log(
              "Service Worker registration successful with scope: ",
              register.scope
            );
          })
          .catch((err) => {
            console.log("Service Worker registration failed: ", err);
          });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="apresiasi" content="Apresiasi Web" />
        <title>Apresiasi</title>

        <link rel="manifest" href="/manifest.webmanifest" />
        {/* <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        /> */}
        {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
