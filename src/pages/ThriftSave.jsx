import save from "../assets/save.svg";

const ThriftSave = () => {
  return (
    <div className="flex">
      <img src={save} alt="save" />
      <p>You currently dont have any thrift savings</p>
      <div>
        <button>Start New Thrift</button>
        <button>Join Thrift</button>
      </div>
    </div>
  );
};

export default ThriftSave;
