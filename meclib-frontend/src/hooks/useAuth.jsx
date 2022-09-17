import { useContext, useState, useEffect } from "react";
import { MeclibContext } from "../context/AppContext";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken")
  //   if(token){
  //     setIsAuth(true)
  //   }
  // }, [])
  const token = localStorage.getItem("accessToken")
    if(token){
      setIsAuth(true)
    }

  

  return isAuth;
};

export default useAuth;
