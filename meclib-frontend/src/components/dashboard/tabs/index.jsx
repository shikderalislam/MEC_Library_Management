import React, { useState } from "react";

const Tabs = ({ handleActiveTab, tabs, activeTab }) => {
  return (
    <div className="w-full flex border-b-[1px] bg-white">
      {tabs.map((t) => (
        <div
          onClick={() => handleActiveTab(t)}
          className={`${activeTab === t && "active"} py-[10px] mr-[10px] cursor-pointer px-[10px] font-bold text-sky-800 text-[20px]`}
          key={t}
        >
          {t}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
