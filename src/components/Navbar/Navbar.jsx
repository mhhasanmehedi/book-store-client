import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Search from "./Search";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img
            src={Logo}
            width="150px"
            className="object-contain"
            alt="LWS Logo"
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`${
              pathname === "/books" && "font-semibold"
            } cursor-pointer`}
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link
            to="/books/add"
            className={`${
              pathname === "/books/add" ? "font-semibold" : ""
            } cursor-pointer`}
            id="lws-addBook"
          >
            <li>Add Book</li>
          </Link>
        </ul>

        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
