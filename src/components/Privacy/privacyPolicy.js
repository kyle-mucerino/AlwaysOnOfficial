import React from "react";
import policyPDF from "../../assets/AlwaysOn Privacy Policy Updated.pdf";

function PrivacyPolicy() {
  return (
    <div className="pdf-container">
      <iframe
        src={policyPDF}
        width="100%"
        height="1000px"
        title="Privacy Policy"
      ></iframe>
    </div>
  );
}

export default PrivacyPolicy;
