import * as React from "react";
import Router from "next/router";

import { HeaderHomePage, FooterHomePage } from "src/components/homepage";
import { SectionLogin } from "src/components/login";

import useUser from "src/hooks/useUser";

interface Props {}

const Login: React.FC<Props> = () => {
  const { data } = useUser();

  React.useEffect(() => {
    if (data) {
      Router.replace("/dashboard");
    }
  }, [data]);

  return (
    <div className="w-full h-full">
      <HeaderHomePage />
      <SectionLogin />
      <FooterHomePage />
    </div>
  );
};

export default Login;
