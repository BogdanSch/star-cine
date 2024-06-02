import React, { useEffect, useRef } from "react";

export default function Modal({ id, show, onHide, modalTitle, modalContent }) {
  const modalElementRef = useRef();

  useEffect(() => {
    const modalElement = modalElementRef.current;
    if (show) {
      modalElement.classList.remove("hidden");
      setTimeout(() => {
        modalElement.classList.add("flex");
        modalElement.classList.remove("opacity-0");
        modalElement.classList.add("opacity-100");
      }, 10);
    } else {
      modalElement.classList.remove("flex");
      modalElement.classList.add("opacity-0");
      setTimeout(() => {
        modalElement.classList.remove("opacity-100");
        modalElement.classList.add("hidden");
      }, 300);
    }
  }, [id, show]);

  return (
    <div
      id={id}
      className="fixed w-full inset-0 z-50 hidden items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-out"
      aria-labelledby={`${id}Title`}
      aria-hidden="true"
      ref={modalElementRef}
    >
      <div className="relative w-full max-w-lg mx-auto bg-section-bg rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h5 className="text-xl font-medium" id={`${id}Title`}>
            {modalTitle}
          </h5>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            aria-label="Close"
            onClick={onHide}
          >
            <span className="h-6 w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="p-4">{modalContent}</div>
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            onClick={onHide}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
