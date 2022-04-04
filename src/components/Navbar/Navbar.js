import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navber-container">
        <CustomLink className="navber-element" to="/">
          HOME
        </CustomLink>
        <CustomLink className="navber-element" to="/reviews">
          REVIEWS
        </CustomLink>
        <CustomLink className="navber-element" to="/dashboard">
          DASHBOARD
        </CustomLink>
        <CustomLink className="navber-element" to="/blogs">
          BLOGS
        </CustomLink>
        <CustomLink className="navber-element" to="/about">
          ABOUT
        </CustomLink>
      </nav>
    </div>
  );
};

export default Navbar;
