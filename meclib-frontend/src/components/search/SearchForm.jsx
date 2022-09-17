import React, { useState } from "react";
import { BiSearch, BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?key=${searchTerm}`)
    }
  return (
    <form onSubmit={formSubmit} action="" className="w-[260px] bg-[#eee] z-30 sm:w-[300px] md:w-[360px] rounded">
      <div className="flex px-[10px] justify-between items-center">
        <BiSearch className=" text-gray-400" />
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search books"
          className="flex-1 p-[10px] focus:outline-none bg-transparent"
        />
        <button className="h-[100%] ml-[6px] grid place-items-center">
          <BiRightArrowAlt className="text-gray-400" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
