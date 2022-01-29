import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Past Orders</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <Link to="/contactForm">Contact Us</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav">
          <li className="">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="">
            <Link to="/login">Login</Link>
          </li>
          <li className="">
            <Link to="/contactForm">Contact</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="">
            <img src="client\public\AU.png" alt="" />
          </span>
          ART <em>underground</em>
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
