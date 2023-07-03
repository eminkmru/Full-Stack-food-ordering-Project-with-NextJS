import Image from "next/image";
import React from "react";

const CustomerItem = ({ imgSrc, fullName }) => {
  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px]">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          quod nihil porro quam ut hic earum dolore minus harum aperiam!
        </p>
        <div className="flex flex-col gap-y-3 mt-4">
          <span className="text-sm font-semibold">{fullName}</span>
        </div>
      </div>
      <div className="relative w-28 h-28 border-4 rounded-full border-primary mt-8 befor:content-[''] before:absolute before:top-[4px]  before:bg-primary before:w-5 before:h-5 flex justify-center before:-translate-y-4 before:rotate-45 ">
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
