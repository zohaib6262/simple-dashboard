import React, { useState } from "react";
import Input from "./Header/Input";
import { Image, Calendar2 } from "react-bootstrap-icons/dist";
const Settings = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleImageUpload = (file) => {
    // Handle image upload logic here
    console.log("Image dropped:", file);
  };
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-4 ">
        <Input />
      </div>

      <div className="border-t border-gray-300 w-full px-8 py-4">
        <h1 className=" text-2xl">Settings</h1>
        <div className="bg-white rounded-xl p-8 my-6">
          {/* Promo Code */}
          <div className="flex justify-between flex-wrap ">
            <div className="w-1/3 h-48">
              <h2 className="text-2xl text-left">Create Promo Code</h2>
              <span className="text-gray-400">
                Create promotional campaigns
              </span>
            </div>
            <div className="w-2/4">
              <h2 className="text-2xl ">Banner Information</h2>
              <span className="text-gray-400 my-2">Banner Image</span>
              <div
                className={`border-2 border-dashed rounded-md p-4 my-2 h-9/12${
                  dragging ? "border-blue-500" : "border-gray-300"
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center mb-4">
                  <Image className="w-10 h-10 mb-4" />
                  <p className="text-center text-gray-500 text-sm">
                    Drop your image here or,{" "}
                    <a href="" className="text-sky-600">
                      browse or drag and drop.
                    </a>
                  </p>
                </div>

                <p className="text-center text-gray-500 text-sm">
                  1600 x 1200 (4:3) recommended, up to 10MB each
                </p>
              </div>
              <div className="flex justify-between flex-wrap">
                <div>
                  <h2>Start Date</h2>
                  <form className="flex my-2 px-6 sm:flex-row items-center border-2 border-hidden rounded-lg overflow-hidden bg-sky-100">
                    <input
                      type="text"
                      className="px-8 py-4 w-1/3 sm:w-auto outline-none bg-sky-100"
                    />
                    <div className="mt-2  ">
                      <Calendar2 className="h-10 w-8" />
                    </div>
                  </form>
                </div>
                <div>
                  <h2>Expiration date</h2>
                  <form className="flex my-2 px-5 sm:flex-row items-center border-2 border-hidden rounded-lg overflow-hidden bg-sky-100">
                    <input
                      type="text"
                      className="py-4 px-8 w-1/3 sm:w-auto outline-none bg-sky-100"
                    />
                    <div className="mt-2 ">
                      <Calendar2 className="h-10 w-8" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="lg:text-center my-4">
                <button className="bg-sky-600  hover:bg-sky-700 text-white px-4 py-3 rounded-lg w-36 sm:px-2 lg:px-2 md:px-2">
                  Create
                </button>
              </div>
            </div>
          </div>

          {/* Create Notification code */}
          <div className="flex justify-between flex-wrap mt-10">
            <div className="w-1/3 h-48">
              <h2 className="text-2xl text-left">Create Notifications</h2>
              <span className="text-gray-400">
                You can create notifications here and will send it to users
              </span>
            </div>
            <div className="w-2/4">
              <h2 className="text-2xl ">Create Notification</h2>
              <span className="text-gray-400 my-2">Banner Image</span>

              <form className="w-full mt-6">
                <div className="mb-6">
                  <label htmlFor="title" className=" font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="mt-1 block w-9/12 rounded-md shadow-sm bg-sky-100 h-12 outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className=" font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="mt-1 block w-9/12 rounded-md shadow-sm bg-sky-100 outline-none h-32"
                    rows="6"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="target audience"
                    className=" font-medium text-gray-700"
                  >
                    Target Audience
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="mt-1 block w-1/3 rounded-md shadow-sm bg-sky-100 h-12 outline-none"
                  />
                </div>
                <div className="lg:text-center sm:text-start">
                  <button className="bg-sky-600  hover:bg-sky-700 text-white py-3 rounded-lg w-36">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
