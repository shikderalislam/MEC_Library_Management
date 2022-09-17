import React from "react";
import Tab from "../../tab";
import Approved from "../approved";
import BookList from "../BookList";
import Requests from "../requests";
import Users from "../Users";

const TabBody = ({ activeTab }) => {
  return (
    <>
      <Tab {...{ activeTab, tabName: "Requests" }}>
        <Requests />
      </Tab>
      <Tab {...{ activeTab, tabName: "Approved" }}>
        <Approved />
      </Tab>
      <Tab {...{ activeTab, tabName: "BookList" }}>
        <BookList />
      </Tab>
      <Tab {...{ activeTab, tabName: "Users" }}>
        <Users />
      </Tab>
    </>
  );
};

export default TabBody;
