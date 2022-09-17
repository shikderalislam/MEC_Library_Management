import React, { useState } from "react";
import { useEffect } from "react";
import { Axios } from "../../../axios/axios";

const ApprovedCard = ({ req }) => {
  const [book, setBook] = useState();
  const [user, setUser] = useState();

  const getBook = async () => {
    const {
      data: { data },
    } = await Axios.get(`/book/${req.bookId}`);
    setBook(data);
  };

  const getUser = async () => {
    const {
      data: { data },
    } = await Axios.get(`/user/${req.userId}`);
    setUser(data);
  };

  useEffect(() => {
    getBook();
    getUser();
  }, []);

  return (
    <div className="mb-[20px] bg-white py-[10px] px-[20px] shadow-lg">
      <div className="">
        <p className="text-[18px] mb-[6px]">
          {user?.name}{" "}
          <span className="text-sky-600 font-bold cursor-pointer"></span>
          asked for{" "}
          <span className="font-bold text-sky-600 cursor-pointer">
            {book?.name}
          </span>
        </p>
        <div>
          <button
            disabled
            className="py-[6px] px-[10px] text-green-600 bg-green-100 rounded"
          >
            Approved
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedCard;
