import useSWR from "swr";
import Cookie from "js-cookie";
import { GraphQLClient } from "graphql-request";

export default function useUser() {
  const { data, mutate, error } = useSWR(
    `
  {
    getUser {
      name
      gender
      address
      phone
      profile_img
    }
  }
`,
    validationFetcher
  );

  const loading = !data && !error;
  const loggedOut = error;

  return {
    loading,
    loggedOut,
    data,
    mutate,
  };
}

const validationFetcher = async (query: string) => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));

  const token = Cookie.get("token");

  const client = new GraphQLClient(String(process.env.NEXT_PUBLIC_ENDPOINT), {
    headers: {
      authorization: token ? token : "",
    },
  });

  if (token) {
    // authorized
    return client.request(query);
  }

  // not authorized
  let error = new Error("Not authorized!");
  throw error;
};
