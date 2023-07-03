import React, { useState } from "react";
import Title from "./ui/Title";
import Input from "./form/Input";
import { useFormik } from "formik";
import { CircularProgress } from "@mui/material";
import { reservationScheme } from "../schema/reservationSchema";
const Reservation = () => {
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
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationScheme,
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
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 5,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 4,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[2.5rem] mb-10">Book A Table</Title>
      <div className="flex justify-between items-center gap-x-10 flex-wrap">
        <form className="md:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <button className="btn-primary mt-4" type="submit">
            {isButtonDisabled ? <CircularProgress size={15} /> : "Book Now"}
          </button>
        </form>
        <div className="md:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.252594303785!2d34.53820105369025!3d36.77569621331589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15278be06f562813%3A0x66440c856df61d13!2sOTTOBros%20Burger%20%26%20More%20%C3%87iflikk%C3%B6y!5e0!3m2!1str!2str!4v1688299576134!5m2!1str!2str"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
