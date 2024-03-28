import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import "../App.css"


function Sidebar({ item, setItem }) {
  const [items, setItems] = useState(item);
  const optionChanger = (e) => {
    setItem(e.currentTarget.id);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 mb-10 text-bg-dark"
      style={{ width: "180px", minHeight: "80vh", zIndex: "5" }}
    >
      <a
        href="/"
        className="d-flex align-items-center text-white text-decoration-none docs-creator"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Create Post</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={optionChanger} id="Home">
          <a
            href="#"
            className={`nav-link text-white docs-creator 
        ${item == "Home" && "active"}
        `}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            <IoMdHome className="home" />
            Home
          </a>
        </li>
        <li id="Create Card" onClick={optionChanger}>
          <a
            href="#"
            className={`nav-link text-white docs-creator 
        ${item == "Create Card" && "active"}
        `}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create
            Post
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
