import * as React from "react";

interface Props {}

export const SectionDashboard: React.FC<Props> = () => {
  return (
    <div className="my-0 mx-auto pt-20">
      <div className="px-6 md:px-10 py-6">
        <p className="text-red-700 font-bold text-xl">Rp. 986,218</p>
        <span className="text-blue-500 text-sm">Jumlah Saldo Saat ini</span>
      </div>
    </div>
  );
};
