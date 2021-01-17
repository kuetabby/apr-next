import * as React from "react";
import Image from "next/image";

interface Props {}

export const SectionHomePage: React.FC<Props> = () => {
  return (
    <div className="w-full pt-14 mx-auto my-0">
      <div className="flex flex-row flex-wrap items-center w-full m-0 justify-evenly">
        <div className="max-w-xl md:order-none xl:order-1">
          <Image
            src={"https://trakteer.id/images/mix/bg-3.png"}
            alt="trakteer image"
            layout="intrinsic"
            width={500}
            height={500}
          />
        </div>
        <div className="max-w-xl text-center md:text-left mt-8 md:mt-32 py-2 sm:py-0 md:order-1 xl:order-none">
          <h2 className="font-bold text-xl md:text-4xl md:mx-2">
            Platform digital untuk mendukung content creator
          </h2>
          <p className="text-lg md:mt-10 md:mx-2">
            Cara bersahabat bagi content creator untuk mendapat dukungan dana
            dari para penikmat karyanya
          </p>
          <button
            type="button"
            className="w-4/5 sm:w-2/5 bg-red-600 text-xl p-2 mt-2 md:mx-2 rounded text-white"
          >
            Buat Halaman
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-gray-100 p-4 md:p-40 mt-2 ">
        <h2 className="text-center text-2xl md:text-4xl font-bold">
          Kenapa Harus Apresiasi?
        </h2>
        <p className="text-center mt-4">
          Apresiasi berusaha membangun budaya apresiasi karya dengan melibatkan
          para penggemar dan kreator
        </p>
        <div className="flex flex-col items-center justify-center my-6 mx-auto">
          <h2 className="text-center text-2xl font-bold">Donasi</h2>
          <p className="text-center mt-4 w-2/5">
            Terima donasi secara langsung dari penikmat karyamu dengan metode
            pembayaran yang bersahabat.
          </p>
        </div>
      </div>
    </div>
  );
};
