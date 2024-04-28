import React, { useEffect, useRef } from "react";
import { Image } from "./Image";

const Modal = ({ open, item, close, onConfirm, onCancel }) => {
  const modal = useRef(null);

  useEffect(() => {
    if (open) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [open]);

  return (
    <dialog ref={modal} className="result-modal" onClose={close}>
      {open && (
        <div
          className="fixed inset-0 bg-[#000000] bg-opacity-20 overflow-y-auto h-full w-full m-auto"
          id="my-modal"
        >
          <div className="relative top-44 lg:h-64 sm:h-1/2 my-auto mx-auto p-3 border w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-[#202224]">
                Generate Orders Report
              </h3>
              <div className="mt-4 mb-3">
                <p className="text-sm text-gray-500">
                  Date Range <span className="text-[#FF5454]">*</span>
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-8 items-center mt-1">
                <form className="flex  border-hidden rounded-lg overflow-visible bg-[#EDF8FD]">
                  <input
                    className="px-4 rounded-xl py-2 w-24 bg-[#EDF8FD] outline-none"
                    type="text"
                    placeholder="From"
                  />
                  <div className="m-auto relative lg:-left-2 sm:-left-3  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1 search-icon-container">
                    <Image />
                  </div>
                </form>
                <form className="flex border-hidden rounded-lg overflow-visible bg-[#EDF8FD]">
                  <input
                    className="px-4 rounded-xl py-2 w-24 bg-[#EDF8FD] outline-none"
                    type="text"
                    placeholder="To"
                  />
                  <div className="m-auto relative lg:-left-2 sm:-left-3 text-[#202224]  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1 search-icon-container">
                    <Image />
                  </div>
                </form>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mt-5 items-center px-4 py-3">
                <div>
                  <button
                    onClick={() => {
                      onCancel();
                    }}
                    className="px-4 py-2 bg-[#FF6666] text-white text-base font-medium rounded-md w-36 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Download PDF
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      onCancel();
                    }}
                    className="px-4 py-2 bg-[#54C48D] text-white text-base font-medium rounded-md w-36  shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Download CSV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default Modal;
