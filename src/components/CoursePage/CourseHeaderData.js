import { React, useState, useEffect } from "react";
import style from "../../style_modules/CoursePage/CourseHeaderData.module.css";
import useWindowDimensions from "./useWindowDimensions";
/**
 *
 * @param {*} courseInfo data related to course
 * @returns
 */
function CourseHeaderData({ courseInfo }) {
  const { height, width } = useWindowDimensions();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    const pos = window.pageXOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const SelectStyle = () => {
    if (scrollPosition < 150) return style.header;
    else {
      if (width > 1150) return style.head;
      else return style.smallhead;
    }
  };
  return (
    <div className={SelectStyle()}>
      <div className={style.item}>
        <div className={style.info}>
          <div className={style.Coursetitle}>{courseInfo.title}</div>
          <span className={style.rate}>{courseInfo.rating}</span>
          <img
            className={style.star}
            style={{ width: 16, marginLeft: 5, marginBottom: 5 }}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="full start"
          />
          <span className={style.ratingCount}>
            {"(" + courseInfo.totalreviews + " ratings)"}
          </span>
          <span className={style.enrollCount}>
            {courseInfo.enrollments + " students"}
          </span>
        </div>
        <div className={style.buynow}>
          <div className={style.price}>{"E£" + courseInfo.price}</div>
          <button className={style.buy}>Buy now</button>
        </div>
      </div>
    </div>
  );
}

export default CourseHeaderData;
