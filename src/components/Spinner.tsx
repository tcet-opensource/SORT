import React, { useEffect, useState } from "react";

const Spinner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Delay of 1 millisecond (adjust as needed)

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (!isVisible) {
    return null; // Spinner is hidden
  }

  return (
    <div
      id="spinner"
      className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-grow text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
