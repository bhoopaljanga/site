"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react"; 

const ContactButton = () => {  
  const showWidget = () => {
    (window as any).Tawk_API.maximize();
    }
  return (
    <>
       
                  <button  onClick={() => showWidget()}
                    aria-label="send message"
                    className="inline-flex items-center bg-primary gap-2.5 rounded-full px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Contact Us
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>  
    </>
  );
};

export default ContactButton;
