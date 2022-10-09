import React from "react";
import style from "../../style_modules/CoursePage/CollapseData.module.css";
/**
 * @description Collaspse Compenent that contain the lessons(Lesson Compenent)
 * @param {*} props lessson is the name of lessson
 * @returns lesson Compenent
 */

function CollapseData(props) {
  return (
    <div className={style.container}>
      <img
        alt="play"
        className={style.play}
        src={require("../../images/Play.png")}
      />
      <span className={style.data}>{props.lesson}</span>
    </div>
  );
}

export default CollapseData;
