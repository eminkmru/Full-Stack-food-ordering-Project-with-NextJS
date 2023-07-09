import Image from "next/image";
import React, { useState } from "react";
import Products from "../../../components/admin/Products";
import Order from "../../../components/admin/Order";
import Category from "../../../components/admin/Category";
import Footer from "../../../components/admin/Footer";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();

  const closeAdminAccount = async () => {
    try {
      if (confirm("Are you sure?")) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
        if (res.status === 200) {
          push("/admin");
          toast.success("Logout Success", {
            position: "bottom-left",
            theme: "colored",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex px-10 mb-36 md:flex-row flex-col">
      <div className="border border-gray-600 lg:w-80 w-auto flex flex-col justify-center flex-shrink-0">
        <div className="relative flex flex-col items-center  px-10 py-5">
          <Image
            src="/images/admin.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
            objectFit="contain"
          />
          <b className="text-2xl mt-2">Admin</b>
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
              <button className="border w-full p-3 flex pl-5">
                <i className="fa-solid fa-utensils mr-1"></i>
                Products
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
              <button className="border w-full p-3 flex pl-5">
                <i className="fa fa-motorcycle mr-1"></i>Orders
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
              <button className="border w-full p-3 flex pl-5">
                <i className="fa fa-boxes-stacked mr-1"></i>Categories
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
              <button className="border w-full p-3 flex pl-5">
                <i className="fa-solid fa-window-maximize me-1"></i>Footer
              </button>
            </li>
            <li
              className={`cursor-pointer hover:bg-secondary hover:text-white transition-all ${
                tabs === 4 && "bg-primary text-white"
              }`}
              onClick={closeAdminAccount}
            >
              <button className="border w-full p-3 flex pl-5">
                <i className="fa fa-sign-out mr-1"></i>Exit
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Profile;
