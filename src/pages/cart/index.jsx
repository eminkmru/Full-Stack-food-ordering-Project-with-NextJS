import Image from "next/image";
import React from "react";
import Title from "../../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../redux/cartSlice";

const Index = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="min-h-[calc(100vh_-_482px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="min-h-[calc(100vh_-_482px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <table className="w-full text-sm text-center text-gray-500 min-w-[500px]">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 sm:px-6 px-1">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 sm:px-6 px-1">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 sm:px-6 px-1">
                  PRICE
                </th>
                <th scope="col" className="py-3 sm:px-6 px-1">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody className="bg-secondary">
              {cart.products.map((product) => (
                <tr
                  className="hover:bg-primary transition-all"
                  key={product.id}
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center">
                    <Image src="/images/f1.png" width={40} height={40} alt="" />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.extras.length > 0 ? (
                      product.extras.map((item) => (
                        <span key={item.id}>{item.name}, </span>
                      ))
                    ) : (
                      <span>No extras</span>
                    )}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    ${product.price}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_482px)] flex justify-center text-white flex-col p-8 md:w-auto w-full">
          <Title addClass="text-[2.5rem]">CART TOTAL</Title>
          <div className="flex flex-col gap-y-4 mt-10">
            <span>
              <b>Subtotal: </b>${cart.total}
            </span>
            <span>
              <b>Discount: </b>$0.00
            </span>
            <span>
              <b>Total: </b>${cart.total}
            </span>
          </div>
          <button
            className="btn-primary my-5"
            onClick={() => {
              dispatch(reset());
            }}
          >
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
