import React, { useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { profileScheme } from "../../schema/profile";

const Account = () => {
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
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        job: "",
        bio: "",
      },
      onSubmit,
      validationSchema: profileScheme,
    });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "*Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "*Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "*Your Email Adress",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "*Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 4,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "*Your Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];
  return (
    <div>
      <div className="p-8 flex-1">
        <Title addClass="text-[2.5rem]">Account Settings</Title>
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-2 gap-4 mt-5"
        >
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
      ;
    </div>
  );
};

export default Account;
