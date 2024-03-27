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
            Card
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle docs-creator"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://images.pexels.com/photos/20449623/pexels-photo-20449623/free-photo-of-a-real-eye-catching-leopard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>user</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item docs-creator" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item docs-creator" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item docs-creator" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />i am
          </li>
          <li>
            <a className="dropdown-item docs-creator" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
