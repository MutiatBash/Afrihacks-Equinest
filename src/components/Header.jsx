import logo from "../assets/equivestLogo.svg";
import notification from "../assets/notification.svg";
import user from "../assets/user.svg";
import setting from "../assets/setting.svg";
import back from "../assets/back.svg";

const Header = ({ title, backBtn }) => {
  const style = {
    menus:
      "border-[1px] border-white rounded-md px-4 py-2 font-bold hover:bg-primaryYellow hover:text-primaryBlack hover:border-0",
    menuActive:
      "rounded-sm px-4 py-2 bg-primaryYellow text-primaryBlack font-bold",
  };
  return (
    <header className="w-full">
      <div className="flex items-center justify-center bg-primaryBlack py-3">
        <img src={logo} alt="logo" className="w-1/12" />
      </div>
      <div className="bg-lightGray text-white h-56 px-16">
        <nav className="flex justify-between items-center pt-8">
          <div className="flex gap-12">
            <img src={logo} alt="logo" />
            <div className="flex items-center gap-x-6">
              <a href="/" className={style.menuActive}>
                Dashboard
              </a>
              <a href="/" className={style.menus}>
                Save
              </a>
              <a href="/" className={style.menus}>
                Invest
              </a>
              <a href="/" className={style.menus}>
                Community
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <img src={setting} alt="setting" className="w-[17%] h-auto" />
            <img
              src={notification}
              alt="notification"
              className="w-[14%] h-auto"
            />
            <img src={user} alt="user" />
          </div>
        </nav>
        <div className="flex items-center mt-6">
          {backBtn === "true" && <img src={back} alt="back icon" />}
          <p className="font-bold text-3xl ml-4">{title}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
