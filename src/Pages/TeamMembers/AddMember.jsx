import React, { useState, useRef } from "react";

import img1 from "./img1.png";

const AddMember = ({ handleData }) => {
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  const [gender, setGender] = useState("");

  const submitHandle = (event) => {
    event.preventDefault();

    console.log();
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      position.length > 0 &&
      image !== null > 0
    ) {
      const addAllMemberData = {
        key: Math.random().toLocaleString(),
        img: URL.createObjectURL(image),
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
        email: email,
        title: position.charAt(0).toUpperCase() + position.slice(1),
      };
      handleData(addAllMemberData);
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPosition("");
    setCity("");
    setImage("");
  };
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
      <div className="border-t border-gray-200 w-full px-8 py-4 ">
        <div className="flex justify-between my-5">
          <div>
            <h1 className="font-bold text-xl">Add New Member</h1>
          </div>
        </div>
      </div>

      <form onSubmit={submitHandle} className="flex flex-col justify-center ">
        <div className="text-center block w-full">
          <div
            className="bg-[#EDF8FD] text-center w-20 h-20 rounded-full items-center m-auto"
            onClick={handleImageClick}
          >
            <input
              type="file"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={handleImageChange}
            />
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="m-auto object-fill w-full h-full rounded-full"
              />
            ) : (
              <img src={img1} alt="" className="w-8 m-auto pt-6" />
            )}
          </div>
          <div>
            <span
              className="text-[#008ECC] mt-5 cursor-pointer"
              onClick={handleImageClick}
            >
              Upload Photo
            </span>
          </div>
        </div>
        <div className="flex justify-center flex-wrap items-start mt-10 flex-grow">
          <div className="flex flex-wrap gap-10 w-full justify-center">
            <div className="block w-1/3">
              <h2>First Name</h2>
              <div className="flex my-2 px-3 items-center border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
                <input
                  type="text"
                  className=" py-3 w-full outline-none bg-[#EDF8FD] "
                  placeholder="Enter your first name"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  value={firstName}
                />
              </div>
            </div>
            <div className="block w-1/3">
              <h2>Last Name</h2>
              <div className="flex my-2 px-3 items-center border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
                <input
                  type="text"
                  className="py-3  w-full outline-none bg-[#EDF8FD] "
                  placeholder="Enter your last name"
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  value={lastName}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap items-start mt-10 flex-grow">
          <div className="flex flex-wrap gap-10 w-full justify-center">
            <div className="block w-1/3">
              <h2>Email</h2>
              <div className="flex my-2 px-3 items-center border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
                <input
                  type="email"
                  name="email"
                  className=" py-3 w-full outline-none bg-[#EDF8FD] "
                  placeholder="Enter email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                />
              </div>
            </div>
            <div className="block w-1/3">
              <h2>City</h2>
              <div className="flex my-2 px-3 items-center border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
                <input
                  type="text"
                  className="py-3  w-full outline-none bg-[#EDF8FD] "
                  placeholder="Enter city"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  value={city}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap items-start mt-10 flex-grow">
          <div className="flex flex-wrap gap-10 w-full justify-center">
            <div className="block w-1/3">
              <h2>Position</h2>
              <div className="flex my-2 px-3 items-center border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
                <input
                  type="position"
                  name="position"
                  className=" py-3 w-full outline-none bg-[#EDF8FD] "
                  placeholder="Enter position"
                  onChange={(event) => {
                    setPosition(event.target.value);
                  }}
                  value={position}
                />
              </div>
            </div>
            <div className="block w-1/3">
              <h2>Gender</h2>
              <div className="flex my-2 px-3  border-2 border-hidden rounded-lg overflow-hidden bg-[#EDF8FD]">
                <select
                  onChange={(event) => {
                    setGender(event.target.value);
                  }}
                  value={gender}
                  className="ui dropdown bg-[#EDF8FD] my-3 flex justify-between outline-none w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 m-auto my-5">
          <button
            type="submit"
            className="bg-[#008ECC] hover:bg-[#008ECC] text-white py-3 rounded-lg w-full"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddMember;
