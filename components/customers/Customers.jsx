import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white ml-2"
        onClick={onClick}
      >
        <FaArrowRight />
      </button>
    );
  }
  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <FaArrowLeft />
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto my-20">
      <Title addClass="text-[2.5rem] text-center">
        What Says Our Customers
      </Title>
      <Slider {...settings}>
        <div>
          <CustomerItem imgSrc="/images/client1.jpg" fullName="Magna Aliqua" />
        </div>
        <div>
          <CustomerItem imgSrc="/images/client2.jpg" fullName="Carter Shaw" />
        </div>
        <div>
          <CustomerItem imgSrc="/images/client1.jpg" fullName="Magna Aliqua" />
        </div>
        <div>
          <CustomerItem imgSrc="/images/client2.jpg" fullName="Carter Shaw" />
        </div>
        <div>
          <CustomerItem imgSrc="/images/client1.jpg" fullName="Magna Aliqua" />
        </div>
        <div>
          <CustomerItem imgSrc="/images/client2.jpg" fullName="Carter Shaw" />
        </div>
      </Slider>
    </div>
  );
};

export default Customers;
