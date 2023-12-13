import { useMatch, Link, useNavigate } from "react-router-dom";

import logo from "../assets/equivestLogo.svg";
import notification from "../assets/notification.svg";
import user from "../assets/user.svg";
import setting from "../assets/setting.svg";
import back from "../assets/back.svg";

const Header = ({ title, backBtn }) => {
  const matchDash = useMatch("/dashboard");
  const matchSave = useMatch("/dashboard/save");
  const matchCommunity = useMatch("/dashboard/community");
  const matchInvest = useMatch("/dashboard/invest");

  const navigate = useNavigate();

  const handleArrowBack = () => {
    navigate(-1);
  };

  const style = {
    menus:
      "border-[1px] border-white rounded-md px-4 py-2 font-bold hover:bg-primaryYellow hover:text-primaryBlack hover:border-0",
    menuActive:
      "rounded-md px-4 py-2 bg-primaryYellow text-primaryBlack font-bold",
  };
  return (
    <header className="w-full">
      <div className="hidden lg:flex items-center justify-center bg-primaryBlack py-3">
        <img src={logo} alt="logo" className="w-1/12" />
      </div>
      <div className="bg-lightGray text-white h-56 px-4 md:px-8 xl:px-16">
        <nav className="flex justify-between items-center pt-8">
          <div className="flex gap-12">
            <Link to="/">
              <img src={logo} alt="logo" className="cursor-pointer" />
            </Link>
            <div className="hidden lg:flex items-center gap-x-6">
              <Link
                to="/dashboard"
                className={Boolean(matchDash) ? style.menuActive : style.menus}
              >
                Dashboard
              </Link>
              <Link
                to="/dashboard/save"
                className={Boolean(matchSave) ? style.menuActive : style.menus}
              >
                Save
              </Link>
              <Link
                to="/dashboard/invest"
                className={
                  Boolean(matchInvest) ? style.menuActive : style.menus
                }
              >
                Invest
              </Link>
              <Link
                to="/dashboard/community"
                className={
                  Boolean(matchCommunity) ? style.menuActive : style.menus
                }
              >
                Community
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-end gap-4">
            <img src={setting} alt="setting" className="w-[17%] h-auto" />
            <img
              src={notification}
              alt="notification"
              className="w-[14%] h-auto"
            />
            <img src={user} alt="user" />
          </div>
          <img src={user} alt="user" className="lg:hidden" />
        </nav>
        <div className="flex items-center mt-6">
          {backBtn === "true" && (
            <img src={back} alt="back icon" onClick={handleArrowBack} />
          )}
          <p className="font-bold text-3xl ml-4">{title}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
