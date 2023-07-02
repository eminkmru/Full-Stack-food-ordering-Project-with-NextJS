import Image from "next/image";
import React from "react";
import Title from "../../../components/ui/Title";
import Header from "../../../components/layout/Header";

const Index = () => {
  return (
    <>
      <div className="flex items-center h-screen gap-20 py-10 flex-wrap md:justify-between justify-center">
        <div className="relative md:flex-1 w-[80%] h-[80%] mx-20 ">
          <Image
            src="/images/f1.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="md:flex-1 mr-20 m-14 pb-32 md:pl-0">
          <Title addClass="text-6xl">Good Pizza</Title>
          <span className="text-primary text-2xl font-bold underline underline-offset-1 my-10 inline-block">
            $10
          </span>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            itaque harum odio, placeat consequatur non. Lorem ipsum dolor sit
            amet.
          </p>
          <div>
            <h4 className="text-xl font-bold">Choose the pizza</h4>
            <div className="flex items-center gap-x-20">
              <div className="relative w-8 h-8">
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px]">
                  Small
                </span>
              </div>
              <div className="relative w-12 h-12">
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px]">
                  Medium
                </span>
              </div>
              <div className="relative w-16 h-16">
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-3 text-xs bg-primary rounded-full px-[5px]">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 mt-8">
            <label className="flex items-center gap-x-1">
              <input type="checkbox" className="w-5 h-5 accent-primary" />
              <span className="text-sm font-semibold">Ketçap</span>
            </label>
            <label className="flex items-center gap-x-1">
              <input type="checkbox" className="w-5 h-5 accent-primary" />
              <span className="text-sm font-semibold">Mayonez</span>
            </label>
          </div>
          <button className="btn-primary mt-6">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Index;
