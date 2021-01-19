import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

import type { AppProps /*, AppContext */ } from "next/app";
// import { GraphQLClient } from "graphql-request";
// import Cookie from "js-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// const client = new GraphQLClient(String(process.env.NEXT_PUBLIC_ENDPOINT));
// const token = Cookie.get("token") || "";
// // Override all existing headers
// client.setHeaders({
//   authorization: token ? token : "",
// });

export default MyApp;
