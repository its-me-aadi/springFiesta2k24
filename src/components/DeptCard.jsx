import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/coreTeamCard.css";

import back from "../images/back.png";
import front from "../images/front.png";

const Card = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <motion.div
      className="flip-card-dept"
      onClick={handleFlip}
      whileHover={{ scale: 1.1 }}
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
            className="mem-image"
            style={{ backgroundImage: `url("../images/back.png")` }}
          >
              <h2>Name</h2>
              <h4>Designation</h4>
            </div>
          </div>

        <div className="flip-card-back" style={{ backgroundColor: "white" }}>
          <div
            className="mem-image"
            style={{ backgroundImage: `url(${front})` }}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
};
  
export default Card;
