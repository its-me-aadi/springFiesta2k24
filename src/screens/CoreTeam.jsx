// import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "../styles/coreTeam.css";
import Card from "../components/Card";
import { useState } from "react";
import Navbar from "../components/Navbar";

const CoreTeam = () => {
  let rotateArr = [-9, -7, -5, -3, -1, 1, 3, 5, 7, 9];

  let left = -350
  let center = 6
  let right = 350

  let cardMotion = [
    {
      multiplier: 1,

      x: center,
      y: 50,
    },
    {
      multiplier: -6,
      x: left,
      y: 450,
    },
    {
      multiplier: 4,
      x: center,
      y: 450,
    },
    {
      multiplier: -5,
      x: right,
      y: 450,
    },
    {
      multiplier: 2,
      x: left,
      y: 850,
    },
    {
      multiplier: -7,
      x: center,
      y: 850,
    },
    {
      multiplier: 10,
      x: right,
      y: 850,
    },
    {
      multiplier: -4,
      x: left,
      y: 1250,
    },
    {
      multiplier: 3,
      x: center,
      y: 1250,
    },
    {
      multiplier: -8,
      x: right,
      y: 1250,
    },
  ];

  let cardMotionTablet = [
    {
      multiplier: 1,
      x: center,
      y: 5,
    },
    {
      multiplier: -6,
      x: -130,
      y: 350,
    },
    {
      multiplier: 4,
      x: +130,
      y: 350,
    },
    {
      multiplier: -5,
      x: -130,
      y: 650,
    },
    {
      multiplier: 2,
      x: 130,
      y: 650,
    },
    {
      multiplier: -7,
      x: -130,
      y: 950,
    },
    {
      multiplier: 10,
      x: 130,
      y: 950,
    },
    {
      multiplier: -4,
      x: -130,
      y: 1250,
    },
    {
      multiplier: 3,
      x: 130,
      y: 1250,
    },
    {
      multiplier: -8,
      x: 0,
      y: 1550,
    },
  ];

  let cardMotionMobile = [
    {
      multiplier: 1,
      x: 0,
      y: 0,
    },
    {
      multiplier: -6,
      x: 0,
      y: 200,
    },
    {
      multiplier: 4,
      x: 0,
      y: 400,
    },
    {
      multiplier: -5,
      x: 0,
      y: 600,
    },
    {
      multiplier: 2,
      x: 0,
      y: 800,
    },
    {
      multiplier: -7,
      x: 0,
      y: 1000,
    },
    {
      multiplier: 10,
      x: 0,
      y: 1200,
    },
    {
      multiplier: -4,
      x: 0,
      y: 1400,
    },
    {
      multiplier: 3,
      x: 0,
      y: 1600,
    },
    {
      multiplier: -8,
      x: 0,
      y: 1800,
    },
  ];

  const { scrollY } = useScroll();

  const [scrollYValue, setScrollYValue] = useState(scrollY.get());

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

  const deckVariantsTablet = {
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

  const deckVariantsMobile = {
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

  let finalMotion = [];
  let desiredScrollValue = 0;
  let finalDeckvariant;

  if (window.innerWidth > 1150){
    finalMotion = cardMotion
    desiredScrollValue = 250
    finalDeckvariant = deckVariants
    
  }
  else if(window.innerWidth > 480){
    finalMotion = cardMotionTablet
    desiredScrollValue = 100
    finalDeckvariant = deckVariantsTablet
  }
  else {
    finalMotion = cardMotionMobile
    desiredScrollValue = 25
    finalDeckvariant = deckVariantsMobile
  }

  return (
    <>
      <Navbar />
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
          variants={finalDeckvariant}
        >
          {rotateArr.map((i, index) => {
            return (
              <Card
       multiply={scrollYValue<=desiredScrollValue ? i : finalMotion[index].multiplier}

                scrollYValue={scrollYValue}
                x={finalMotion[index].x}
                y={finalMotion[index].y}
                photo={"/images/front.png"}
                name={"yash"}
                designation={"developer"}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CoreTeam;
