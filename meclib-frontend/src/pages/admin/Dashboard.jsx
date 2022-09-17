import React, { useState } from "react";
import Tabs from "../../components/core/Tabs";
import BookForm from "../../components/dashboard/books";
// import Tabs from '../../components/dashboard/tabs'
import TabBody from "../../components/dashboard/tabs/TabBody";
import Modal from "../../components/modal";

const tabsArr = ["Requests", "Approved", "BookList", "Users"];

const Dashboard = () => {
  const [isModal, setIsModal] = useState();
  const [activeTab, setActiveTab] = useState(tabsArr[0]);

  const handleActiveTab = (val) => {
    setActiveTab(val);
  };

  const toggleModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <>
      <div className="w-[100%] ">
        <div className="w-[90%] sm:w-[80%] m-auto">
          <div className="w-[100%] m-auto mt-[4rem] flex justify-between items-center "></div>
          <div className="w-[100%] m-auto mt-[4rem] flex justify-between items-center  ">
            <button
              onClick={toggleModal}
              className="py-[8px] px-[12px] text-white bg-gray-900 rounded"
            >
              {" "}
              + Add book
            </button>
          </div>
          <div className="">
            <Tabs {...{ handleActiveTab, tabsArr, activeTab }} />
            <TabBody {...{ activeTab }} />
          </div>
        </div>
      </div>

      <Modal isOpen={isModal}>
        <BookForm {...{ toggleModal, setIsModal }} />
      </Modal>
    </>
  );
};

export default Dashboard;
