import * as React from "react";

interface Props {}

export const FooterHomePage: React.FC<Props> = () => {
  return (
    <footer className="w-full bg-red-100 py-6 px-0">
      <div className="flex flex-wrap justify-between items-center text-center my-auto mx-2 md:my-0 md:mx-8">
        <p className="text-red-500 md:w-2/5">
          © All rights reserved.Some image by Freepik
        </p>
        <p className="text-red-500 md:w-2/5">
          Seluruh transaksi pembayaran diproses menggunakan Duitku
        </p>
      </div>
    </footer>
  );
};
