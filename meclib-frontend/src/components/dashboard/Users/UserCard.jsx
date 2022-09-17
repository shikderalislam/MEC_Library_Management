import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Axios } from "../../../axios/axios";
import ToastService from "../../../services/ToastService";

const UserCard = ({ user }) => {
  const [requests, setRequests] = useState();
  const [totalRequests, setTotalRequests] = useState();
  const [approveRequests, setApproveRequests] = useState();
  const { name, requestBooks, _id } = user;

  const getUsersRequest = async () => {
    try {
      const {
        data: { data, amount },
      } = await Axios.get(`/user-requests?userid=${_id}`);

      // console.log(data.amount);
      setTotalRequests(amount);
      const activeRequest = data.filter((item) => !item.isApprove);
      const approvedRequest = data.filter((item) => item.isApprove);
      setRequests(activeRequest.length);
      setApproveRequests(approvedRequest.length);
    } catch (err) {
      ToastService.error(err.message);
    }
  };

  useEffect(() => {
    getUsersRequest();
  }, []);

  return (
    <div className="p-[20px] bg-gray-100 rounded">
      <h1 className=" text-gray-400 ">
        Full Name: <strong className="text-gray-800">{name}</strong>
      </h1>
      <p className="text-gray-400">
        Total Request:{" "}
        <strong className="text-gray-800">{totalRequests}</strong>
      </p>
      <p className="text-gray-400">
        Active Request: <strong className="text-gray-800">{requests}</strong>
      </p>
      <p className="text-gray-400">
        Approved Book:{" "}
        <strong className="text-gray-800">{approveRequests}</strong>
      </p>
    </div>
  );
};

export default UserCard;
