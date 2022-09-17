// import Tabs from "../../components/dashboard/tabs";

import TabBody from "../../components/dashboard/tabs/TabBody";
import { MeclibContext } from "../../context/AppContext";
import Tab from "../../components/tab";
import History from "../../components/User/Requests/History";
import { useEffect } from "react";
import { Axios } from "../../axios/axios";
import Tabs from "../../components/core/Tabs";
import PendingRequest from "../../components/User/Requests/PendingRequest";
import Approved from "../../components/User/Approved";
import { useContext } from "react";
import { useState } from "react";

const tabsArr = ["History", "Approved", "Pending request"];

const Profile = () => {
  const { user } = useContext(MeclibContext);
  const [activeTab, setActiveTab] = useState(tabsArr[0]);
  const [requests, setRequests] = useState([]);

  //   const getUserRequest = async () => {
  //     // setIsLoading(true)
  //     try{
  //         const {data} = await Axios.get(`/user-requests?userid=${user.id}`)
  //         console.log(data)
  //         setRequests(data)
  //     }
  //     catch(err){
  //         console.log(err.message)
  //     }
  //     // setIsLoading(false)
  // }

  useEffect(() => {
    // getUserRequest()
  }, []);

  const handleActiveTab = (val) => {
    setActiveTab(val);
  };
  return (
    <div className="w-[100%]">
      <div className="w-[90%] m-auto sm:w-[80%]">
        <div className="w-[100%] flex flex-col justify-center items-center my-[2rem]">
          <div className="w-[160px] h-[160px] bg-gray-100 rounded-full grid place-items-center my-[2rem]">
            <img className=" w-[100px] " src="/user.png" alt="" />
          </div>
          <h2 className="text-slate-400  text-2xl">{user.name}</h2>
          <p>{user.email}</p>
        </div>

        <div className="">
          {/* <Tabs {...{handleActiveTab, tabs, activeTab}}/> */}
          <Tabs {...{ tabsArr, activeTab, handleActiveTab }} />
          <Tab {...{ activeTab, tabName: "History" }}>
            <History />
          </Tab>
          <Tab {...{ activeTab, tabName: "Approved" }}>
            <Approved />
          </Tab>
          <Tab {...{ activeTab, tabName: "Pending request" }}>
            <PendingRequest />
          </Tab>
        </div>
      </div>
    </div>
  );
};

export default Profile;