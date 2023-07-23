import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";

const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();

  const handleOnchange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = function (loadEvent) {
      setImageSrc(loadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
    console.log(imageSrc);
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center ">
      <OutsideClickHandler
        onOutsideClick={() => {
          if (confirm("Are you sure you want to exit?")) {
            setIsProductModal(false);
          }
        }}
      >
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px]  bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">Add a New Product</Title>

            <div className="flex flex-row text-sm mt-8 gap-5 h-20">
              <label className="flex gap-2 items-center">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleOnchange(e)}
                />
                <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none">
                  Choose an Image
                </button>
                {imageSrc && (
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="rounded-full border-2 border-primary"
                      src={imageSrc}
                      alt=""
                      width={90}
                      height={90}
                    />
                  </div>
                )}
              </label>
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-1">Title</span>
              <input
                type="text"
                className="border border-gray-400 h-8 p-3 text-sm outline-none rounded-md"
                placeholder="Write a Title"
              />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-1">Description</span>
              <textarea
                className="border border-gray-400 h-16 p-3 text-sm outline-none rounded-md"
                placeholder="Write a Description"
              />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-1">Select Category</span>
              <select className="border border-gray-400  p-2 text-sm outline-none rounded-md">
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-1">Prices</span>
              <div className="flex justify-between gap-4 md:flex-row flex-col items-center">
                <input
                  type="number"
                  className="border border-gray-400 p-1 text-sm outline-none md:w-28"
                  placeholder="small"
                />
                <input
                  type="number"
                  className="border border-gray-400 p-1 text-sm outline-none md:w-28"
                  placeholder="medium"
                />
                <input
                  type="number"
                  className="border border-gray-400  p-1 text-sm outline-none md:w-28"
                  placeholder="large"
                />
              </div>
            </div>
            <div className="flex flex-col text-sm mt-4 mb-16">
              <span className="font-semibold mb-1">Extras</span>
              <div className="flex gap-4 md:flex-row flex-col items-center">
                <input
                  type="text"
                  className="border border-gray-400 p-1 text-sm outline-none"
                  placeholder="Item"
                />
                <input
                  type="number"
                  className="border border-gray-400 p-1 text-sm outline-none"
                  placeholder="Price"
                />
                <button className="btn-primary right-8 absolute">Add</button>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-orange-600 text-white  border p-2 rounded-xl text-xs">
                  Ketçap
                </span>
              </div>
            </div>
            <button className="btn-primary !bg-success right-8 bottom-6 absolute">
              Create
            </button>

            <button
              className="absolute  top-4 right-4"
              onClick={() => {
                if (confirm("Are you sure you want to exit?")) {
                  setIsProductModal(false);
                }
              }}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
