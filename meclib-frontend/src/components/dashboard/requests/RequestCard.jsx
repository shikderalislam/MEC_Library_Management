import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../axios/axios";
import { MeclibContext } from "../../../context/AppContext";

const RequestCard = ({ req, setRefreash, refreash }) => {
  const { user } = useContext(MeclibContext);
  const [book, setBook] = useState({});
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

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
    setUserName(data?.name);
  };

  useEffect(() => {
    getBook();
    getUser();
  }, []);

  const approveHandler = async () => {
    const { data } = await Axios.post("/approve-book", {
      requestId: req?._id,
      userId: user?.id,
    });
    setRefreash((prev) => !prev);
  };

  const deleteHandler = async () => {
    const { data } = await Axios.delete(
      `/delete-request/${req._id}?bookid=${book._id}`
    );
    setRefreash((prev) => !prev);
  };

  const profileHandler = () => {
    navigate("/profile");
  };

  const bookHandler = () => {
    navigate(`/book/${req.bookId}`);
  };

  return (
    <>
      {!req.isApprove && (
        <div className="mb-[20px] bg-white py-[10px] px-[20px] shadow-lg">
          <div className="">
            <p className="text-[18px] mb-[6px]">
              <span
                onClick={profileHandler}
                className="text-sky-600 font-bold cursor-pointer"
              >
                {userName}
              </span>{" "}
              is asking for{" "}
              <span
                onClick={bookHandler}
                className="font-bold text-sky-600 cursor-pointer"
              >
                {book.name}
              </span>
            </p>
            <div>
              <button
                onClick={approveHandler}
                className="py-[6px] px-[10px] text-green-600 bg-green-100 rounded"
              >
                Approve
              </button>
              <button
                onClick={deleteHandler}
                className="py-[6px] px-[10px] ml-[10px] text-red-600 bg-red-100 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestCard;
