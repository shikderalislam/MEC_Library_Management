import { useEffect,useState } from "react";
import { Axios } from "../../axios/axios";

import ToastService from "../../services/ToastService";

const ApprovedCard = ({ req, setReload }) => {
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

  const returnBook = async () => {
    try {
      const {
        data: { data },
      } = await Axios.put(`/return-book/${req._id}?bookid=${req.bookId}`);
      setReload(true);
    } catch (err) {
      ToastService.error(err.message);
    }
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
          <button
            onClick={returnBook}
            className="py-[6px] px-[10px] m-[10px] text-white bg-sky-400 rounded"
          >
            Return book
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedCard;