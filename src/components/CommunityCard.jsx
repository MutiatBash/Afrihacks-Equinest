import stayathomemums from "../assets/stayathomemums.svg";

const CommunityCard = ({ comm }) => {
  return (
    <div>
      <img src={comm.img} alt="community" />
      <p className="text-2xl font-bold mt-4">{comm.title}</p>
      <span>{comm.subtitle}</span>
      <span className="block">{comm.subtitle2}</span>
    </div>
  );
};

export default CommunityCard;
