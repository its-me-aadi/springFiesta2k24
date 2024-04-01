import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/coreTeamCard.css";

import back from "../images/back.png";
import front from "../images/front.png";

const Card = ({ multiply, scrollYValue, x ,y }) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const variant = {
    shuffle: {
      rotate: multiply * 2 + "deg",
      x: multiply * 25,
      y: Math.abs(multiply * 5),
      transition: {
        delay: 1,
        ease: "easeOut",
        duration: 0.4,
      },
    },
    pack: {
      rotate: multiply + "deg",
      x: x,
      y: y,
      scale:1.1,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    }
  };

  return (
    <motion.div
      className="flip-card"
      onClick={handleFlip}
      whileHover={{ scale: 1.2 }}
      animate={scrollYValue>250 ? "pack" : "shuffle"}
      // animate='shuffle'
      variants={variant}
      // transition={{ delay: 1, ease: "easeOut", duration: 1 }}
    >
      <motion.div
        className="flip-card-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.2, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="flip-card-front" style={{ backgroundColor: "white" }}>
          <div
            className="image"
            style={{ backgroundImage: `url(${back})` }}
          ></div>
        </div>

        <div className="flip-card-back" style={{ backgroundColor: "white" }}>
          <div
            className="image"
            style={{ backgroundImage: `url(${front})` }}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
