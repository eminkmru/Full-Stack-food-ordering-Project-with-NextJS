import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-16 ">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[2.5rem]">Our Menu</Title>
        <div className="mt-10">
          <button className="btn-secondary active">All</button>
          <button className="btn-secondary ">Burger</button>
          <button className="btn-secondary ">Pizza</button>
          <button className="btn-secondary ">Drink</button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
