import * as React from "react";
import Head from "next/head";

import { HeaderHomePage, FooterHomePage } from "src/components/homepage";
import { SectionExplore } from "src/components/explore";

interface Props {}

const Explore: React.FC<Props> = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Explore</title>
      </Head>
      <HeaderHomePage />
      <SectionExplore />
      <FooterHomePage />
    </div>
  );
};

export default Explore;
