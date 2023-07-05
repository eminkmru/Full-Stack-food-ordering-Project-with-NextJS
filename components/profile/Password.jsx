import React, { useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { newPasswordSchema } from "../../schema/newPassword";

const Password = () => {
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
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "*Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "*Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <div className="p-8 flex-1">
      <Title addClass="text-[2.5rem]">Password Settings</Title>
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-4 mt-5">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
        <button className="btn-primary w-full text-center" type="submit">
          {isButtonDisabled ? <CircularProgress size={20} /> : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Password;
