import React, { createContext, useCallback, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Axios } from "../axios/axios";
import { useNavigate } from "react-router-dom";

export const MeclibContext = createContext();

const AppContext = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded);
      isAuthenticate();
    }
  }, []);

  const isAuthenticate = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      return true;
    }
  };

  const isAdminHandler = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decoded = jwt_decode(token);
      return decoded.isAdmin || decoded.isSuperAdmin ? true : false;
    }
  };

  const logIn = async (credentials) => {
    const { email, password } = credentials;
    try {
      const { data } = await Axios.post("/auth/login", {
        email,
        password,
      });

      if (data?.status === 401) {
        setLoginError(data.message);
      } else {
        if (data?.token) {
          localStorage.setItem("accessToken", data.token);
        }

        const admin = isAdminHandler();
        if (admin) {
          navigate("/admin");
        } else {
          navigate("/profile");
        }

        const decoded = jwt_decode(data.token);
        setUser(decoded);
        isAuthenticate();
      }

      console.log(loginError);
    } catch (err) {
      console.log(err);
    }
  };

  const logOut = useCallback(() => {
    localStorage.removeItem("accessToken");
    setUser({});
    navigate("/");
  }, []);

  // const getAllBooks = async () => {
  //   const {
  //     data: { data },
  //   } = await Axios.get("/all-books");
  //   setAllBooks(data);
  // };

  return (
    <MeclibContext.Provider
      value={{
        user,
        setUser,
        logIn,
        logOut,
        setIsAuth,
        isAuth,
        allBooks,
        isAuthenticate,
        isAdminHandler,
        loginError,
      }}
    >
      {children}
    </MeclibContext.Provider>
  );
};

export default AppContext;
