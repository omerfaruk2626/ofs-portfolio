import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ResumeSection from "../ResumeSection/ResumeSection";

function Main() {
  const fullText = "www.omerfaruksivri.com.tr";
  const [displayedText, setDisplayedText] = useState("");
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        const caretTimer = setTimeout(() => {
          setShowCaret(false);
        }, 10);
        return () => clearTimeout(caretTimer);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="bannerdiv">
      <div className="container text-center bannertext">
        <div className="handwriting">
          {displayedText}
          {showCaret && <span className="caret">|</span>}
        </div>

        <h4 className="display-4 fw-bold text-white">Hi there 👋</h4>
        <p className="lead text-white">
          Explore my projects and discover the endless possibilities
        </p>
        <div className="flex gap-2 items-center justify-center">
          <div className="animate-slide-in-left">
            <ResumeSection />
          </div>
          <div className="animate-slide-in-right">
            <NavLink
              to="/contact"
              className="btn btn-outline-light mt-3 btn-right "
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
