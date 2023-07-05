import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_482px)] flex items-center justify-center flex-col p-10 overflow-x-auto min-w-[500px]">
        <div className=" flex items-center flex-1  w-full max-h-28 ">
          <table className="w-full text-sm text-center text-gray-500 ">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 sm:px-6 px-1">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 sm:px-6 px-1">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 sm:px-6 px-1">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 sm:px-6 px-1">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody className="bg-secondary">
              <tr className="hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center">
                  3343434
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Emin Kumru
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  eti
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 bg-primary mt-8">
          <div className="relative flex flex-col">
            <Image
              src="/images/paid.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Payment</span>
          </div>
          <div className="relative flex flex-col animate-pulse">
            <Image
              src="/images/bake.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/bike.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
