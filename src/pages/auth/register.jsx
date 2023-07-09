import React, { useState } from "react";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/Input";
import { useFormik } from "formik";
import { CircularProgress } from "@mui/material";
import { registerSchema } from "../../../schema/register";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Register = () => {
  const { push } = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const onSubmit = async (values, actions) => {
    setIsButtonDisabled(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
      if (res.status === 200) {
        toast.success("Register successfully", {
          position: "bottom-left",
          theme: "colored",
        });
        actions.resetForm();
        push("/auth/login");
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-left",
        theme: "colored",
      });
      console.log(error);
    }
    actions.resetForm();
    setIsButtonDisabled(false);
  };
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[3rem] text-center mb-6 font-bold ">
          Register
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
            {isButtonDisabled ? <CircularProgress size={15} /> : "Register"}
          </button>

          <Link href="/auth/login">
            <span className="text-sm underline cursor-pointer text-gray-600">
              Do you have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
