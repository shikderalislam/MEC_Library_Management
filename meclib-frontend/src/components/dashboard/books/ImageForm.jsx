import React, { useState } from "react";
import storage from "../../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import {MdOutlineClose} from 'react-icons/md'

const ImageForm = ({ setFirebaseImageURL, setBookName, handleActiveTab, toggleModal }) => {
  const [selectedImage, setSelectedImage] = useState("");

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
    handleActiveTab("step-2")
  };

  return (
    <form
      className="w-[90%] relative bg-white p-[20px] flex flex-col sm:w-[30%]"
      onSubmit={handleUploadImage}
    >
        <MdOutlineClose onClick={toggleModal} className="absolute top-[10px] right-[10px]"/>
      <div className="flex flex-col mb-[10px] ">
        <label htmlFor="">Book name</label>
        <input
          type="text"
          className="py-[6px] px-[10px] bg-slate-100 rounded"
          onChange={e => setBookName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-[100px] justify-start ">
        <label htmlFor="">Select image</label>
        <input
          type="file"
          className="py-[6px] px-[10px] bg-slate-100 rounded"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
      </div>
      <button className="absolute bottom-[20px] right-[20px] bg-gray-900 text-white py-[6px] px-[12px]">
        Upload and continue
      </button>
    </form>
  );
};

export default ImageForm;
