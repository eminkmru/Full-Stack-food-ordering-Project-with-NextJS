import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14 flex items-center">
      <div className="container flex items-center lg:gap-44 gap-20 md:flex-row flex-col-reverse">
        <div>
          <div className="relative md:w-[27.813rem] md:h-[37.5rem] w-[23rem] h-[33rem] ">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="text-white ">
          <Title addClass="text-[2.5rem]">We Are Feane</Title>
          <p className="my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. İf you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
