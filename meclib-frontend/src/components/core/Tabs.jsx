import React from "react";
import { useState } from "react";


// const tabstype = ["History", "Pending", "Approved"]
const Tabs = ({tabsArr, activeTab, handleActiveTab}) => {
  
  return (
    <div className="text-sm my-[20px] font-medium text-center text-gray-500 border-b border-gray-200 ">
      <ul className="flex flex-wrap -mb-px">
        {tabsArr?.map(el => (
          <li onClick={() => handleActiveTab(el)} key={el} className="mr-2">
          <a
            href="#"
            className={`inline-block font-black p-4 rounded-t-lg border-b-2 ${activeTab === el && "active border-b-2 border-blue-600"} border-transparent hover:text-gray-600 hover:border-gray-300 `}
          >
            {el}
          </a>
        </li>
        ))}
        {/* <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 "
          >
            Profile
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 "
            aria-current="page"
          >
            Dashboard
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
          >
            Settings
          </a>
        </li> */}
        
        
      </ul>
    </div>
  );
};

export default Tabs;
