import { useState, useEffect } from "react";
import "./lib/animate/animate.min.css";
import "./components/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // global CSS imports
import "./components/css/style.css";

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import About from "./components/about";
import Events from "./components/events";
import Footer from "./components/footer";
import HomeBody from "./components/homeBody";
import Magazine from "./components/magazineBody";
import Navbar from "./components/navBar";
import Spinner from "./components/Spinner"; // Import the Spinner component
import BackToTop from "./components/BackToTop"; // Import BackToTop component

function Home() {
  return (
    <>
      <HomeBody />
      <BackToTop /> {/* BackToTop is only included on the Home page */}
    </>
  );
}

function EventsFn() {
  return (
    <>
      <Events />
    </>
  );
}
function MagazineFn() {
  return (
    <>
      <Magazine />
    </>
  );
}
function AboutFn() {
  return (
    <>
      <About />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Stop showing the spinner
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return <Spinner />; // Show spinner while loading
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsFn />} />
        <Route path="/magazine" element={<MagazineFn />} />
        <Route path="/about" element={<AboutFn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
