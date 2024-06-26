import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="hoobank" className="w-25 h-20 flex flex-start" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] flex flex-row justify-between flex-wrap mt-10 md:mt-0">
        {footerLinks.map((footerlink, index) => (
          <div key={index} className="flex flex-col ss:my-0my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-white text-[18px] leading-[27px]">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal text-[16px] text-dimWhite hover:text-secondary 
                    cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    } `}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex w-[full] justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-medium text-white text-[18px] leading-[27px]">
        Copyright 2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((media, index) => (
          <div key={media.id}>
            <img
              src="{media.icon}"
              alt="{media.id}"
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } `}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
