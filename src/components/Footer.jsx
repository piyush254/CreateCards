import React from "react";
import "../App.css";
import "../App.css"
function Footer() {
  return (
    <div className="py-4 my-0 border-top px-4 foot text-bg-dark ">
      <p className="alignmentoftext">© 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <a className="link-body-emphasis docs-creator" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#twitter"></use>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis docs-creator" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#instagram"></use>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis docs-creator" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
