import * as React from "react";

import { HeaderHomePage, FooterHomePage } from "src/components/homepage";
import { SectionLogin } from "src/components/login";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="w-full h-full">
      <HeaderHomePage />
      <SectionLogin />
      <FooterHomePage />
    </div>
  );
};

export default Login;
