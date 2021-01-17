import React from "react";
import Link from "next/link";

interface Props {}

export const HeaderHomePage: React.FC<Props> = () => {
  return (
    <header className="w-full fixed z-10 top-0 bg-red-700 md:px-8">
      <nav className="flex flex-row items-center mx-auto my-0 justify-between p-2">
        <Link href={"/"}>
          <h1 className="w-1/4 text-4xl font-bold text-white cursor-pointer">
            Apresiasi
          </h1>
        </Link>
        <div className="w-1/3 lg:w-1/5 flex flex-wrap justify-center items-center md:mr-6">
          <Link href={"/explore"}>
            <p className="text-xl text-white font-medium md:mx-2 cursor-pointer">
              Explore
            </p>
          </Link>
          <Link href={"/login"}>
            <button
              type="button"
              className="w-full md:w-2/5 lg:w-2/5 text-2xl text-white bg-green-500 font-medium p-1 rounded md:mx-2 my-1 sm:my-0 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
            >
              Login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
