import Head from "next/head";
import {
  HeaderHomePage,
  SectionHomePage,
  FooterHomePage,
} from "src/components/homepage";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Apresiasi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderHomePage />
      <SectionHomePage />
      <FooterHomePage />
    </div>
  );
}
