import React from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  const location = useLocation();
  const HandleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
  
  return (
    <motion.div
      className="nav-main"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.6 }}
    >
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">Home</Link>
          {location.pathname === "/" && <div className="border-cross"></div>}
        </li>
        <li className="nav-li">
          <Link to="/events">Event Schedule</Link>
          {location.pathname === "/events" && (
            <div className="border-cross"></div>
          )}
        </li>
        <li className="nav-li">
          <Link to="/core-team">Core Members</Link>
          {location.pathname === "/core-team" && (
            <div className="border-cross"></div>
          )}
        </li>
        <li className="nav-li">
          <Link to="/voting">Voting Page</Link>
          {location.pathname === "/voting" && (
            <div className="border-cross"></div>
          )}
        </li>
        <li className="nav-li"> 
          
          {!localStorage.getItem("token") ? 
          <>
            <Link to="/register">Login</Link>
            {location.pathname === "/register" && (
              <div className="border-cross"></div>
            )} 
          </>
          :
          <>
            <Link to="/" onClick={HandleLogout}>Logout</Link>
          </>
          }
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
