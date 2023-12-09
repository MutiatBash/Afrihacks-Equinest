import mastercard from "../assets/mastercard.svg";

const DashCards = ({ card, index }) => {
  const style = {
    btn: "bg-primaryBlack px-4 py-2 text-white rounded-md font-semibold",
  };
  return (
    <div
      className="bg-white rounded-2xl flex flex-col gap-4 p-8 shadow-2xl"
      key={index}
    >
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">{card.name}</span>
        <div className="flex gap-4 items-center">
          <img src={mastercard} alt="mastercard" />
          <span>*****87654</span>
        </div>
      </div>
      <p className="text-3xl font-bold">{card.amount}</p>
      {card.btn && (
        <div className="flex gap-4">
          <button className={style.btn}>Deposit</button>
          <button className={style.btn}>Invest</button>
          <button className={style.btn}>Transfer</button>
        </div>
      )}
      {card.profit_loss && (
        <p>
          <span className="text-green">+2% </span>from last week
        </p>
      )}
    </div>
  );
};

export default DashCards;
