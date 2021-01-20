import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import useUser from "src/hooks/useUser";

interface Props {}

type User = {
  name: string;
  profile_img: string | null;
};

export const HeaderDashboard: React.FC<Props> = () => {
  const { data, loading } = useUser();
  const router = useRouter();

  const pathName = router.pathname
    .split("/")
    .join("")
    .split("-")
    .join("")
    .toLocaleUpperCase();

  const user: User = data && data.getUser;

  const default_img_url = `https://imgsrv.voi.id/-Rs68hmfCJCfwrs8m-HzEzeatUa3kRNAIYffkzcTDLI/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNjIzN2QyNy1kZWQ1LTRjMzMtYTM4Zi02Y2M1ZWNlNmFiYWMvMjAyMDA1MTAwNzQyLW1haW4uY3JvcHBlZF8xNTg5MDcxMzk2LmpwZw.jpg`;

  return (
    <header className="w-full fixed z-10 top-0 md:px-3 shadow-lg">
      <nav className="flex flex-row items-center justify-between my-1 p-2 md:p-0">
        <div className="w-2/5 md:w-1/6 flex flex-row justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold text-red-700 cursor-pointer">
              Apresiasi
            </h1>
          </Link>
          <button
            type="button"
            className="hidden md:block text-gray-300 font-bold text-center bg-white shadow-lg font-medium py-1 px-4 rounded md:mx-2 my-1 sm:my-0 hover:bg-red-500 hover:text-white cursor-pointer"
          >
            View Page
          </button>
        </div>
        <p className="hidden md:block w-3/5 md:w-4/6 text-center text-lg text-red-700 font-medium md:mx-2">
          {pathName}
        </p>
        <div className="hidden md:flex flex-row items-center justify-end w-2/5 md:w-1/6 m-auto">
          {loading ? (
            <p>Loading...</p>
          ) : user ? (
            <>
              <Image
                src={user.profile_img || default_img_url}
                width={60}
                height={60}
                layout="fixed"
                className="rounded-full w-3/6"
              />
              <div className="md:ml-2 w-3/6">
                <p className="font-bold text-gray-300">{user.name}</p>
                <p className="font-bold text-gray-300">Creator</p>
              </div>
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};
