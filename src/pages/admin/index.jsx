import React, { useState } from "react";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/Input";
import { useFormik } from "formik";
import { CircularProgress } from "@mui/material";
import { adminSchema } from "../../../schema/admin";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Index = () => {
  const { push } = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const onSubmit = async (values, actions) => {
    setIsButtonDisabled(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        values
      );
      if (res.status === 200) {
        actions.resetForm();
        toast.success("Login Success", {
          position: "bottom-left",
          theme: "colored",
        });
        push("/admin/profile");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "bottom-left",
        theme: "colored",
      });
    }
    setIsButtonDisabled(false);
  };
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[3rem] text-center mb-6 font-bold ">
          Admin Login
        </Title>
        <div className="flex flex-col w-full gap-y-3 mt-14">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-4 mt-12">
          <button className="btn-primary" type="submit">
            {isButtonDisabled ? <CircularProgress size={15} /> : "Login"}
          </button>

          <Link href="/">
            <span className="text-sm underline cursor-pointer text-gray-600">
              Home Page
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token === process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/profile",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Index;
