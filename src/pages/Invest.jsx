import Header from "../components/Header";
import CommunityCard from "../components/CommunityCard";

import stayathomemums from "../assets/stayathomemums.svg";
import business from "../assets/business.svg";
import working from "../assets/working.svg";
import disable from "../assets/disable.svg";
import unemployed from "../assets/unemployed.svg";
import student from "../assets/student.svg";

const communities = [
  {
    img: stayathomemums,
    title: "Stay At Home Mums",
    subtitle: "Connect with other stay-at-home moms",
  },
  {
    img: unemployed,
    title: "Unemployed",
    subtitle: "Connect with others hoping to get employment",
  },
  {
    img: business,
    title: "Business Women",
    subtitle: "learn about investment opportunities and build your wealth.",
  },
  {
    img: student,
    title: "Students",
    subtitle:
      "Secure a brighter financial future and navigate your student life with confidence.",
  },
  {
    img: disable,
    title: "Disabled Women",
    subtitle:
      "Believe in your abilities and take charge of your financial future.",
  },
  {
    img: working,
    title: "Working Class women",
    subtitle: "learn about investment opportunities and build your wealth.",
  },
];

const Invest = () => {
  return (
    <>
      <Header />
      <div className="px-16 my-12 ">
        <p className="text-center font-semibold text-2xl mb-8">
          There are several investment opportunities available for you at{" "}
          <span className="text-primaryYellow">EquiNest</span>
        </p>
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 text-primaryBlack">
          {communities.map((comm, index) => (
            <CommunityCard comm={comm} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Invest;
