import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

const Products = () => {
  return (
    <div className="overflow-x-auto w-full mt-5 mx-5">
      <Title addClass="text-[2.5rem] my-3">Products</Title>
      <table className="w-full text-sm text-center text-gray-500  sm:min-w-full">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
          <tr>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              TITLE
            </th>
            <th scope="col" className="py-3 px-6">
              PRICE
            </th>
            <th scope="col" className="py-3 px-6">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              <Image src="/images/f1.png" width={50} height={50} alt="" />
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              2342543632
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Good Pizza
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              <button className="btn-primary !bg-danger">Delete</button>
            </td>
          </tr>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              <Image src="/images/f1.png" width={50} height={50} alt="" />
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              2342543632
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Good Pizza
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              <button className="btn-primary !bg-danger">Delete</button>
            </td>
          </tr>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              <Image src="/images/f1.png" width={50} height={50} alt="" />
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              2342543632
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Good Pizza
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              <button className="btn-primary !bg-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
