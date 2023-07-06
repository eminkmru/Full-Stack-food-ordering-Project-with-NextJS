import React, { useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { adminFooterSchema } from "../../schema/adminFooter";

const Footer = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [linkAddress, setLinkAddress] = useState("");
  const [icanName, setIcanName] = useState("");
  const [icons, setIcons] = useState([
    "fab fa-facebook",
    "fab fa-twitter",
    "fab fa-instagram",
    "fab fa-linkedin",
  ]);

  const onSubmit = async (values, actions) => {
    setIsButtonDisabled(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
    setIsButtonDisabled(false);
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        description: "",
        day: "",
        time: "",
        link: "",
        icon: "",
      },
      onSubmit,
      validationSchema: adminFooterSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
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
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "description",
      type: "text",
      placeholder: "Write a Description",
      value: values.description,
      errorMessage: errors.description,
      touched: touched.description,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Write a Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Write a Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
    {
      id: 7,
      name: "link",
      type: "url",
      placeholder: "Write a Link",
      value: values.link,
      errorMessage: errors.link,
      touched: touched.link,
    },
    {
      id: 8,
      name: "icon",
      type: "text",
      placeholder: "Icon Name",
      value: values.icon,
      errorMessage: errors.icon,
      touched: touched.icon,
    },
  ];
  const firstDivInputs = inputs.slice(0, 6);
  return (
    <div className="sm:m-5 w-full ">
      <Title addClass="text-[2.5rem] my-5">Footer</Title>
      <div className="">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {firstDivInputs.map((input) => (
            <Input {...input} />
          ))}
        </div>
        <div className="my-4 flex  flex-col items-center  lg:flex-row justify-between">
          <div className="flex flex-col sm:flex-row gap-5 ">
            <Input
              placeholder="Link Address"
              onChange={(e) => setLinkAddress(e.target.value)}
            />
            <Input
              placeholder="Icon Name"
              onChange={(e) => setIcanName(e.target.value)}
            />
            <button
              className="btn-primary"
              onClick={() => setIcons([...icons, icanName])}
              type="button"
            >
              Add
            </button>
          </div>
          <div className="flex gap-4 mt-5  ml-3">
            {icons.map((icon, index) => (
              <span className="flex gap-4" key={index}>
                <i className={` ${icon} text-xl`}></i>
                <button
                  onClick={() => {
                    setIcons((prev) => prev.filter((item, i) => i !== index));
                  }}
                >
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <button className="btn-primary mt-14 w-full sm:w-auto">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
