import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/nav.js";
import Platform from "./components/Platform/platform.js";
import About from "./components/About/about.js";
import Login from "./components/Login/login.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";
import Chatbot from "./components/Chatbot/chatbot.js";
import SurveyTool from "./components/SurveyTool/surveyTool.js";
import ProServices from "./components/ProServices/proServices";
import Company from "./components/Company/company.js";
import Media from "./components/Media/media.js";
import FAQ from "./components/FAQ/faq.js";
import ContactUs from "./components/ContactUs/contactUs.js";
import AcceptableUse from "./components/AcceptableUse/acceptableUse";
import PrivacyPolicy from "./components/Privacy/privacyPolicy";
import Cookie from "./components/Cookie/cookie";
import Terms from "./components/Terms/terms";

function App() {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    setUtmParams(params);
    console.log("UTM Params on App Mount:", params); // Log the UTM params
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Platform />} />
          <Route path="/home" element={<Platform />} />
          {/* <Route path="" element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-chatbot-analytics" element={<Chatbot />} />
          {/* <Route path="/survey-tool" element={<SurveyTool />} /> */}
          <Route path="/contact-us-routing" element={<Contact />} />
          {/* <Route path="/professional-services" element={<ProServices />} /> */}
          <Route path="/company" element={<Company />} />
          <Route path="/media" element={<Media />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
