import React from "react";
import policyPDF from "../../assets/AlwaysOn Cookie Policy.pdf";

function Cookie() {
  return (
    <div className="pdf-container">
      <a id="top"></a>
      <iframe
        src={policyPDF}
        width="100%"
        height="1000px"
        title="Privacy Policy"
      ></iframe>
    </div>
  );
}

export default Cookie;