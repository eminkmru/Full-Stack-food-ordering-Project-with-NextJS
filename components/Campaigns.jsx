import Image from "next/image";
import Title from "./ui/Title";
import { FaShoppingCart } from "react-icons/fa";

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[0.938rem] flex items-center gap-x-4">
      <div className="relative md:w-40 md:h-40 w-36 h-36 after:content-[''] border-[5px] border-primary rounded-full overflow-hidden ">
        <Image
          src="/images/o1.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursdays</Title>
        <div className="font-dancing">
          <span className="text-[40px]">20% </span>
          <span>Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2 my-2">
          Order Now <FaShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;
