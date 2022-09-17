import React from "react";

const BookDropdownMenu = () => {
  return (
    <div className="w-[120px] p-[10px] bg-gray-50 absolute top-0 right-0 shadow-2xl rounded-md">
      <ul className="">
        <li>Edit book</li>
        <li>Delete book</li>
      </ul>
    </div>
  );
};

export default BookDropdownMenu;
