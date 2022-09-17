import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Axios } from "../../../axios/axios";
import { MeclibContext } from "../../../context/AppContext";
import LoadingSpinner from "../../loading";
import Card from "./Card";
import Empty from "../../empty";

const PendingRequest = () => {
  const { user } = useContext(MeclibContext);
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const getPendingRequest = async () => {
    setIsLoading(true);
    const {
      data: { data },
    } = await Axios.get(`/user-requests?userid=${user.id}`);
    const reqArr = data.filter((item) => {
      return item.isApprove === false;
    });
    setRequests(reqArr);
    setIsLoading(false);
  };

  useEffect(() => {
    getPendingRequest();
  }, [reload]);

  return (
    <div className="w-[100%]">
      {isLoading && <LoadingSpinner />}
      {!requests.length && <Empty message="No request found" />}
      {requests.map((request) => (
        <Card key={request._id} {...{ request, setReload, reload }} />
      ))}
    </div>
  );
};

export default PendingRequest;
