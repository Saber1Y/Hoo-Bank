import React, { useState } from "react";
import { logo } from "../assets";
import { IoEyeOff, IoEye } from "react-icons/io5";

const Dash = () => {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const toggleVisibility2 = () => {
    setVisible2(!visible2);
  };

  return (
    <section className="bg-primary h-screen">
      <div className="flex p-3 items-center justify-between">
        <div className="">
          <img src={logo} alt="" className="" />
        </div>

        <div>
          <button
            type="button"
            className="text-dark bg-[#a8eff2] hover:bg-[#a8eff2]/90  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#a8eff2]/55 me-2 mb-2"
          >
            Money In
          </button>
          <button
            type="button"
            className="text-dark bg-[#a8eff2] hover:bg-[#a8eff2]/90  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#a8eff2]/55 me-2 mb-2"
          >
            Money Out
          </button>
        </div>

        <div className="">UserProfile</div>
      </div>

      <div className="flex justify-center m-4 my-10 space-x-3">
        <div className="bg-white border p-10 rounded-lg">
          <span className=" text-black text-3xl font-poppins">
            Available Balance
          </span>
          <hr className="mt-2 border" />

          <div className="flex justify-between items-center">
            <span onClick={toggleVisibility}>
              {visible ? (
                <IoEyeOff className="text-2xl" />
              ) : (
                <IoEye className="text-2xl" />
              )}
            </span>
            <p>
              {visible ? (
                <span className="font-poppins text-2xl">1000</span>
              ) : (
                <span className="text-3xl">*****</span>
              )}
            </p>
          </div>
        </div>

        <div className="bg-white border p-10 rounded-lg">
          <span className=" text-black text-3xl font-poppins">
            Available Balance
          </span>
          <hr className="mt-2 border" />

          <div className="flex justify-between items-center">
            <span onClick={toggleVisibility2}>
              {visible2 ? (
                <IoEyeOff className="text-2xl" />
              ) : (
                <IoEye className="text-2xl" />
              )}
            </span>
            <p>
              {visible2 ? (
                <span className="font-poppins text-2xl">1000</span>
              ) : (
                <span className="text-3xl">*****</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dash;
