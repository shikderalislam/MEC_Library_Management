import React from "react";
import { useNavigate } from "react-router-dom";
import { addDots } from "../../utils/addDots";

const BookCard = ({ book }) => {
  const {
    authors,
    bookImageURL,
    category,
    name,
    edition,
    shortDescription,
    publishers,
    _id,
  } = book;

  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white rounded-lg  shadow-md bg-gray-800 border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-[100%] h-[200px]" src={bookImageURL} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-white">
            {addDots(name, 20)}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p> */}
        <p
          onClick={() => navigate(`/book/${_id}`)}
          className="inline-flex cursor-pointer items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </p>
      </div>
    </div>
    // <div className='minW-[200px] bg-white rounded'>
    //   <img className="" src={bookImageURL} alt={name} />
    //   <div className='p-[10px]'>
    //     <p onClick={() => navigate(`/book/${_id}`)} className='font-black text-[14px]'>{name}</p>
    //     {authors?.map(author => (
    //       <p key={author} className='text-[12px] text-gray-400'>{author}</p>
    //     ))}
    //   </div>
    // </div>
  );
};

export default BookCard;
