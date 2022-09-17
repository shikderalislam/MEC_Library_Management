import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Axios } from "../../../axios/axios";
import { MeclibContext } from "../../../context/AppContext";
import LoadingSpinner from "../../loading";
import Card from "./Card";
import Empty from "../../empty";

const History = () => {
  const { user } = useContext(MeclibContext);
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const getAllRequests = async () => {
    setIsLoading(true);
    const {
      data: { data },
    } = await Axios.get(`/user-requests?userid=${user.id}`);
    setRequests(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllRequests();
  }, [reload]);

  return (
    <div className="w-[100%]">
      {isLoading && <LoadingSpinner />}
      {!requests && <Empty message="No request found" />}
      {requests.map((request) => (
        <Card key={request._id} {...{ request, setReload, reload }} />
      ))}
    </div>
  );
};

export default History;
