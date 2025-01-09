import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollToRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const sections = document.querySelectorAll("section");


      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.getAttribute("id");
              if (sectionId) {
                navigate(`/${sectionId}`, { replace: true });
              }
            }
          });
        },
        { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, 500);
  }, [navigate]);

  return null;
};

export default ScrollToRoute;
