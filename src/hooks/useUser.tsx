import useSWR from "swr";
import Cookie from "js-cookie";
import request from "graphql-request";

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
    user: data,
    mutate,
  };
}

const validationFetcher = async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));
  const token = Cookie.get("token");

  if (token) {
    // authorized
    return (query: string) =>
      request(String(process.env.NEXT_PUBLIC_ENDPOINT), query);
  }

  // not authorized
  let error = new Error("Not authorized!");
  throw error;
};
