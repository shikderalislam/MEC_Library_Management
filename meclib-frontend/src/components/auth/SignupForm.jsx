import jwt_decode from "jwt-decode";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../axios/axios";
import { MeclibContext } from "../../context/AppContext";

const SignupForm = () => {
  const { setUser } = useContext(MeclibContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [IsError, setIsError] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await Axios.post("/auth/registration", {
      name,
      email,
      password,
    });

    if (data?.status === 406) {
      setIsError(data.message);
    } else {
      if (data.token) {
        localStorage.setItem("accessToken", data.token);
      }
      navigate("/");
      const decoded = jwt_decode(data.token);
      setUser(decoded);
    }
  };

  return (
    <div className="w-[100%] h-screen grid place-items-center">
      <form
        onSubmit={submitHandler}
        className="w-[80%] p-[20px] bg-white sm:w-[50%] md:w-[30%]"
      >
        <h1 className="text-slate-600 text-2xl mb-[20px] uppercase font-black">
          Signup to <span className="text-green-400">MecLib</span>
        </h1>

        <div className="flex flex-col mb-[20px]">
          <label htmlFor="" className="text-slate-400">
            Your name
          </label>
          <input
            type="text"
            className="w-100 py-[8px] px-[10px] bg-slate-100 rounded-md"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        {IsError && <p className="text-red-600">{IsError}</p>}

        <button
          type="submit"
          className="bg-blue-500 w-[100%] py-[8px] mt-[10px] text-gray-100 rounded-md"
        >
          Sign up
        </button>

        <div className="mt-[20px]">
          <p className="text-gray-600">
            Already have an account?{" "}
            <span>
              <a className="text-blue-600" href="/login">
                Login
              </a>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
