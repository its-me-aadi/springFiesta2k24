// import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "../styles/coreTeam.css";
import Card from "../components/Card";
import { useState } from "react";
import Navbar from "../components/Navbar";
import coreTeam from "../data/coreTeam.json"

const CoreTeam = () => {
  let rotateArr = [-35,-33,-31,-29,-27,-25,-23,-21,-19,-17,-15,-13,-11,-9, -7, -5, -3, -1, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25 ,27 ,29, 31, 33, 35];

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
    {
      multiplier: 1,

      x: left,
      y: 1650,
    },
    {
      multiplier: -6,
      x: center,
      y: 1650,
    },
    {
      multiplier: 4,
      x: right,
      y: 1650,
    },
    {
      multiplier: -5,
      x: left,
      y: 2050,
    },
    {
      multiplier: 2,
      x: center,
      y: 2050,
    },
    {
      multiplier: -7,
      x: right,
      y: 2050,
    },
    {
      multiplier: 10,
      x: left,
      y: 2450,
    },
    {
      multiplier: -4,
      x: center,
      y: 2450,
    },
    {
      multiplier: 3,
      x: right,
      y: 2450,
    },
    {
      multiplier: -8,
      x: left,
      y: 2850,
    },
    {
      multiplier: 1,
      x: center,
      y: 2850,
    },
    {
      multiplier: -6,
      x: right,
      y: 2850,
    },
    {
      multiplier: 4,
      x: left,
      y: 3250,
    },
    {
      multiplier: -5,
      x: center,
      y: 3250,
    },
    {
      multiplier: 2,
      x: right,
      y: 3250,
    },
    {
      multiplier: -7,
      x: left,
      y: 3650,
    },
    {
      multiplier: 10,
      x: center,
      y: 3650,
    },
    {
      multiplier: -4,
      x: right,
      y: 3650,
    },
    {
      multiplier: 3,
      x: left,
      y: 4050,
    },
    {
      multiplier: -8,
      x: center,
      y: 4050,
    },
    {
      multiplier: 1,

      x: right,
      y: 4450,
    },
    {
      multiplier: -6,
      x: left,
      y: 4450,
    },
    {
      multiplier: 4,
      x: center,
      y: 4450,
    },
    {
      multiplier: -5,
      x: right,
      y: 4850,
    },
    {
      multiplier: 2,
      x: left,
      y: 4850,
    },
    {
      multiplier: -7,
      x: center,
      y: 4850,
    },
    {
      multiplier: 10,
      x: right,
      y: 5250,
    },
    {
      multiplier: -4,
      x: left,
      y: 5250,
    },
    {
      multiplier: 3,
      x: center,
      y: 5250,
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
          {coreTeam.map((member, i) => {
            return (
              <Card
       multiply={scrollYValue<=desiredScrollValue ? rotateArr[i]/4 : finalMotion[i].multiplier}

                scrollYValue={scrollYValue}
                x={finalMotion[i].x}
                y={finalMotion[i].y}
                photo={`${member.image}`}
                name={`${member.name}`}
                designation={`${member.designation}`}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CoreTeam;
