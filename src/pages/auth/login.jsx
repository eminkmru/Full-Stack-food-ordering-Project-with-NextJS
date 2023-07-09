import React, { useEffect, useState } from "react";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/Input";
import { useFormik } from "formik";
import { CircularProgress } from "@mui/material";
import { loginSchema } from "../../../schema/login";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session } = useSession();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { push } = useRouter();

  const onSubmit = async (values, actions) => {
    setIsButtonDisabled(true);
    const { email, password } = values;
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    if (res.error) {
      toast.error(res.error, {
        position: "bottom-left",
        theme: "colored",
      });
    } else {
      toast.success("Login successfully", {
        position: "bottom-left",
        theme: "colored",
      });
    }
    actions.resetForm();
    setIsButtonDisabled(false);
  };
  useEffect(() => {
    if (session) {
      push("/profile");
    }
  }, [session, push]);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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

  console.log(session);

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[3rem] text-center mb-6 font-bold ">Login</Title>
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
          <button
            className="btn-primary !bg-secondary"
            type="button"
            onClick={() => signIn("github")}
            disabled={isButtonDisabled}
          >
            <i className="fa-brands fa-github mr-2"></i> GITHUB
          </button>
          <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-gray-600">
              Do you no have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
