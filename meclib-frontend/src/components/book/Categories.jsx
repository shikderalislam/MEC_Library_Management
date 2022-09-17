import React, { useEffect, useState, useCallback } from "react";
import BookService from "../../services/BookService";

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeBtn, setActiveBtn] = useState("ALL");

  const getAllCategory = useCallback(async () => {
    const {
      data: { data },
    } = await BookService.getAllCategory(`/all-category`);
    setCategories(data);
  }, []);
  useEffect(() => {
    getAllCategory();
  }, []);

  const handleActiveBtn = (val) => {
    setCategory(val.category);
    setActiveBtn(val.category);
  };
  return (
    <div className="flex">
      {categories.map((category) => (
        <div
          className={`px-[6px] hover:bg-sky-400 hover:text-gray-50 cursor-pointer sm:px-[10px] py-[6px] ml-[4px] ${
            activeBtn === category.category && "bg-sky-400 text-gray-50"
          }`}
          onClick={() => handleActiveBtn(category)}
        >
          <p
            className={`font-black ${
              activeBtn === category.category && "text-gray-50"
            }`}
          >
            {category.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
