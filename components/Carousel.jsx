import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appenDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),

    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };
  return (
    <div className="h-screen w-full container mx-auto  -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 z-30 text-white  flex flex-col items-start gap-y-10">
            <Title addClass="md:text-[3.75rem] text-[3rem]">
              Fast Food Restaurant
            </Title>
            <p className="text-sm w-full sm:w-2/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae rerum deleniti ullam amet nihil. Nesciunt commodi quae
              accusantium quo. Dolores quam est rem nihil nam distinctio beatae
              accusantium iusto incidunt!
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="mt-48 z-30 text-white  flex flex-col items-start gap-y-10">
            <Title addClass="md:text-[3.75rem] text-[3rem]">
              Fast Food Restaurant
            </Title>
            <p className="text-sm w-full sm:w-2/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae rerum deleniti ullam amet nihil. Nesciunt commodi quae
              accusantium quo. Dolores quam est rem nihil nam distinctio beatae
              accusantium iusto incidunt!
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
