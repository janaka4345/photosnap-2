"use client";
import React, { useRef, useEffect, useState } from "react";
import Card from "../custom/Card";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Carasol() {
  const [width, setWidth] = useState(0);
  const carasol = useRef();

  const { scrollYProgress } = useScroll({
    target: carasol,
    offset: ["start end", "end start"],
  });

  // const spring = useSpring(scrollYProgress, {
  //   stiffness: 60,
  //   damping: 10,
  // });

  let x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  useEffect(() => {
    setWidth(carasol.current.scrollWidth - carasol.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.section
        id="stories"
        whileTap={{ cursor: "grabbing" }}
        ref={carasol}
        className="flex cursor-grab overflow-hidden gap-4 lg:gap-2 flex-row outline-none"
      >
        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{ right: 0, left: -width }}
          className="flex w-fit gap-4 p-5"
        >
          <Card
            title="The Mountains"
            by="by John Appleaseed"
            src="/assets/stories/mountains.jpg"
          />

          <Card
            title="Sunset Cityscapes"
            by="by Benjamin Cruz"
            src="/assets/stories/cityscapes.jpg"
          />
          <Card
            title="18 Days Voyage"
            by="by Alexei Borodin"
            src="/assets/stories/18-days-voyage.jpg"
          />
          <Card
            title="Architecturals"
            by="by Samantha Brooke"
            src="/assets/stories/architecturals.jpg"
          />
          <Card
            title="Rural Beauty"
            by="by  Andrea Garibay"
            src="/assets/stories/rural-beauty.jpg"
          />
          <Card
            title="Streets of Bali"
            by="by stayhereforu"
            src="/assets/stories/street.jpg"
          />
          <Card
            title="Nature"
            by="by Jean-Daniel Francoeur"
            src="/assets/stories/nature.jpg"
          />
        </motion.div>
      </motion.section>
    </>
  );
}
