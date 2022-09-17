import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio, Oval } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="w-[100%] h-[100%] grid place-items-center">
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default LoadingSpinner;
