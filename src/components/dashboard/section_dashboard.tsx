import * as React from "react";
import useSWR from "swr";

import { authorizedFetchWithoutVariable } from "src/utils/fetcher";

interface Props {}

export const SectionDashboard: React.FC<Props> = () => {
  const { data, error } = useSWR(
    `{
    getUser {
        balance
    }
}`,
    authorizedFetchWithoutVariable
  );

  const isLoading = !data && !error;
  const balance = data && data.getUser?.balance;

  return (
    <div className="my-0 mx-auto pt-20">
      <div className="px-6 md:px-10 py-6">
        <p className="text-red-700 font-bold text-xl">
          {isLoading
            ? "Loading..."
            : balance
            ? `Rp. ${Number(balance).toLocaleString()}`
            : `Rp. 0`}
        </p>
        <span className="text-blue-500 text-sm">Jumlah Saldo Saat ini</span>
      </div>
    </div>
  );
};
