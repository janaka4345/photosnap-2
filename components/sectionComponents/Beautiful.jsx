"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function Beautiful() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });

  let rightPane = useTransform(
    spring,
    [0, 0.2, 0.5, 0.8, 1],
    ["70%", "50%", "0%", "50%", "70%"]
  );
  let leftPane = useTransform(
    spring,
    [0, 0.2, 0.5, 0.8, 1],
    ["-70%", "-50%", "0%", "-50%", "-70%"]
  );
  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="grid w-full h-fit  lg:h-[90dvh] gap-2  mx-auto lg:gap-8 xl:gap-0  grid-cols-12 grid-rows-2 md:grid-rows-1">
        <motion.div
          style={{ x: leftPane }}
          className="col-start-1 col-end-13 row-span-1 lg:mt-0  lg:col-start-1 lg:col-end-7 "
        >
          <Image
            quality={100}
            width={0}
            height={0}
            sizes="(min-width: 768px) 50vw, 100vw"
            src="/assets/beautiful-stories.jpg"
            className="w-full h-full object-cover object-center"
            alt="photosnap logo"
          />
        </motion.div>
        <motion.div
          className=" lg:mr-auto place-self-center col-start-3 col-end-11  lg:row-span-1  lg:col-start-8 lg:col-end-13"
          style={{
            x: rightPane,
          }}
        >
          <h1 className="mb-4  text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
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
              BEAUTIFUL <br /> STORIES
            </motion.span>{" "}
            <br />
            EVERY TIME
          </h1>

          <p className=" mb-6 text-base font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Photosnap is a platform for photographers and visual <br />
            storytellers. We make it easy to share photos, tell <br /> stories
            and connect with others.
          </p>

          <button className="relative  items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative inline-flex px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              VIEW THE STORIES
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
        </motion.div>
      </div>
    </section>
  );
}
