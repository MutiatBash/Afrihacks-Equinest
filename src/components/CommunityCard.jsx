import stayathomemums from "../assets/stayathomemums.svg";

const CommunityCard = ({ comm }) => {
  return (
    <div>
      <img src={comm.img} alt="community" />
      <p className="text-2xl font-bold">{comm.title}</p>
      <span>{comm.subtitle}</span>
    </div>
  );
};

export default CommunityCard;
