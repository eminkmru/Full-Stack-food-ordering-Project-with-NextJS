import Image from "next/image";
import React, { useState } from "react";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/Input";
import { useFormik } from "formik";
import { ButtonGroup, CircularProgress } from "@mui/material";
import { profileScheme } from "../../../schema/profile";
import Account from "../../../components/profile/Account";
import Password from "../../../components/profile/Password";
import Order from "../../../components/profile/Order";
const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="flex px-10 mb-36 md:flex-row flex-col">
      <div className="border border-gray-600 lg:w-80 w-auto flex flex-col justify-center flex-shrink-0">
        <div className="relative flex flex-col items-center  px-10 py-5">
          <Image
            src="/images/client2.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
            objectFit="contain"
          />
          <b className="text-2xl mt-2">Emin Kumru</b>
        </div>
        <div>
          <ul className="font-semibold">
            <li
              className={`cursor-pointer hover:bg-secondary hover:text-white transition-all ${
                tabs === 0 && "bg-primary text-white"
              }`}
              onClick={() => {
                setTabs(0);
              }}
            >
              <button className="border w-full p-3">
                <i className="fa fa-home mr-1"></i>
                Account
              </button>
            </li>
            <li
              className={`cursor-pointer hover:bg-secondary hover:text-white transition-all ${
                tabs === 1 && "bg-primary text-white"
              }`}
              onClick={() => {
                setTabs(1);
              }}
            >
              <button className="border w-full p-3">
                <i className="fa fa-key  mr-1"></i>Password
              </button>
            </li>
            <li
              className={`cursor-pointer hover:bg-secondary hover:text-white transition-all ${
                tabs === 2 && "bg-primary text-white"
              }`}
              onClick={() => {
                setTabs(2);
              }}
            >
              <button className="border w-full p-3">
                <i className="fa fa-motorcycle mr-1"></i>Orders
              </button>
            </li>
            <li
              className={`cursor-pointer hover:bg-secondary hover:text-white transition-all ${
                tabs === 3 && "bg-primary text-white"
              }`}
              onClick={() => {
                setTabs(3);
              }}
            >
              <button className="border w-full p-3">
                <i className="fa fa-sign-out mr-1"></i>Exit
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export default Profile;
