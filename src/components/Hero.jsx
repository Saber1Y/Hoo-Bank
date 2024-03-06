import React from "react";
import style from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { Link } from "react-router-dom";

const Hero = () => (
  <>
    <section
      id="home"
      className={`flex md:flex-row flex-col w-full ${style.paddingY}`}
    >
      <div
        className={`flex-1 ${style.flexStart}
         flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className="flex flex-row items-center py-[6px] 
          px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${style.paragraph} ml-2`}>
            <span className="text-white">20$ {""}</span>
            DISCOUNT FOR {""}
            <span className="text-white">1 MONTH {""}</span>
            ACCOUNT
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold
             ss:text-[73px] text-[52px] text-white ss:leading-[100px] leading-[75px]"
          >
            The Next <br className="sm:block hiddens" />{" "}
            <span className="text-gradient">Generation </span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to="/SignForm">
              <GetStarted />
            </Link>
          </div>
        </div>

        <h1
          className="flex-1 font-poppins font-semibold
          ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"
        >
          Payment Method
        </h1>
        <p className={`${style.paragraph} max-w-[420px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div>
        <img src={robot} alt="robot" className="w-[100%] z-[5] relative" />

        {/* <div className='absolute w-[30%] h-[40%] z-[0] top-0 pink__gradient'>
          </div>
          <div className='absolute w-[80%] h-[80%] z-[1] top-0 white__gradient rounded-full bottom-40'>
          </div>
          <div className='absolute w-[50%] h-[50%] z-[0] right-20 bottom-20 blue__gradient'>
          </div> */}
      </div>

      <div className={`ss:hidden ${style.flexStart}`}>
        <GetStarted />
      </div>
    </section>
  </>
);

export default Hero;
