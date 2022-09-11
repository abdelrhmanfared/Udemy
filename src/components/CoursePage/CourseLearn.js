import React from "react";
import style from "../../style_modules/CoursePage/CourseLearn.module.css";
/**
 *
 * @param {object} Overview conatin overview about course
 * @param {ref} useref get refernce to used in scroll component
 *
 * @returns
 */
function CourseLearn({ Overview, useref }) {
  const Learn = Overview.map((item, index) => {
    return (
      <li key={index} className={style.item}>
        <img
          className={style.correct}
          src={require("../../images/correct.png")}
          alt="CorrectImg"
        ></img>
        <span className={style.line}>{item}</span>
      </li>
    );
  });

  return (
    <div className={style.Learn} ref={useref}>
      <h2 className={style.ContentHeader}>What you'll learn</h2>
      <ul className={style.container}>{Learn}</ul>
    </div>
  );
}

export default CourseLearn;
