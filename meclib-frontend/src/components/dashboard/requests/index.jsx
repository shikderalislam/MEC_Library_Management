import React, { useEffect, useState } from "react";
import { Axios } from "../../../axios/axios";
import Empty from "../../empty";
import RequestCard from "./RequestCard";

const Requests = () => {
  const [allRequests, setAllRequests] = useState([]);
  const [refreash, setRefreash] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const getAllRequests = async () => {
    const {
      data: { data },
    } = await Axios.get("/all-request");
    if (data.length === 0) setIsEmpty(true);
    setAllRequests(data);
  };

  useEffect(() => {
    getAllRequests();
  }, [refreash]);
  return (
    <div className="my-[20px] grid grid-cols-3 gap-[20px]">
      {!allRequests && <Empty message="Not found" />}
      {allRequests?.map((req) => (
        <RequestCard key={req._id} {...{ req, refreash, setRefreash }} />
      ))}
    </div>
  );
};

export default Requests;
