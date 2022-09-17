import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Axios } from "../../axios/axios";
import { MeclibContext } from "../../context/AppContext";
import { MdOutlineClose } from "react-icons/md";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase/firebase";
import { v4 } from "uuid";
import ToastService from "../../services/ToastService";

const UpdateBook = () => {
  const { user } = useContext(MeclibContext);
  const [activeTab, setActiveTab] = useState("step-1");
  const [firebaseImageURL, setFirebaseImageURL] = useState("");
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [authors, setAuthors] = useState("");
  const [publishers, setPublishers] = useState("");
  const [edition, setEdition] = useState("");
  const [category, setCategory] = useState("");
  const [bookCategories, setBookCategories] = useState("");
  const [bookQuantity, setBookQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const stringToArray = (val) => {
    const arr = val.split(",");
    return arr;
  };

  const handleUploadImage = (e) => {
    if (selectedImage === null) return;
    const imageRef = ref(storage, `images/${selectedImage.name + v4()}`);

    const uploadImageToFirebase = () => {
      const uploadTask = uploadBytesResumable(imageRef, selectedImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const uploaded = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFirebaseImageURL(url);
          });
        }
      );
    };
    uploadImageToFirebase();
  };
  const updateBook = async (e) => {
    e.preventDefault();
    // handleUploadImage();

    const authorsArr = stringToArray(authors);
    const bookCategoriesArr = stringToArray(bookCategories);
    const publishersArr = stringToArray(publishers);

    const book = {
      name: bookName,
      bookImageURL: firebaseImageURL,
      shortDescription: description,
      authors: authorsArr,
      publishers: publishersArr,
      edition: edition,
      category: category,
      SubCategories: bookCategoriesArr,
      userId: user.id,
      quantity: bookQuantity,
    };
    setIsLoading(true);
    const {
      data: { message, status },
    } = await Axios.put(`/update-book/${bookid.id}`, book);
    setIsLoading(false);
    if (status === 201) {
      ToastService.success(message);
      navigate("/admin");
    }
  };
  const bookid = useParams();

  const getABook = async () => {
    const {
      data: { data },
    } = await Axios.get(`/book/${bookid.id}`);

    const {
      name,
      bookImageURL,
      quantity,
      shortDescription,
      edition,
      category,
    } = data;
    setBookName(name);
    setDescription(shortDescription);
    setEdition(edition);
    setBookQuantity(quantity);
    setFirebaseImageURL(bookImageURL);
    setCategory(category);
  };

  const getAllCategory = async () => {
    try {
      const {
        data: { data },
      } = await Axios.get("/all-category");
      setCategories(data);
    } catch (err) {
      ToastService.error(err.message);
    }
  };

  useEffect(() => {
    getABook();
    getAllCategory();
  }, []);

  return (
    <div className="w-[100%] grid place-items-center mt-[10rem]">
      <form
        className="w-[90%] relative bg-white p-[20px] flex flex-col sm:w-[100%]"
        onSubmit={updateBook}
      >
        <div className="flex flex-col mb-[10px] ">
          <label htmlFor="">Book name</label>
          <input
            type="text"
            value={bookName}
            className="py-[6px] px-[10px] bg-slate-100 rounded"
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        {/* <div className="flex flex-col mb-[2rem] justify-start ">
              <label htmlFor="">Select image</label>
              <input
                type="file"
                className="py-[6px] px-[10px] bg-slate-100 rounded"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </div> */}
        <div className="flex flex-col mb-[10px] ">
          <label htmlFor="">Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write book description..."
            className="py-[6px] px-[10px] bg-slate-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-[10px] ">
          <label htmlFor="">Authors</label>
          <input
            type="text"
            onChange={(e) => setAuthors(e.target.value)}
            placeholder="If multiple? Then provide comma after every name"
            className="py-[6px] px-[10px] bg-slate-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-[10px] ">
          <label htmlFor="">Category</label>
          <select
            placeholder="Select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option value={category.category}>{category.category}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-[10px] ">
          <label htmlFor="">Sub categories</label>
          <input
            type="text"
            onChange={(e) => setBookCategories(e.target.value)}
            placeholder="If multiple? Then provide comma after every name"
            className="py-[6px] px-[10px] bg-slate-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-[10px] ">
          <label htmlFor="">Book quantity</label>
          <select
            placeholder="Select category"
            value={bookQuantity}
            onChange={(e) => setBookQuantity(e.target.value)}
          >
            {Array(10)
              .fill(0)
              .map((_, el) => (
                <option value={el + 1}>{el + 1}</option>
              ))}
          </select>
        </div>

        <div className="flex flex-col mb-[10px] ">
          <label htmlFor="">Edition</label>
          <input
            type="text"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            className="py-[6px] px-[10px] bg-slate-100 rounded"
          />
        </div>

        <div className="flex flex-col mb-[60px] ">
          <label htmlFor="">Publishers</label>
          <input
            type="text"
            onChange={(e) => setPublishers(e.target.value)}
            placeholder="If multiple? Then provide comma after every name"
            className="py-[6px] px-[10px] bg-slate-100 rounded"
          />
        </div>

        <div className="flex flex-col absolute bottom-[20px] right-[20px]">
          {isLoading ? (
            <button
              disabled
              className="bg-gray-900 text-white text-white py-[6px] px-[12px]"
            >
              Loading
            </button>
          ) : (
            <button className="bg-gray-900 text-white text-white py-[6px] px-[12px]">
              Update book
            </button>
          )}
        </div>
        {/* <button className="absolute bottom-[20px] right-[20px] bg-gray-900 text-white py-[6px] px-[12px]">
              Upload and continue
            </button> */}
      </form>
    </div>
  );
};

export default UpdateBook;
