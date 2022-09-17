import React, { useContext, useState } from "react";
import { Axios } from "../../axios/axios";
import { useNavigate } from "react-router-dom";
import { MeclibContext } from "../../context/AppContext";

const LoginForm = () => {
  const { logIn, loginError } = useContext(MeclibContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsError, setIsError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    logIn({ email, password });
  };

  return (
    <div className="w-[100%] h-screen grid place-items-center">
      <form
        onSubmit={submitHandler}
        className="w-[80%] p-[20px] bg-white sm:w-[50%] md:w-[30%]"
      >
        <h1 className="text-slate-600 text-2xl mb-[20px] uppercase font-black">
          Login to <span className="text-green-400">MecLib</span>
        </h1>
        <div className="flex flex-col mb-[20px]">
          <label htmlFor="" className="text-slate-400">
            Your email
          </label>
          <input
            type="text"
            className="w-100 py-[8px] px-[10px] bg-slate-100 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-[20px]">
          <label htmlFor="" className="text-slate-400">
            Password
          </label>
          <input
            type="password"
            className="w-100 py-[8px] px-[10px] bg-slate-100 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginError && <p className="text-red-600">{loginError}</p>}

        <button
          type="submit"
          className="bg-blue-500 w-[100%] py-[8px] mt-[10px] text-gray-100 rounded-md"
        >
          Login
        </button>

        <div className="mt-[20px]">
          <p className="text-gray-600">
            Want to create account?{" "}
            <span>
              <a className="text-blue-600" href="/signup">
                Create account
              </a>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
