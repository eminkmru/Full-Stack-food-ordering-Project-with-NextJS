import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full bg-[#f1f2f3] h-[13.125rem] grid place-content-center rounded-bl-[3rem] rounded-t-2xl">
        <Link href="/product/">
          <div className="relative w-36 h-36 hover:scale-110 transition-all ">
            <Image src="/images/f1.png" alt="" layout="fill" className="" />
          </div>
        </Link>
      </div>
      <div className="p-[25px] text-white">
        <h4 className="text-xl font-semibold">Delicious Pizza</h4>
        <p className="text-[0.938rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          voluptatem ab modi facere ipsum. Vel.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span>$20</span>
          <button className="btn-primary w-10 h-10 !rounded-full !p-0 grid place-content-center">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
