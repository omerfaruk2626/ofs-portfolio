import React, { useEffect, useState } from "react";

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
          <a
            href="/Resume_ENG.pdf"
            className="btn btn-outline-light mt-3 btn-left"
          >
            Check My Resume
          </a>
          <a href="/contact" target="_blank" referrerPolicy="no-referrer" className="btn btn-outline-light mt-3 btn-right">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
