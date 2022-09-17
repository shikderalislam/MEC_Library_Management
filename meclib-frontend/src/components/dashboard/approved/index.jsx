import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Axios } from "../../../axios/axios";
import ApprovedCard from "./ApprovedCard";

const Approved = () => {
  const [approvedRequest, setApprovedRequest] = useState([]);
  const [reload, setReload] = useState(false);

  const getAllRequests = async () => {
    const {
      data: { data },
    } = await Axios.get("/all-request");
    const filtered = data.filter((item) => item.isApprove);
    setApprovedRequest(filtered);
    if (data.length === 0) setIsEmpty(true);
  };

  useEffect(() => {
    getAllRequests();
  }, [reload]);

  console.log(approvedRequest);
  return (
    <div>
      {approvedRequest?.map((req) => (
        <ApprovedCard key={req._id} {...{ req, setReload }} />
      ))}
    </div>
  );
};

export default Approved;
