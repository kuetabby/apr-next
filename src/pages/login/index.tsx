import * as React from "react";
import Router from "next/router";

import { HeaderHomePage, FooterHomePage } from "src/components/homepage";
import { SectionLogin } from "src/components/login";

import useUser from "src/hooks/useUser";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {}

const Login: React.FC<Props> = () => {
  const { data } = useUser();
  const recaptchaRef = React.useRef(null);
  const [isRecaptcha, setIsRecaptcha] = React.useState(true);

  React.useEffect(() => {
    recaptchaRef.current.execute();
  }, []);

  React.useEffect(() => {
    if (data) {
      Router.replace("/dashboard");
    }
  }, [data]);

  const onReCAPTCHAChange = (captchaCode: any) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (captchaCode) {
      return setIsRecaptcha(false);
    }
    return;
  };

  if (isRecaptcha) {
    return (
      <div className="h-screen flex flex-row justify-center items-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={String(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)}
          onChange={onReCAPTCHAChange}
          onExpired={() => recaptchaRef.current.reset()}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <HeaderHomePage />
      <SectionLogin />
      <FooterHomePage />
    </div>
  );
};

export default Login;
