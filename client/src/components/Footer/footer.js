import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer py-2 text-center freeman-regular border-t-2 border-black">
      <p className="text-2xl">AlwaysOn, Inc. 2023</p>
      <p className="text-xl mb-4">Have questions? Contact us</p>
      <p className="text-xl">Based in Newport Beach, CA</p>
      <div className="flex justify-center mt-4 text-xl">
        <a href="#top" className="mr-4">
          Privacy Policy
        </a>
        <a href="#top" className="mr-4">
          Terms of Service
        </a>
        <a href="#top" className="mr-4">
          Cookie Policy
        </a>
        <a href="#top">Acceptable Use Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
