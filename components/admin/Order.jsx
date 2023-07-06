import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="overflow-x-auto w-full mt-5 md:mx-5">
      <Title addClass="text-[2.5rem] my-3">Orders</Title>
      <table className="w-full text-sm text-center text-gray-500  sm:min-w-full">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
          <tr>
            <th scope="col" className="py-3 px-6">
              PRODUCT
            </th>
            <th scope="col" className="py-3 px-6">
              CUSTOMER
            </th>
            <th scope="col" className="py-3 px-6">
              TOTAL
            </th>
            <th scope="col" className="py-3 px-6">
              PAYMENT
            </th>
            <th scope="col" className="py-3 px-6">
              STATUS
            </th>
            <th scope="col" className="py-3 px-6">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              2342543632
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Emin Kumru
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Cash
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              <span className="text-green-500">Delivered</span>
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              <button className="btn-primary !bg-success ">Next Stage</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
