import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/sales-external/apptegy-intro-4?text_color=503462&primary_color=f5897f"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CalendlyWidget;
