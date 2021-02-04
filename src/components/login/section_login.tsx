import * as React from "react";
import { GoogleLogin } from "react-google-login";

import { request } from "graphql-request";

import { logIn } from "src/utils/auth";
import useUser from "src/hooks/useUser";

const LOGIN = `
  mutation LoginUser($email: String!, $name: String!) {
    loginUser(data: { email: $email, name: $name }) {
      accessToken
    }
  }
`;

interface Props {}

export const SectionLogin: React.FC<Props> = () => {
  const [loadingLogin, setLoadingLogin] = React.useState(false);
  const { mutate } = useUser();

  const signIn = (variables: { email: string; name: string }) => {
    return request(String(process.env.NEXT_PUBLIC_ENDPOINT), LOGIN, variables);
  };

  const responseGoogle = (response: any): any => {
    setLoadingLogin(true);
    const { profileObj } = response;
    const { email, name } = profileObj;
    signIn({ email, name })
      .then((response) => {
        logIn(response.loginUser?.accessToken);
        setLoadingLogin(false);
      })
      .catch(() => setLoadingLogin(false))
      .finally(() => mutate());
  };

  // const responseGoogle = async (response: any) => {
  //   setLoadingLogin(true);
  //   const { profileObj } = response;
  //   const { email, name } = profileObj;
  //   try {
  //     const request = await signIn({ email, name });
  //     const response = await request.loginUser;
  //     setLoadingLogin(false);
  //     logIn(response.accessToken);
  //     mutate();
  //     return response;
  //   } catch (error) {
  //     setLoadingLogin(false);
  //   }
  // };

  return (
    <div className="mx-auto my-36 pt-14">
      <div className="m-auto w-full md:w-1/3 h-96 rounded-md sm:border border-black flex flex-col justify-center items-center">
        <h2 className="font-bold text-4xl my-4">Login</h2>
        <p className="text-lg my-4">Your social media network</p>
        <span className="text-md my-2">&nbsp;With&nbsp;</span>
        <div className="h-52 w-full px-12 flex justify-center items-center">
          <GoogleLogin
            clientId={String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT)}
            render={(renderProps: {
              onClick: () => void;
              disabled?: boolean | undefined;
            }): JSX.Element => (
              <button
                type="button"
                className="bg-red-500 p-1 rounded-full w-full text-center text-xl text-white font-bold cursor-pointer hover:bg-red-700"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled || loadingLogin}
              >
                Google
              </button>
            )}
            isSignedIn={false}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
    </div>
  );
};
