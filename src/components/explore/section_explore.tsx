import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {}

export const SectionExplore: React.FC<Props> = () => {
  const renderSection = () => (
    <Link href="/">
      <div className="w-screen lg:w-1/4 shadow-lg my-4 md:mt-0 cursor-pointer group">
        <Image
          height={100}
          width={200}
          objectFit="cover"
          quality={100}
          layout="responsive"
          className="bg-center bg-no-repeat"
          src="https://imgsrv.voi.id/-Rs68hmfCJCfwrs8m-HzEzeatUa3kRNAIYffkzcTDLI/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNjIzN2QyNy1kZWQ1LTRjMzMtYTM4Zi02Y2M1ZWNlNmFiYWMvMjAyMDA1MTAwNzQyLW1haW4uY3JvcHBlZF8xNTg5MDcxMzk2LmpwZw.jpg"
        />
        <div className="flex flex-row items-center h-12 p-auto mb-12 mx-4">
          <div className="flex flex-row items-center justify-center h-24">
            <Image
              height={100}
              width={100}
              quality={100}
              className="rounded-full"
              src="https://imgsrv.voi.id/-Rs68hmfCJCfwrs8m-HzEzeatUa3kRNAIYffkzcTDLI/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNjIzN2QyNy1kZWQ1LTRjMzMtYTM4Zi02Y2M1ZWNlNmFiYWMvMjAyMDA1MTAwNzQyLW1haW4uY3JvcHBlZF8xNTg5MDcxMzk2LmpwZw.jpg"
            />
          </div>
          <p className="w-1/5 text-left mx-4">Loso</p>
        </div>
        <div className="p-auto shadow-lg my-6 mx-4 bg-gray-200 w-4/12 rounded">
          <p className="p-2 mt-2 mx-0 text-center font-bold">Dancer</p>
        </div>
        <div className="h-32 overflow-auto">
          <p className="p-auto my-6 mx-4 text-blue-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <button
          type="button"
          className="p-2 my-2 md:my-4 mx-auto flex justify-center font-weight-semibold rounded shadow-lg bg-gray-50 text-red-500 group-hover:bg-red-600 group-hover:text-white"
        >
          Lihat Halaman
        </button>
      </div>
    </Link>
  );

  return (
    <div className="my-0 mx-auto pt-20">
      <div className="px-6 md:px-16 py-6">
        <div className="my-2 mx-auto">
          <h2 className="text-3xl font-semibold">Explore</h2>
        </div>
        <div className="mt-6 mx-auto h-full w-full flex flex-row flex-wrap justify-between">
          {renderSection()}
          {renderSection()}
          {renderSection()}
        </div>
      </div>
    </div>
  );
};
