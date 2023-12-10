import Header from "../components/Header";

const Save = () => {
  const save = [
    {
      title: "Safe Lock",
      subtitle:
        "Lock your money without access for a period of time and get 5% interest",
      active: "false",
    },
    {
      title: "Thrift Savings",
      subtitle:
        "Save money with your friends collectively as a team and get 5% interest",
      active: "true",
    },
    {
      title: "Target savings",
      subtitle:
        "Save towards a specific goal/purpose within a defined period of time",
      active: "false",
    },
  ];

  const style = {
    activeBox:
      "flex justify-center items-center px-8 flex-col h-[450px] shadow-lg border-[1px] border-primaryBlack rounded-2xl text-primaryBlack bg-darkGray text-white",
    box: "flex justify-center items-center px-8 flex-col h-[450px] bg-white shadow-lg border-[1px] border-primaryBlack rounded-2xl text-primaryBlack hover:bg-darkGray hover:text-white",
  };
  return (
    <>
      <Header title="Welcome back, Cynthia!" />
      <div className="px-16 my-12 grid grid-cols-3 gap-x-16 gap-y-8 text-primaryBlack -mt-10">
        {save.map((data, index) => (
          <div
            className={data.active === "true" ? style.activeBox : style.box}
            key={index}
          >
            <p className="font-bold">{data.title}</p>
            <span className="text-center">{data.subtitle}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Save;
