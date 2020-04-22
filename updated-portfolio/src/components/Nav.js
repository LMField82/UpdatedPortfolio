import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  // This allows the component to check the route any time the user uses a link to navigate.
  // const location = useLocation();

  return (
      <div className="header" role="navigation">
      <h1 className="name">Lindsay Field</h1>
        <ul className="nav navbar-expand-md justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
</div>
  );
}

export default Nav;








