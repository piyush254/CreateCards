import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import "./Header.css";

function Header({ item, setItem }) {
  const optionChanger = (e) => {
    setItem(e.currentTarget.id);
  };

  return (
    <>
      <header className="custom-header">
        <ul className="custom-nav">
          <li className="custom-nav-item" onClick={optionChanger} id="Home">
            <a
              href="#"
              className={`custom-nav-link ${item === "Home" && "active"}`}
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="custom-nav-item" id="Create Card" onClick={optionChanger}>
            <a
              href="#"
              className={`custom-nav-link ${item === "Create Card" && "active"}`}
            >
              Create Post
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
