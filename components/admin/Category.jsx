import React, { useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState(["Pizza", "Burger", "Pasta"]);
  return (
    <div className="w-full ml-6">
      <Title addClass="text-[2.5rem] my-5">Category</Title>
      <div>
        <div className="flex gap-4 flex-1 flex-col sm:flex-row items-start sm:items-center ">
          <Input
            placeholder="Add a New Category"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary"
            onClick={() => {
              setCategory([...category, inputText]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        <Title addClass="text-[2.5rem] my-5">Category List</Title>
        <div className="mt-10 flex flex-col gap-5 ">
          {category.map((item, index) => (
            <div
              className="flex justify-between border-2 border-r-4 border-b-8 items-center py-3 px-2"
              key={index}
            >
              <b className="text-xl"> {item} </b>
              <button
                className="btn-primary !bg-danger"
                onClick={() => {
                  setCategory(
                    category.filter((item) => item !== category[index])
                  );
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
