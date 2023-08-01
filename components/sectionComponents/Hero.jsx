"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });
  let rightPane = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0%", "0%", "100%"]
  );
  let leftPane = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["-0%", "-0%", "-100%"]
  );
  let opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.5, 0]);

  return (
    <motion.section
      initial={{ y: "-200px", opacity: 0 }}
      animate={{
        y: "0px",
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      id="hero"
      ref={sectionRef}
      className="bg-white dark:bg-gray-900 border mt-12"
    >
      <div className="grid  w-full h-fit  lg:h-[100dvh] gap-2  mx-auto lg:gap-8 xl:gap-0  grid-cols-12 grid-rows-2 md:grid-rows-1">
        <motion.div
          className="relative lg:mr-auto place-self-center order-last row-span-1 lg:order-first  col-start-3 col-end-11  lg:col-start-2 lg:col-end-6"
          style={{
            // x: leftPane,
            opacity,
          }}
        >
          <h1 className="mb-4  text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
            <motion.span
              className="text-transparent inline-block bg-clip-text bg-[length:100px_100px] bg-[linear-gradient(to_top,hsl(28,100%,79%),hsl(329,36%,59%),hsl(229,100%,67%))]"
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{
                backgroundPosition: "100% 100%",
                transition: {
                  duration: 1,
                  repeatType: "reverse",
                  repeat: Infinity,
                },
              }}
            >
              CREATE
            </motion.span>{" "}
            AND <br />
            SHARE YOUR
            <br />
            <motion.span
              className="text-transparent inline-block bg-clip-text bg-[length:200px_200px] bg-[linear-gradient(to_top,hsl(28,100%,79%),hsl(329,36%,59%),hsl(229,100%,67%))]"
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{
                backgroundPosition: "100% 100%",
                transition: {
                  duration: 1,
                  repeatType: "reverse",
                  repeat: Infinity,
                },
              }}
            >
              PHOTO STORIES.
            </motion.span>{" "}
          </h1>
          <p className=" mb-6 text-base min-w-fit font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Photosnap is for photographers and visual <br />
            storytellers. We make it easy to share photos, tell stories and
            connect with others.
          </p>

          <button className="relative  items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative inline-flex px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get An Invite
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
          </button>
          <div className="lg:h-full h-2 w-full  lg:w-2 bg-[linear-gradient(to_top,hsl(28,100%,79%),hsl(329,36%,59%),hsl(229,100%,67%))] absolute -top-2 left-0 lg:-left-12 "></div>
        </motion.div>
        <motion.div
          className="col-start-1 col-end-13 row-span-1 lg:mt-0  lg:col-start-6 lg:col-end-13 lg:flex"
          style={{
            // x: rightPane,
            opacity,
          }}
        >
          <Image
            priority
            quality={100}
            width={0}
            height={0}
            sizes="(min-width: 768px) 50vw, 100vw"
            src="/assets/create-and-share.jpg"
            className="w-full h-full object-cover object-center"
            alt="photosnap logo"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
