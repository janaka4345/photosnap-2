"use client";
import Image from "next/image";
import React from "react";

export default function Card({ title, by, src }) {
  return (
    <div className="relative  lg:min-w-1/4 min-w-[90%] md:min-w-[350px] md:max-w-[350px] h-[70dvh] cursor-grab   mx-auto group-hover:scale-110 group hover:-translate-y-5   rounded-lg dark:bg-gray-800 ">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        className=" w-full h-full rounded-t-lg object-cover object-center "
        src={src}
        alt=""
      />

      <div className="p-5  flex-col   hidden group-hover:flex absolute z-50 bg-gradient-to-t from-black from-15% inset-0">
        <div
          // href="#"
          className="mt-auto"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-200 ">{by}</p>
        <hr className="h-px my-8 bg-gray-200 border-0 " />
        <a
          href="#"
          className="relative w-fit items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="relative inline-flex px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            READ MORE
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </a>
      </div>
      <div className="w-full h-2 hidden rounded-b-lg group-hover:block bg-[linear-gradient(to_top,hsl(28,100%,79%),hsl(329,36%,59%),hsl(229,100%,67%))] absolute -bottom-2"></div>
    </div>
  );
}
