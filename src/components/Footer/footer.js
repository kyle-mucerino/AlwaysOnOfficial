import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer py-2 text-center freeman-regular border-t-2 border-black">
      <p className="text-2xl">AlwaysOn, Inc. 2025</p>
      <p className="text-xl">Based in Newport Beach, CA</p>
      <div className="flex justify-center mt-4 text-xl">
        <Link to="/privacy-policy#top" className="mr-4">
          Privacy Policy
        </Link>
        <Link to="/terms#top" className="mr-4">
          Terms of Service
        </Link>
        <Link to="/cookie-policy#top" className="mr-4">
          Cookie Policy
        </Link>
        <Link to="/acceptable-use#top">Acceptable Use Policy</Link>
      </div>
    </footer>
  );
}

export default Footer;
