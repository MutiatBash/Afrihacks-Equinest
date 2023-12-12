import { useNavigate } from "react-router";

const CommunityCard = ({ comm }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/dashboard/community-rules?name=${comm.title}`)}
      className="cursor-pointer"
    >
      <img src={comm.img} alt="community" />
      <p className="text-2xl font-bold mt-4">{comm.title}</p>
      <span className="block w-3/4 md:w-full">{comm.subtitle}</span>
      <span className="block">{comm.subtitle2}</span>
    </div>
  );
};

export default CommunityCard;
