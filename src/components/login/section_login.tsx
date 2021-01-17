import * as React from "react";

interface Props {}

export const SectionLogin: React.FC<Props> = () => {
  return (
    <div className="mx-auto my-36 pt-14">
      <div className="m-auto w-full md:w-1/3 h-96 rounded-md sm:border border-black flex flex-col justify-center items-center">
        <h2 className="font-bold text-4xl my-4">Login</h2>
        <p className="text-lg my-4">Your social media network</p>
        <span className="text-md my-2">&nbsp;With&nbsp;</span>
        <div className="h-52 w-full px-12 flex justify-center items-center">
          <p className="bg-red-500 p-1 rounded-full w-full text-center text-xl text-white font-bold cursor-pointer hover:bg-red-700">
            Google
          </p>
        </div>
      </div>
    </div>
  );
};
