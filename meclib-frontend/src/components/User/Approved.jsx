import { useContext,useState,useEffect } from "react";
import { Axios } from "../../axios/axios";
import { MeclibContext } from "../../context/AppContext";
import Empty from "../empty";
import LoadingSpinner from "../loading";
import ApprovedCard from "./ApprovedCard";

const Approved = () => {
  const { user } = useContext(MeclibContext);
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const getApprovedRequest = async () => {
    setIsLoading(true);
    const {
      data: { data },
    } = await Axios.get(`/user-requests?userid=${user.id}`);
    const reqArr = data.filter((item) => {
      if (item.isApprove === true && item.isSolve !== true) {
        return item;
      }
    });
    setRequests(reqArr);
    setIsLoading(false);
  };

  useEffect(() => {
    getApprovedRequest();
  }, [reload]);

  return (
    <>
      <div className="w-[100%]">
        {isLoading && <LoadingSpinner />}
        {!requests.length && <Empty message="No request found" />}
        {requests.map((req) => (
          <ApprovedCard key={req._id} {...{ req, setReload, reload }} />
        ))}
      </div>
    </>
  );
};

export default Approved;