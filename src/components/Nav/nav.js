import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <header className="shadow-lg h-24 hidden md:flex border-b-2 border-black">
      <nav className="header-links font-semibold text-base lg:text-lg flex items-center w-full px-4 lg:px-6 xl:px-8">
        <NavLink to="/" className="mr-auto px-4 lg:px-6 xl:px-8 fading">
          <img
            className="h-24 py-2"
            src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
            alt="Logo"
          />
        </NavLink>
        <ul className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8 mx-auto uppercase">
          <li className="p-3 xl:p-6 relative">
            <NavLink exact to="/" activeClassName="active">
              <span>Platform</span>
            </NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/chatbot">AI Chatbot</NavLink>
              </li>
              <li>
                <NavLink to="/survey-tool">Survey Tool</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us-routing">Contact Us Routing</NavLink>
              </li>
              <li>
                <NavLink to="/professional-services">Professional Services</NavLink>
              </li>
            </ul>
          </li>
          <li className="p-3 xl:p-6 relative">
            <NavLink to="/about" activeClassName="active">
              <span>About</span>
            </NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/company">Company</NavLink>
              </li>
              <li>
                <NavLink to="/media">Media & Materials</NavLink>
              </li>
              <li>
                <NavLink to="/security-accessibility">
                  Security/Accessibility
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
          </li>
          <li className="p-3 xl:p-6 relative">
            <NavLink to="/contact" activeClassName="active">
              <span>Contact Us</span>
            </NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/calendly">Link to Calendly</NavLink>
              </li>
            </ul>
          </li>
          {/* <li className="p-3 xl:p-6 relative">
            <NavLink to="/login" activeClassName="active">
              <span>Login</span>
            </NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/platform-login">Link to Platform Login</NavLink>
              </li>
            </ul>
          </li> */}
        </ul>
        <button className="w-1/5 uppercase button ml-auto rounded-lg font-bold px-4 xl:px-6 py-2 xl:py-3  text-black text-xl">
          <span>Schedule a demo</span>
        </button>
      </nav>
    </header>
  );
}

export default Nav;
