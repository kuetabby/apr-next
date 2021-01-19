import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

export const HeaderDashboard: React.FC<Props> = () => {
  const router = useRouter();
  const pathName = router.pathname
    .split("/")
    .join("")
    .split("-")
    .join("")
    .toLocaleUpperCase();

  return (
    <header className="w-full fixed z-10 top-0 md:px-8 shadow-lg">
      <nav className="flex flex-row items-center justify-between p-4 md:p-2">
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
        <p className="hidden md:block w-3/5 md:w-2/6 text-center text-lg text-red-700 font-medium md:mx-2">
          {pathName}
        </p>
        <Link href={"/login"}>
          <p className="hidden md:block w-2/5 md:w-1/6 text-2xl text-white text-center bg-green-500 font-medium p-1 rounded md:mx-2 my-1 sm:my-0 hover:bg-green-700 cursor-pointer">
            Login
          </p>
        </Link>
      </nav>
    </header>
  );
};
