import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { request } from "graphql-request";
import useSWR from "swr";

interface Props {}

type User = {
  id: string;
  name: string;
  profile_img: string | null;
  cover_img: string | null;
  description: string | null;
  category: string;
}[];

const fetcher = (query: string) =>
  request(String(process.env.NEXT_PUBLIC_ENDPOINT), query);

export const SectionExplore: React.FC<Props> = () => {
  const { data, error } = useSWR(
    `{
      getAllUser {
        id
        name
        profile_img
        cover_img
        description
        category
        }
    }
    `,
    fetcher
  );

  const default_img_url = `https://imgsrv.voi.id/-Rs68hmfCJCfwrs8m-HzEzeatUa3kRNAIYffkzcTDLI/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNjIzN2QyNy1kZWQ1LTRjMzMtYTM4Zi02Y2M1ZWNlNmFiYWMvMjAyMDA1MTAwNzQyLW1haW4uY3JvcHBlZF8xNTg5MDcxMzk2LmpwZw.jpg`;

  const isLoading = !data && !error;
  const getAllUser: User = data && data.getAllUser;

  if (error) {
    return (
      <div className="h-screen w-full m-auto flex justify-center">
        <p className="text-center text-2xl">An error occured.</p>
      </div>
    );
  }

  return (
    <div className="my-0 mx-auto pt-20">
      <div className="px-6 md:px-16 py-6">
        <div className="my-2 mx-auto">
          <h2 className="text-3xl font-semibold">Explore</h2>
        </div>
        {isLoading ? (
          <div className="h-screen w-full m-auto flex justify-center items-center">
            <p className="animate-bounce text-center h-1/5 text-2xl">
              Processing...
            </p>
          </div>
        ) : (
          <div className="mt-6 mx-auto h-full w-full flex flex-row flex-wrap justify-between">
            {getAllUser.map((item, index) => (
              <Link href="/" key={index}>
                <div className="w-screen lg:w-1/4 shadow-lg md:mx-2 my-4 md:mt-0 cursor-pointer group">
                  <Image
                    height={100}
                    width={200}
                    objectFit="cover"
                    quality={100}
                    layout="responsive"
                    className="bg-center bg-no-repeat"
                    alt="cover photo"
                    src={item.cover_img || default_img_url}
                  />
                  <div className="flex flex-row items-center h-12 p-auto mb-12 mx-4">
                    <div className="flex flex-row items-center justify-center h-24">
                      <Image
                        height={100}
                        width={100}
                        quality={100}
                        className="rounded-full"
                        alt="profile photo"
                        src={item.profile_img || default_img_url}
                      />
                    </div>
                    <p className="text-left mx-4">{item.name}</p>
                  </div>
                  <div className="p-auto shadow-lg my-6 mx-4 bg-gray-200 w-2/5 rounded">
                    <p className="p-2 mt-2 mx-0 text-center font-bold">
                      {item.category || "-"}
                    </p>
                  </div>
                  <div className="h-32 overflow-auto">
                    <p className="p-auto my-6 mx-4 text-blue-600">
                      {item.description ||
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="p-2 my-2 md:my-4 mx-auto w-2/4 flex justify-center font-weight-semibold rounded shadow-lg bg-gray-50 text-red-500 group-hover:bg-red-600 group-hover:text-white"
                  >
                    Lihat Halaman
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
