import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MeclibContext } from "../../context/AppContext";

const UserDropdown = ({setShowUserDropdoun}) => {
  const { logOut, user } = useContext(MeclibContext);

  const navigate = useNavigate()
  const goToAdmin = () => {
    navigate("/admin")
    setShowUserDropdoun(false)

  }
  const goToProfile = () => {
    navigate("/profile")
    setShowUserDropdoun(false)

  }
  const logoutHandler = () => {
    logOut()
    setShowUserDropdoun(false)
  }
  return (
    <div className="w-[200px] p-[10px] bg-white shadow-2xl rounded-md">
      <ul className="">
        {user.isAdmin && (
          <li onClick={goToAdmin} className="p-[10px] rounded-md cursor-pointer hover:bg-blue-500 hover:text-gray-50">
            Dashboard
          </li>
        )}
        <li onClick={goToProfile} className="p-[10px] rounded-md cursor-pointer hover:bg-blue-500 hover:text-gray-50">
          Profile
        </li>
        <li
          className="p-[10px] rounded-md cursor-pointer hover:bg-blue-500 hover:text-gray-50"
          onClick={logoutHandler}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
