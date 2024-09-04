import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/nav.js";
import Platform from "./components/Platform/platform.js";
import About from "./components/About/about.js";
import Login from "./components/Login/login.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
