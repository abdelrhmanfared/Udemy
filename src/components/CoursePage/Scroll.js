import { React, useState, useEffect } from "react";
import style from "../../style_modules/CoursePage/Scroll.module.css";
/**
 *
 * @param {ref} overview
 * @param {ref} Curriculum
 * @param {ref} Instructor
 * @param {ref} Reviews
 * @returns
 */
function Scroll({ overview, Curriculum, Instructor, Reviews }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToMenu = (ref) => {
    ref.current.scrollIntoView({
      block: "center",
    });
  };
  return (
    <div className={scrollPosition > 450 ? style.scrol_background : style.data}>
      <div onClick={() => scrollToMenu(overview)}>Overview</div>
      <div onClick={() => scrollToMenu(Curriculum)}>Curriculum</div>
      <div onClick={() => scrollToMenu(Instructor)}>Instructor</div>
      <div onClick={() => scrollToMenu(Reviews)}>Reviews</div>
    </div>
  );
}

export default Scroll;
