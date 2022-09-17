import React, { useContext, useEffect, useMemo, useState } from "react";
import { Axios } from "../../axios/axios";
import { MeclibContext } from "../../context/AppContext";
import BookService from "../../services/BookService";
import LoadingSpinner from "../loading";
import BookCard from "./BookCard";
import Categories from "./Categories";

const categories = ["all", "CSE", "EEE", "CE"];

const BookList = () => {
  const [allBook, setAllBook] = useState([]);
  const [category, setCategory] = useState("all");
  const [numOfBooks, setNumOfBook]= useState(0)
  const [isLoading, setIsLoading] = useState(false)


  const getAllBooks = async () => {
    setIsLoading(true)
    const {
      data: { data },
    } = await BookService.getAllBook(`/all-books/${category}`);
    setAllBook(data)
    setNumOfBook(data.length)
    setIsLoading(false)
  };

  useEffect(() => {

    getAllBooks()
  }, [category]);


  return (
    <div className="w-[100%]">
      
      <div className="w-[90%] py-[6rem] m-auto sm:w-[80%]">
        <div className="flex justify-between items-center my-[20px]">
        <h1 className="text-[2rem] font-black">Found ({numOfBooks})</h1>
        <Categories {...{categories, setCategory}}/>
        </div>
        {isLoading && <LoadingSpinner />}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px]">
        
          {allBook?.map((book) => (
            <BookCard key={book._id} {...{ book }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
