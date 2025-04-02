import React from "react";
import "./footer.css";
import policy1 from "../../assets/AlwaysOn Acceptable Use Policy.pdf";
import policy2 from "../../assets/AlwaysOn Cookie Policy.pdf";
import policy3 from "../../assets/AlwaysOn Privacy Policy.pdf";
import policy4 from "../../assets/AlwaysOn Terms of Service.pdf";


function Footer() {
  return (
    <footer className="footer py-2 text-center freeman-regular border-t-2 border-black">
      <p className="text-2xl">AlwaysOn, Inc. 2025</p>
      <p className="text-xl">Based in Newport Beach, CA</p>
      <div className="flex justify-center mt-4 text-xl">
        <a
          href={policy3}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Privacy Policy
        </a>
        <a
          href={policy4}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Terms of Service
        </a>
        <a href={policy2} target="_blank" rel="noopener noreferrer" className="mr-4">
          Cookie Policy
        </a>
        <a href={policy1} target="_blank" rel="noopener noreferrer">Acceptable Use Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
