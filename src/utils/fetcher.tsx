import { request, GraphQLClient } from "graphql-request";
import Cookie from "js-cookie";

const token = Cookie.get("token") || "";

const client = new GraphQLClient(String(process.env.NEXT_PUBLIC_ENDPOINT), {
  headers: {
    authorization: token,
  },
});

export const globalFetch = (query: string) =>
  request(String(process.env.NEXT_PUBLIC_ENDPOINT), query);

export const authorizedFetchWithoutVariable = (query: string) =>
  client.request(query);
