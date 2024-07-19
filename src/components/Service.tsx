import { TfiShoppingCartFull } from "react-icons/tfi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import ServiceCard from "./ServiceCard";
const data = [
    {
        title: "FAST AND FREE DELIVERY",
        icon: <TfiShoppingCartFull />,
        desc: "Free  deliveri for all oeders over Rs.140",
    },
    {
        title: "24/7 CUSTOMER SUPPORT",
        icon: <RiCustomerService2Fill />,
        desc: "Friendly 24/7 customer support",
    },
    {
        title: "MONEY BACK GARRANTEE",
        icon: <BsShieldCheck />,
        desc: "We return money within 3 days",
    },
    {
        title: "MEMBER GIFTS",
        icon: <FiGift />,
        desc: "Discount coupans weekends",
    },

];

const Service = () => {
  return (
    <div className="bg-[#f7f5ee]">
        <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-4 py-10">
            {data.map((item) => (
            <ServiceCard
            key={item.title}
            title={item.title}
            icon={item.icon}
            desc={item.desc}
            />
            ))}
        </div>
    </div>
  );
};

export default Service;
