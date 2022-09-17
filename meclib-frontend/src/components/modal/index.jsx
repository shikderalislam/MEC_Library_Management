import React from "react";

const Modal = ({ children, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="w-[100%] min-h-screen fixed top-0 left-0 z-[1050] bg-black-rgba grid place-items-center overflow-auto">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
