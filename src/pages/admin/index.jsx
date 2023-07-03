import React, { useState } from "react";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/Input";
import { useFormik } from "formik";
import { CircularProgress } from "@mui/material";
import { adminSchema } from "../../../schema/admin";
import Link from "next/link";

const Index = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const onSubmit = async (values, actions) => {
    setIsButtonDisabled(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
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

export default Index;
