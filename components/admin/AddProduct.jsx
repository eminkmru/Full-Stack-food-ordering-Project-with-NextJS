import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { useFormik } from "formik";
import { productSchema } from "../../schema/product";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const AddProduct = ({ setIsProductModal }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [imageUrl, setImageUrl] = useState();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`
      );
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        image: imageUrl,
        title: title,
        desc: desc,
        category: category,
        smallPrice: prices[0],
        mediumPrice: prices[1],
        largePrice: prices[2],
        extras: extraOptions,
      },
      onSubmit,
      validationSchema: productSchema,
    });
  const handleOnchange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = function (loadEvent) {
      setImageSrc(loadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleCreate = async () => {
    setBtnDisabled(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "food-ordering");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dp5whpvw0/image/upload",
        formData
      );
      const { url } = uploadRes.data;
      setImageUrl(url);
      const newProuct = {
        img: url,
        title,
        desc,
        prices,
        category: category.toLowerCase(),
        extraOptions,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        newProuct
      );
      if (res.status === 201) {
        setIsProductModal(false);
        toast.success("Product Created Successfully", {
          position: "top-right",
          closeOnClick: true,
        });
        getProducts();
      }
    } catch (error) {
      console.log(error);
    }
    setBtnDisabled(false);
  };

  const handleExtra = () => {
    if (extra) {
      if (extra.text && extra.price) {
        setExtraOptions([...extraOptions, extra]);
        setExtra({ text: "", price: "" });
      }
    }
  };
  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
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
          <form
            onSubmit={handleSubmit}
            className="relative z-50 md:w-[600px] w-[370px]  bg-white border-2 p-10 rounded-3xl"
          >
            <Title addClass="text-[40px] text-center">Add a New Product</Title>

            <div className="flex flex-row text-sm mt-8 gap-5 h-20">
              <label className="flex gap-2 items-center">
                <input
                  type="file"
                  className={`hidden 
                  ${errors.image && touched.image && "border-red-500"}`}
                  onChange={(e) => {
                    handleOnchange(e);
                    handleChange(e);
                  }}
                  name="image"
                />
                <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none">
                  Choose an Image
                </button>
                {errors.image && touched.image && (
                  <span className="text-xs mt-1 text-danger">
                    {errors.image}
                  </span>
                )}

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
                className={`border border-gray-400 h-8 p-3 text-sm outline-none rounded-md 
                ${
                  errors.title && touched.title
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
                placeholder="Write a Title"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                  handleChange(e);
                }}
              />
              {errors.title && touched.title && (
                <span className="text-xs mt-1 text-danger">{errors.title}</span>
              )}
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-1">Description</span>
              <textarea
                className={`border border-gray-400 h-16 p-3 text-sm outline-none rounded-md ${
                  errors.desc && touched.desc
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
                placeholder="Write a Description"
                onChange={(e) => {
                  setDesc(e.target.value);
                  handleChange(e);
                }}
                name="desc"
              />
              {errors.desc && touched.desc && (
                <span className="text-xs mt-1 text-danger">{errors.desc}</span>
              )}
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-1">Select Category</span>
              <select
                className="border border-gray-400  p-2 text-sm outline-none rounded-md"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a Category</option>
                {categories.length > 0 &&
                  categories.map((category) => (
                    <option
                      key={category._id}
                      value={category.title.toLowerCase()}
                    >
                      {category.title}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-1">Prices</span>
              {category === "pizza" ? (
                <div className="flex justify-between gap-4 md:flex-row flex-col items-center">
                  <input
                    type="number"
                    className={`border border-gray-400 p-1 text-sm outline-none md:w-28
                ${errors.smallPrice && touched.smallPrice && "border-red-500"}`}
                    placeholder="small"
                    name="smallPrice"
                    onChange={(e) => {
                      changePrice(e, 0);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  />
                  <input
                    type="number"
                    className={`border border-gray-400 p-1 text-sm outline-none md:w-28
                ${
                  errors.mediumPrice && touched.mediumPrice && "border-red-500"
                }`}
                    placeholder="medium"
                    name="mediumPrice"
                    onChange={(e) => {
                      changePrice(e, 1);
                      handleChange(e);
                    }}
                    value={values.mediumPrice}
                    onBlur={handleBlur}
                  />
                  <input
                    type="number"
                    className={`border border-gray-400 p-1 text-sm outline-none md:w-28
                ${errors.largePrice && touched.largePrice && "border-red-500"}`}
                    placeholder="large"
                    name="largePrice"
                    onChange={(e) => {
                      changePrice(e, 2);
                      handleChange(e);
                    }}
                    value={values.largePrice}
                    onBlur={handleBlur}
                  />
                </div>
              ) : (
                <input
                  type="number"
                  className={`border border-gray-400 p-1 text-sm outline-none md:w-28
            ${errors.smallPrice && touched.smallPrice && "border-red-500"}`}
                  placeholder="Price"
                  name="smallPrice"
                  onChange={(e) => {
                    changePrice(e, 0);
                    handleChange(e);
                  }}
                  value={values.smallPrice}
                  onBlur={handleBlur}
                />
              )}
            </div>
            <div className="flex flex-col text-sm mt-4 mb-16">
              <span className="font-semibold mb-1">Extras</span>
              <div className="flex gap-4 md:flex-row flex-col items-center">
                <input
                  type="text"
                  className="border border-gray-400 p-1 text-sm outline-none"
                  placeholder="Item"
                  name="text"
                  onChange={(e) => {
                    setExtra({ ...extra, [e.target.name]: e.target.value });
                  }}
                />
                <input
                  type="number"
                  className="border border-gray-400 p-1 text-sm outline-none"
                  placeholder="Price"
                  name="price"
                  onChange={(e) => {
                    setExtra({ ...extra, [e.target.name]: e.target.value });
                  }}
                />
                <button
                  className="btn-primary right-8 absolute"
                  onClick={handleExtra}
                >
                  Add
                </button>
              </div>
              <div className="mt-2 ">
                {extraOptions.map((option, index) => (
                  <span
                    className="inline-block border border-orange-600 text-orange-700 p-2 rounded-xl text-xs mr-2 my-2"
                    key={index}
                  >
                    {option.text}{" "}
                    <span className="ml-3 text-emerald-600 ">
                      {option.price}$
                    </span>
                    <button
                      className="ml-2 rounded-full bg-red-700 text-white px-1 m-0"
                      onClick={() => {
                        setExtraOptions(
                          extraOptions.filter((item) => item !== option)
                        );
                      }}
                    >
                      X
                    </button>
                  </span>
                ))}
              </div>
            </div>
            {btnDisabled ? (
              <button
                className="btn-primary !bg-green-400 right-8 bottom-6 absolute focus:outline-none cursor-not-allowed"
                type="submit"
                disabled
              >
                <CircularProgress size={25} />
              </button>
            ) : (
              <button
                className="btn-primary !bg-success right-8 bottom-6 absolute"
                onClick={handleCreate}
                type="submit"
              >
                Create
              </button>
            )}

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
          </form>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
