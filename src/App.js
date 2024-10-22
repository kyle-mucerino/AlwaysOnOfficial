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
import Security from "./components/Security/security.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Platform />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/survey-tool" element={<SurveyTool />} />
          <Route path="/contact-us-routing" element={<Contact />} />
          <Route path="/professional-services" element={<ProServices />} />
          <Route path="/company" element={<Company />} />
          <Route path="/media" element={<Media />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/security-accessibility" element={<Security />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
