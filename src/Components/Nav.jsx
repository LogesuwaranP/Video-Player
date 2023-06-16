import React from "react";
import "./Nav.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-container">
      <div className="back">
        <IconButton>
          <ArrowBackIosIcon fontSize="medium" onClick={() => navigate(-1)} />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon fontSize="medium" onClick={() => navigate(1)} />
        </IconButton>
      </div>
      <div className="link-container">
        <Link to="/">
          <li>Videos</li>
        </Link>
        {/* <Link to="/music"><li>Music</li></Link> */}
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
