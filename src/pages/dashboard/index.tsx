import * as React from "react";
import Router from "next/router";

import { HeaderDashboard, SectionDashboard } from "src/components/dashboard";

import useUser from "src/hooks/useUser";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const { loggedOut } = useUser();

  React.useEffect(() => {
    if (loggedOut) {
      Router.replace("/");
    }
  }, [loggedOut]);

  if (loggedOut)
    return (
      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <p className="text-center text-xl text-red-700">Redirecting ...</p>
      </div>
    );

  return (
    <div className="w-full h-full">
      <HeaderDashboard />
      <SectionDashboard />
    </div>
  );
};

export default Dashboard;
