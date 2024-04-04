import React from "react";
import { logo } from "../assets";
import { IoEyeOff } from "react-icons/io5";

const Dash = () => {
  return (
    <section className="bg-primary">
      <div className="flex p-3 items-center justify-between mt-16">
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

      <div className="flex justify-center m-4 my-10 space-x-8">
        <div className="bg-white border p-10 rounded-lg">
          <span>Available Balance</span>
          <hr className="mt-2" />

          <p>Available Balance</p>
        </div>

        <div className="bg-white border p-10 rounded-lg">
          <span>Spent Today</span>
          <hr  className="mt-2" />

          <p>Available Balance</p>
        </div>
      </div>
    </section>
  );
};

export default Dash;
