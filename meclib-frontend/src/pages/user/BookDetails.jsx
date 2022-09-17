import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Axios } from "../../axios/axios";
import { MeclibContext } from "../../context/AppContext";

const BookDetails = () => {
  const { user } = useContext(MeclibContext);
  const [bookData, setBookData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [remainingRequest, setRemainingRequest] = useState(0);
  const search = useParams();

  // const userRequests = async () => {
  //   try{
  //     const {
  //       data: { data },
  //     } = await Axios.get(`/user-requests?id=${user.id}`);
  //     console.log(data)

  //   } catch (err){
  //     console.log(err.message)
  //   }
  // }
  const checkUserRequest = async () => {
    const {
      data: { requested },
    } = await Axios.get(`/request-check?userid=${user.id}&bookid=${search.id}`);
    if (requested) {
      setStatus(true);
    }
  };

  useEffect(() => {
    const getABook = async () => {
      setIsLoading(true);
      const {
        data: { data },
      } = await Axios.get(`/book/${search.id}`);
      setBookData(data);
      console.log(data);
      setIsLoading(true);
    };
    if (user) checkUserRequest();
    getABook();
  }, []);

  const sentRequest = async () => {
    const { data } = await Axios.post("/request-book", {
      userId: user.id,
      bookId: search.id,
    });

    if (data.status === 200) {
      setStatus(true);
    }
    setRemainingRequest(data.RemainingBookRequest);
  };

  return (
    <div className="w-[100%]">
      <div className="w-[90%] py-[4rem] items-start m-auto flex flex-col sm:w-[80%] sm:flex-row sm:justify-evenly">
        <div className="w-[100%] sm:w-[50%]">
          <img
            className="w-[100%] m-auto md:w-[50%]"
            src={bookData.bookImageURL}
            alt=""
          />
        </div>

        <div className="w-[100%] sm:w-[50%] flex flex-col mt-[2rem] justify-center">
          <h2 className="text-4xl font-semibold text-gray-600 text-center sm:text-left">
            {bookData.name}
          </h2>
          <h2 className="text-2xl font-semibold text-gray-500 text-center sm:text-left">
           Edition: {bookData?.edition}
          </h2>
          <h2 className="text-1xl font-semibold text-black-500 text-center sm:text-left">
           Quantity: {bookData?.quantity}
          </h2>

          <div className="w-[100%] my-[20px] text-center sm:text-left">
            authors:{bookData.authors?.map((author) => (
              <p className="text-gray-400  text-lg mr-[5px]">{author}</p>
            ))}
          </div>
          <div className="w-[100%] my-[20px] text-center sm:text-left">
            Unique Id: <p className="text-gray-400  text-lg mr-[5px]">{bookData?.uniqueid}</p>
          </div>
          

          {user.name && (
            <div className="mt-[1rem] text-center sm:text-left">
              <>
                {!status ? (
                  <>
                    {bookData.quantity !== 0 ? (
                      <button
                        onClick={sentRequest}
                        className="w-[50%] py-[6px] px-[12px] bg-sky-500 text-gray-50 rounded"
                      >
                        Send Request
                      </button>
                    ) : (
                      <button>Not available</button>
                    )}
                  </>
                ) : (
                  <button
                    disabled
                  
                    className="w-[50%] cusror-no-drop py-[6px] px-[12px] bg-gray-200 text-gray-600 rounded"
                  >
                    Sent
                  </button>
                )}
              </>
            </div>
          )}



          <div>
            <p className="text-slate-500 mt-[20px] font-medium">
             <p className="text-1xl font-semibold text-black-500 text-center sm:text-left">Short Description:</p> {bookData.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
