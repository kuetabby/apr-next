import * as React from "react";
import Router from "next/router";

import { HeaderHomePage, FooterHomePage } from "src/components/homepage";
import { SectionLogin } from "src/components/login";

import useUser from "src/hooks/useUser";

interface Props {}

const Login: React.FC<Props> = () => {
  const { user } = useUser();

  React.useEffect(() => {
    if (user) {
      Router.replace("/dashboard");
    }
  }, [user]);

  return (
    <div className="w-full h-full">
      <HeaderHomePage />
      <SectionLogin />
      <FooterHomePage />
    </div>
  );
};

export default Login;
