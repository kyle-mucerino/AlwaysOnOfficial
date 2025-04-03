import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer py-2 text-center freeman-regular border-t-2 border-black">
      <p className="text-2xl">AlwaysOn, Inc. 2025</p>
      <p className="text-xl">Based in Newport Beach, CA</p>
      <div className="flex justify-center mt-4 text-xl">
        <button
          onClick={() => (window.location.href = "/privacy-policy")}
          className="mr-4"
        >
          Privacy Policy
        </button>
        <button
          onClick={() => (window.location.href = "/terms")}
          className="mr-4"
        >
          Terms of Service
        </button>
        <button
          onClick={() => (window.location.href = "/cookie-policy")}
          className="mr-4"
        >
          Cookie Policy
        </button>
        <button onClick={() => (window.location.href = "/acceptable-use")}>
          Acceptable Use Policy
        </button>
      </div>
    </footer>
  );
}

export default Footer;
