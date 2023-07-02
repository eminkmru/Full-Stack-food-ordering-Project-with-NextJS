import React from "react";
import Carousel from "../../../components/Carousel";
import Campaigns from "../../../components/Campaigns";
import MenuWrapper from "../../../components/product/MenuWrapper";
import About from "../../../components/About";
import Reservation from "../../../components/Reservation";

const Index = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default Index;
