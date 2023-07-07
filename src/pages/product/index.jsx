import Image from "next/image";
import React, { useState } from "react";
import Title from "../../../components/ui/Title";
import Header from "../../../components/layout/Header";

const extraItems = [
  {
    id: 1,
    name: "Extra 1",
    price: 5,
  },
  {
    id: 2,
    name: "Extra 2",
    price: 10,
  },
  {
    id: 3,
    name: "Extra 3",
    price: 15,
  },
];

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [optionItems, setOptionItems] = useState(extraItems);
  const [extras, setExtras] = useState([]);

  const handleSize = (sizeIndex) => {
    debugger;
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const changePrice = (number) => {
    debugger;
    setPrice(price + number);
  };
  const handleChange = (e, item) => {
    debugger;
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  return (
    <>
      <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-10 flex-wrap md:justify-between justify-center">
        <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto ">
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
            ${price}
          </span>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            itaque harum odio, placeat consequatur non. Lorem ipsum dolor sit
            amet.
          </p>
          <div>
            <h4 className="text-xl font-bold">Choose the pizza</h4>
            <div className="flex items-center gap-x-20 min-h-[100px]">
              <div
                className="relative w-8 h-8 cursor-pointer hover:w-9 hover:h-9  hover:rounded-full transition-all hover:shadow-xl hover:shadow-black"
                onClick={() => handleSize(0)}
              >
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px]">
                  Small
                </span>
              </div>
              <div
                className="relative w-12 h-12 cursor-pointer hover:w-14 hover:h-14 hover:rounded-full transition-all hover:shadow-xl hover:shadow-black"
                onClick={() => handleSize(1)}
              >
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px]">
                  Medium
                </span>
              </div>
              <div
                className="relative w-16 h-16 cursor-pointer hover:w-20 hover:h-20 hover:rounded-full transition-all hover:shadow-xl hover:shadow-black"
                onClick={() => handleSize(2)}
              >
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-3 text-xs bg-primary rounded-full px-[5px]">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 mt-8">
            {optionItems.map((item) => (
              <label className="flex items-center gap-x-1" key={item.id}>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-primary"
                  onChange={(e) => handleChange(e, item)}
                />
                <span className="text-sm font-semibold">{item.name}</span>
              </label>
            ))}
          </div>
          <button className="btn-primary mt-6">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Index;
