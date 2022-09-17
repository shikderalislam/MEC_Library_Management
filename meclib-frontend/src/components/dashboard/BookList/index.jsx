import React, { useEffect, useState } from "react";
import { Axios } from "../../../axios/axios";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(false);

  const getAllBooks = async () => {
    const {
      data: { data },
    } = await Axios.get("/all-books/all");
    console.log(data);
    setBooks(data);
  };
  useEffect(() => {
    getAllBooks();
  }, [reload]);
  return (
    <div className="grid grid-cols-1 py-[2rem] sm:grid-cols-3 gap-[20px]">
      {!books && <Empty message="Not found" />}
      {books.map((book) => (
        <BookCard {...{ book, setReload }} />
      ))}
    </div>
  );
};

export default BookList;
