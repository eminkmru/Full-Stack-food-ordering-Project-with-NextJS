import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        setOrders(
          res.data.filter((order) => order.customer === currentUser?.fullName)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [currentUser]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data.filter((user) => user.email === session.user.email)[0]
        );
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [session]);

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Password</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                ADRESS
              </th>
              <th scope="col" className="py-3 px-6">
                DATE
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                className="transition-all bg-secondary border-gray-700 hover:bg-primary  cursor-pointer"
                key={order._id}
                onClick={() => router.push(`/order/${order._id}`)}
              >
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  <span>{order._id.substring(0, 5)}...</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {currentUser?.address}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {order.createdAt.substring(0, 10)}{" "}
                  {order.createdAt.substring(11, 16)}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  ${order.total}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {(order.status === 0 && "Preparing") ||
                    (order.status === 1 && "On the way") ||
                    (order.status === 2 && "Delivered")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
