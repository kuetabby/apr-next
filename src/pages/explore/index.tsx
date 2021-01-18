import * as React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { HeaderHomePage, FooterHomePage } from "src/components/homepage";
import { SectionExplore } from "src/components/explore";

interface Props {
  data: {
    id: string;
    name: string;
    profile_img: string | null;
    cover_img: string | null;
    description: string | null;
    category: string;
  }[];
}

const Explore: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Explore</title>
      </Head>
      <HeaderHomePage />
      <SectionExplore data={data} />
      <FooterHomePage />
    </div>
  );
};

export default Explore;

export const getStaticProps: GetServerSideProps = async () => {
  const client = new ApolloClient({
    uri: "https://apresiasi.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        getAllUser {
          id
          name
          profile_img
          cover_img
          description
          category
        }
      }
    `,
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.getAllUser,
    },
  };
};
