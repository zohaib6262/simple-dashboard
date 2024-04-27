import React, { useState, useRef } from "react";
import Input from "./Header/Input";
import { Image, Calendar2 } from "react-bootstrap-icons/dist";
const Settings = () => {
  const [image, setImage] = useState("");
  const inputRef = useRef();
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    console.log(event.target.files[0]);
    const imageSize = event.target.files[0].size;
    console.log(imageSize / 1048576);
    if (imageSize / 1048576 > 0) {
      setImage(event.target.files[0]);
    }
  };
  return (
    <>
      <div className="flex columns-8 gap-6 px-8 py-4 ">
        <Input />
      </div>

      <div className="border-t border-gray-300 w-full px-8 py-4">
        <div>
          <h1 className=" text-2xl">Settings</h1>
        </div>
        <div>
          {/* Promo Code */}
          <div className="bg-white rounded-xl p-8 my-6 flex flex-wrap gap-10">
            <div className="w-60 h-48 mr-8">
              <h2 className="text-2xl text-left">Create Promo Code</h2>
              <span className="text-gray-400">
                Create promotional campaigns
              </span>
            </div>

            <div className="flex-grow ">
              <h2 className="text-2xl ">Banner Information</h2>
              <span className="text-gray-400 my-2">Banner Image</span>
              <div
                className={`border-2 border-dashed rounded-md p-4 my-2 h-9/12`}
              >
                <div className="flex flex-col items-center justify-center mb-4">
                  <Image className="w-10 h-10 mb-4" />
                  <p className="text-center text-gray-500 text-sm">
                    Drop your image here or,{" "}
                    <input
                      type="file"
                      style={{ display: "none" }}
                      ref={inputRef}
                      onChange={handleImageChange}
                    />
                    <span
                      className="text-sky-600 cursor-pointer"
                      onClick={handleImageClick}
                    >
                      browse or drag and drop.
                    </span>
                  </p>
                </div>

                <div className="text-center text-gray-500 text-sm">
                  <p> 1600 x 1200 (4:3) recommended, up to 10MB each</p>{" "}
                </div>
                <div>
                  {image ? <img src={URL.createObjectURL(image)} alt="" /> : ""}
                </div>
              </div>
              <div className="flex flex-col justify-center items-start ">
                <div className="flex flex-wrap gap-10 ">
                  <div>
                    <h2>Start Date</h2>
                    <form className="flex my-2 px-6 sm:flex-row items-center border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
                      <input
                        type="text"
                        className=" py-4 w-1/3 sm:w-auto outline-none bg-[#EDF8FD]"
                      />
                    </form>
                  </div>
                  <div>
                    <h2>Expiration date</h2>
                    <form className="flex my-2 px-5 sm:flex-row items-center border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
                      <input
                        type="text"
                        className="py-4 w-1/3 sm:w-auto outline-none bg-[#EDF8FD]"
                      />
                    </form>
                  </div>
                </div>
                <div className="w-full m-auto my-4">
                  <button className="bg-sky-600  hover:bg-sky-700 text-white px-4 py-3 rounded-lg w-36 sm:px-2 lg:px-2 md:px-2 r">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-white rounded-xl p-8 my-6 flex-wrap gap-10">
          <div className="w-60 h-48 mr-8">
            <h2 className="text-2xl text-left">Create Notifications</h2>
            <span className="text-gray-400">
              You can create notifications here and will send it to users
            </span>
          </div>
          <div className="flex-grow">
            <div>
              <h2 className="text-2xl">Create Notification</h2>
            </div>
            <span className="text-gray-400 my-2">Banner Image</span>

            <div className="w-full">
              <form className="w-full mt-6">
                <div className="mb-6 block">
                  <label htmlFor="title" className="font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="mt-1 px-2 rounded-md shadow-sm bg-[#EDF8FD] h-12 outline-none block w-full"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="mt-1 pl-2 block rounded-md shadow-sm bg-[#EDF8FD] outline-none h-32 w-full"
                    rows="6"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="target audience"
                    className="font-medium text-gray-700"
                  >
                    Target Audience
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="mt-1 pl-2 block rounded-md shadow-sm bg-[#EDF8FD] h-12 outline-none w-1/2"
                  />
                </div>
                <div className="w-1/4">
                  <button className="bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg w-full">
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
