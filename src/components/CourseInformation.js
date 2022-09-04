import React from "react";
import CountStars from "./CountStars";
import style from "./CourseInformation.module.css";
function CourseInformation(props) {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.Section}>
          <span className={style.dataview}>
            {"Development > Programming Languages > Python"}
          </span>
          <h1 className={style.CourseName}>{props.courseInfo.title}</h1>
          <div className={style.Introduction}>
            {props.courseInfo.Introduction}
          </div>
          <div className={style.CountStars}>
            <CountStars
              Rate={props.courseInfo.rate}
              rate_count={props.courseInfo.ratingCount}
            />
            <span className={style.students}>
              {props.courseInfo.enrollCount + " Students"}
            </span>
          </div>
          <div className={style.Instuctor}>
            Created by
            <InstructorNames instructor_name={props.courseInfo.instructor} />
          </div>
          <div className={style.LastUpdate}>
            {"Last updated " + props.courseInfo.lastUpdate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInformation;

/**
 *
 * @param {string} props-Conatin instructor of course
 * @returns jsx instructor names
 */
function InstructorNames(props) {
  /*props.instructor_name.map((item, index) => {
      return (str +=
        item.name + (index + 1 === props.instructor_name.length ? "" : ","));
    });*/
  return (
    <span className={style.instructor_name}>
      {" " + props.instructor_name.name}
    </span>
  );
}
