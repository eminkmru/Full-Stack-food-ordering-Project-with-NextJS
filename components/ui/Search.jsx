import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 position w-screen h-screen   z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:opacity-40 after:absolute after:top-0 after:left-0  grid place-content-center ">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50  md:w-[600px] md:h-[600px] w-[370px] h-[500px] bg-white border-2 p-10 rounded-md shadow-2xl">
            <Title addClass="text-9xl text-[2.5rem] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search"
              className="w-full my-10 h-10 rounded-xl p-5 border-2 border-primary hover:border-secondary"
            />
            <div>
              <ul className="mt-10">
                <li className="flex items-center justify-between p-2 hover:bg-primary rounded-3xl hover:shadow-lg hover:shadow-primary">
                  <div className="relative ">
                    <Image src="/images/f1.png" alt="" width={48} height={48} />
                  </div>
                  <span className="font-bold">Good Piza</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="absolute top-3 right-3 "
                onClick={() => setIsSearchModal(false)}
              >
                <GiCancel
                  size={25}
                  className="hover:text-primary transition-all"
                />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
