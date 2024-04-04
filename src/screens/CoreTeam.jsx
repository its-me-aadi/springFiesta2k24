// import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "../styles/coreTeam.css";
import Card from "../components/Card";
import { useState } from "react";

const CoreTeam = () => {
  let rotateArr = [-9, -7, -5, -3, -1, 1, 3, 5, 7, 9];

  let left = -350
  let center = 0
  let right = 350

  let cardMotion = [
    {
      multiplier: 0, 
      x: center,
      y: 50,
    },
    {
      multiplier: -6,
      x: left,
      y: 450,
    },
    {
      multiplier: 3,
      x: center,
      y: 450,
    },
    {
      multiplier: -4,
      x: right,
      y: 450,
    },
    {
      multiplier: -9,
      x: left,
      y: 850,
    },
    {
      multiplier: -9,
      x: center,
      y: 850,
    },
    {
      multiplier: -9,
      x: right,
      y: 850,
    },
    {
      multiplier: -9,
      x: left,
      y: 1250,
    },
    {
      multiplier: -9,
      x: center,
      y: 1250,
    },
    {
      multiplier: -9,
      x: right,
      y: 1250,
    },
  ];

  const { scrollY } = useScroll();

  const [scrollYValue, setScrollYValue] = useState(scrollY.get());
  // const [firstRun, setFirstRun] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYValue(latest);
  });

  const deckVariants = {
    first: {
      y: 0,
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
        staggerChildren: 5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="heading"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1>Meet The Team</h1>
      </motion.div>

      <motion.div
        className="bg-wrapper"
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="card-bg" />

        <motion.div
          className="card-wrapper"
          initial={{ y: 400 }}
          animate={"first"}
          variants={deckVariants}
        >
          {rotateArr.map((i, index) => {
            return (
              <Card
                multiply={scrollYValue<250 ? i : cardMotion[index].multiplier}
                scrollYValue={scrollYValue}
                x={cardMotion[index].x}
                y={cardMotion[index].y}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CoreTeam;
