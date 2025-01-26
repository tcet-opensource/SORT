import React, { useState, useEffect } from "react";


const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log("Scroll position:", window.scrollY); // Debugging
    if (window.scrollY > 100) { // Check if scrolled more than 100px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href="#"
      className={`btn btn-primary btn-lg-square back-to-top ${
        isVisible ? "show" : "hide"
      }`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
};

export default BackToTop;

