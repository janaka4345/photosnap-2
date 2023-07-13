"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function Design() {
  const sectionRefTop = useRef(null);
  const sectionRefBottom = useRef(null);

  const { scrollYProgress: scrollYTop } = useScroll({
    target: sectionRefTop,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYBottom } = useScroll({
    target: sectionRefBottom,
    offset: ["start end", "end start"],
  });

  let rightPane = useTransform(
    scrollYBottom,
    [0, 0.2, 0.5, 0.8, 1],
    ["70%", "0%", "0%", "50%", "70%"]
  );
  let leftPane = useTransform(
    scrollYTop,
    [0, 0.2, 0.5, 0.8, 1],
    ["-70%", "-0%", "0%", "-50%", "-70%"]
  );

  let opacityTop = useTransform(scrollYTop, [0, 0.4, 1], [1, 1, 0]);
  let opacityBottom = useTransform(scrollYBottom, [0, 0.4, 1], [1, 1, 0]);

  return (
    <section className="bg-white dark:bg-gray-900 h-fit ">
      <div
        ref={sectionRefBottom}
        className="grid w-full h-fit  lg:h-[90dvh] gap-2   mx-auto lg:gap-8 xl:gap-0  grid-cols-12 grid-rows-2 md:grid-rows-1"
      >
        <motion.div
          style={{
            // x: leftPane,
            opacity: opacityBottom,
          }}
          className=" lg:mr-auto place-self-center order-last lg:order-first row-span-1 col-start-3 col-end-11  lg:col-start-2 lg:col-end-6"
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
              DESIGNED
            </motion.span>{" "}
            FOR <br />
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
              EVERYONE
            </motion.span>{" "}
          </h1>
          <p className=" mb-6 text-base font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
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
        <motion.div
          ref={sectionRefTop}
          style={{
            // x: rightPane,
            opacity: opacityTop,
          }}
          className="col-start-1 col-end-13 row-span-1 lg:mt-0  lg:col-start-6 lg:col-end-13 lg:flex"
        >
          <Image
            priority
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            src="/assets/designed-for-everyone.jpg"
            className="w-full h-full object-cover object-top"
            alt="photosnap logo"
          />
        </motion.div>
      </div>
    </section>
  );
}
