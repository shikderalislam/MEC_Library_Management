import React, { useContext } from "react";
import { MeclibContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";
import SearchForm from "../../components/search/SearchForm";
import { FaUserCircle } from "react-icons/fa";
import UserDropdown from "../../components/others/UserDropdown";
import { useState } from "react";
import { useCallback } from "react";
import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useContext(MeclibContext);
  const [showUserDropDown, setShowUserDropdoun] = useState(false);

  const toggleUserDropdown = useCallback(() => {
    setShowUserDropdoun((prev) => !prev);
  }, []);

  return (
    <div className="w-[100%] z-40 fixed top-0 left-0 bg-slate-100 py-[10px]">
      <div className="w-[90%] m-auto flex justify-between items-center sm:w-[80%] md:w-[80%]">
        <div className="">
          <NavLink to="/">Mec Library</NavLink>
        </div>
        {/* <SearchForm /> */}
        {user.name ? (
          <>
            <div className="flex items-center relative">
              

              <div
                onClick={toggleUserDropdown}
                className="bg-white cursor-pointer rounded-full px-[16px] ml-[20] py-[6px] flex items-center"
              >
                <p className="mr-[10px]">{user.name}</p>
                <FaUserCircle />
              </div>

              {showUserDropDown && (
                <div className="absolute top-[40px] right-0">
                  <UserDropdown {...{setShowUserDropdoun}} />
                </div>
              )}

              {/* <p className="text-gray-400 font-bold mr-[10px]">
                <NavLink to="/profile">{user.name}</NavLink>
              </p>
              <button
                className=" bg-sky-200 py-[4px] px-[10px] text-sky-600 rounded-full"
                onClick={logOut}
              >
                Logout
              </button> */}
            </div>
          </>
        ) : (
          <div className="flex">
            <NavLink
              className="py-[6px] px-[10px] text-gray-700"
              to="/signup"
            >
              Sign up
            </NavLink>
            <NavLink
              className=" flex items-center rounded-full py-[6px] px-[16px] bg-gray-800 text-gray-50"
              to="/login"
            >
              <p className="mr-[6px]">Login</p>
              <BiLogInCircle  />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
