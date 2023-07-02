import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center gap-x-10 flex-wrap">
        <div className="md:flex-1 w-full">
          <Title addClass="text-[2.5rem] mb-10">Book A Table</Title>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </div>
          <button className="btn-primary mt-4">Book Now</button>
        </div>
        <div className="md:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.252594303785!2d34.53820105369025!3d36.77569621331589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15278be06f562813%3A0x66440c856df61d13!2sOTTOBros%20Burger%20%26%20More%20%C3%87iflikk%C3%B6y!5e0!3m2!1str!2str!4v1688299576134!5m2!1str!2str"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
