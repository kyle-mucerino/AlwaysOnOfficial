import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlatformSubmenuOpen, setIsPlatformSubmenuOpen] = useState(false);
  const [isAboutSubmenuOpen, setIsAboutSubmenuOpen] = useState(false);

  const toggleSubmenu = (submenuSetter, isOpen) => {
    submenuSetter(!isOpen);
  };

  return (
    <div>
      {/* Background Blur Overlay */}
      {isMobileMenuOpen && <div className="blur-overlay"></div>}

      {/* Mobile Navigation */}
      <header className="h-24 flex md:hidden relative z-20">
        <nav className="w-full px-4 flex items-center justify-between">
          <NavLink to="/" className="fading">
            <img
              className="h-16 py-2"
              src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
              alt="Logo"
            />
          </NavLink>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black text-3xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </nav>
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="space-y-4 p-4 uppercase font-semibold">
              <li>
                <button
                  onClick={() =>
                    toggleSubmenu(
                      setIsPlatformSubmenuOpen,
                      isPlatformSubmenuOpen
                    )
                  }
                  className="w-full text-left flex items-center justify-between"
                >
                  Platform <span>{isPlatformSubmenuOpen ? "▼" : "▶"}</span>
                </button>
                {isPlatformSubmenuOpen && (
                  <ul className="ml-4 text-sm space-y-2">
                    <li className="mt-8">
                      <NavLink to="/chatbot">AI Chatbot + Analytics</NavLink>
                    </li>
                    <li>
                      <NavLink to="/survey-tool">Survey Tool</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us-routing">
                        Contact Us Routing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/professional-services">
                        Professional Services
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() =>
                    toggleSubmenu(setIsAboutSubmenuOpen, isAboutSubmenuOpen)
                  }
                  className="w-full text-left flex items-center justify-between"
                >
                  About <span>{isAboutSubmenuOpen ? "▼" : "▶"}</span>
                </button>
                {isAboutSubmenuOpen && (
                  <ul className="ml-4 text-sm space-y-2">
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
                )}
              </li>
              <li>
                <button className="w-full button uppercase rounded-lg px-4 py-2 text-xl">
                  Schedule a demo
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Desktop Navigation */}
      <header className="shadow-lg h-24 hidden md:flex">
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
                <span>Platform</span> <i className="fa-solid fa-caret-down"></i>
              </NavLink>
              <ul className="submenu rounded-lg">
                <li>
                  <NavLink to="/chatbot">AI Chatbot + Analytics</NavLink>
                </li>
                <li>
                  <NavLink to="/survey-tool">Survey Tool</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us-routing">Contact Us Routing</NavLink>
                </li>
                <li>
                  <NavLink to="/professional-services">
                    Professional Services
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="p-3 xl:p-6 relative">
              <NavLink to="/company" activeClassName="active">
                <span>About</span> <i className="fa-solid fa-caret-down"></i>
              </NavLink>
              <ul className="submenu rounded-lg">
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
          </ul>
          <button className="w-1/5 uppercase button ml-auto rounded-lg font-bold px-4 xl:px-6 py-2 xl:py-3 text-black text-xl">
            <span>Schedule a demo</span>
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
