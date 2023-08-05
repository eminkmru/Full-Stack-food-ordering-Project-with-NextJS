import Title from "../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import {
  quantityDecrease,
  quantityIncrease,
  reset,
} from "../../redux/cartSlice";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Cart = ({ userList }) => {
  const { data: session } = useSession();

  const cart = useSelector((state) => state.cart);

  const router = useRouter();

  const dispatch = useDispatch();

  const user = userList?.find((user) => user.email === session?.user?.email);

  const [productState, setProductState] = useState([]);

  const newOrder = {
    customer: user?.fullName,
    address: user?.address ? user?.address : "No address",
    total: cart.total,
    products: productState,
    method: 0,
  };

  useEffect(() => {
    const productTitles = cart.products.map((product) => {
      return {
        title: product.title,
        foodQuantity: product.foodQuantity,
        extras: product.extras,
      };
    });
    setProductState(productTitles);
  }, [cart.products]);
  console.log(productState);
  const createOrder = async () => {
    try {
      if (session) {
        if (confirm("Are you sure you want to create this order?")) {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/orders`,
            newOrder
          );

          if (res.status === 201) {
            router.push(`/order/${res.data._id}`);
            dispatch(reset());
            toast.success("Order created successfully");
          }
        }
      } else {
        router.push("/auth/login");
        throw new Error("You must be logged in to create an order");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const quantityChange = (type, price) => {
    if (type === 0) {
      dispatch(quantityDecrease(price));
    }
    if (type === 1) {
      dispatch(quantityIncrease(price));
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full justify-center">
          {cart.products.length > 0 ? (
            <div className="max-h-[40rem] overflow-auto">
              <table
                className="w-full text-sm text-center text-gray-500 min-w-[591px] lg:min-w-[650px] xl:min-w-[1000px] 2xl:min-w-[1250px] lg:min-h-[500px] 
              md:min-h-[300px]  lg:text-lg"
              >
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-0">
                      PRODUCT
                    </th>
                    <th scope="col" className="py-3 px-6">
                      EXTRAS
                    </th>
                    <th scope="col" className="py-3 px-2">
                      PRICE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      QUANTITY
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((product) => (
                    <tr
                      className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                      key={product._id}
                    >
                      <td className="py-4 px-0 font-medium whitespace-nowrap hover:text-white ">
                        <span className="text-purple-600">{product.title}</span>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.extras.length > 0
                          ? product.extras.map((item) => (
                              <span key={item._id}>
                                {item.text}
                                <br />
                              </span>
                            ))
                          : "No Extras"}
                      </td>
                      <td className="py-4 px-2 font-medium whitespace-nowrap hover:text-white">
                        ${product.price}
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        <button>
                          <i
                            className="fa-solid fa-chevron-left mr-3 text-primary"
                            onClick={() => quantityChange(0, product)}
                          ></i>
                        </button>
                        {product.foodQuantity}
                        <button>
                          <i
                            className="fa-solid fa-chevron-right ml-3 text-primary"
                            onClick={() => quantityChange(1, product)}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-2xl font-semibold">Your cart is empty</h1>
              <button
                className="btn-primary mt-4"
                onClick={() => router.push("/menu")}
              >
                Go to menu
              </button>
            </div>
          )}
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)] md:h-screen flex flex-col justify-center text-white p-12 lg:w-auto md:w-[250px] w-full   md:text-start !text-center">
          <Title addClass="text-[40px]">CART TOTAL</Title>

          <div className="mt-6">
            <b>Subtotal: </b>${cart.total} <br />
            <b className=" inline-block my-1">Discount: </b>$0.00 <br />
            <b>Total: </b>${cart.total}
          </div>

          <div>
            <button
              className="btn-primary mt-4 md:w-auto w-52"
              onClick={createOrder}
            >
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  return {
    props: {
      userList: res.data ? res.data : [],
    },
  };
};

export default Cart;

{
  /* */
}
