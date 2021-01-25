import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

import { useEffect } from "react";
import type { AppProps /*, AppContext */ } from "next/app";

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

  return <Component {...pageProps} />;
}

export default MyApp;
