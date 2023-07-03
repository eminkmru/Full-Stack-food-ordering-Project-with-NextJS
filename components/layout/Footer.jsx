import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto p-4 pt-16">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-4 text-center mb-12">
          <div className="mb-16">
            <Title addClass="text-3xl mb-5">Contact Us</Title>
            <div className="flex flex-col gap-y-5">
              <span>
                <i className="fa-solid fa-location-dot"></i> Location
              </span>
              <span>
                <i className="fa-solid fa-phone"></i> +90 533 333 3333
              </span>
              <span>
                <i className="fa-solid fa-envelope"></i>eminkumru135@outlook.com
              </span>
            </div>
          </div>
          <div className="mb-16">
            <Title addClass="text-center text-4xl  mb-5">Kumru</Title>
            <p>
              Necessary, making this the first true generator on the internet.
              it uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="mt-3">
              <i className="fa-brands fa-facebook fa-2x mr-3"></i>
              <i className="fa-brands fa-twitter fa-2x mr-3"></i>
              <i className="fa-brands fa-linkedin fa-2x mr-3"></i>
              <i className="fa-brands fa-instagram fa-2x mr-3"></i>
              <i className="fa-brands fa-pinterest fa-2x mr-3"></i>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 mb-16">
            <Title addClass="text-3xl  mb-5">Opening Hours</Title>
            <span> Everyday</span>
            <span> 10.00 Am - 10.00 Pm</span>
          </div>
        </div>
        <div>
          <p className="text-center">
            2022 All Rights Reserved By Free Html Templates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
