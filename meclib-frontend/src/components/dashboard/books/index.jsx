import React, { useCallback, useContext, useState } from "react";
import { Axios } from "../../../axios/axios";
import { MeclibContext } from "../../../context/AppContext";
import BookService from "../../../services/BookService";
import ToastService from "../../../services/ToastService";
import Tab from "../../tab";
import BookDesForm from "./BookDesForm";
import ImageForm from "./ImageForm";

const BookForm = ({ toggleModal, setIsModal }) => {
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
  const [uniqueId, setUniqueId] = useState("");

  const stringToArray = (val) => {
    const arr = val.split(",");
    return arr;
  };

  const handleUploadImage = (e) => {
    e.preventDefault();
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
    handleActiveTab("step-2");
  };

  const bookDesSubmit = async (e) => {
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
      uniqueid:uniqueId
    };
    setIsLoading(true);
    const {
      status,
      data: { message },
    } = await BookService.postBook(book);
    setIsLoading(false);
    if (status == 201) {
      setIsModal(false);
      ToastService.success(message);
    }
  };

  const handleActiveTab = useCallback((val) => {
    setActiveTab(val);
  }, []);

  return (
    <>
      <Tab {...{ activeTab, tabName: "step-1" }}>
        <ImageForm
          {...{
            setFirebaseImageURL,
            setBookName,
            handleActiveTab,
            toggleModal,
          }}
        />
      </Tab>
      <Tab {...{ activeTab, tabName: "step-2" }}>
        <BookDesForm
          {...{
            bookDesSubmit,
            setBookQuantity,
            setDescription,
            setAuthors,
            setPublishers,
            setCategory,
            setEdition,
            setBookCategories,
            toggleModal,
            isLoading,
            setUniqueId
          }}
        />
      </Tab>
    </>
  );
};

export default BookForm;
