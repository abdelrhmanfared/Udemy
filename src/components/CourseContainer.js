import React from "react";
import Course from "./Course";
import style from "./CourseContainer.module.css";
import { Link } from "react-router-dom";
/**
 *
 * @param {object} props - Contain all data related to al courses
 * @returns Block of  Courses
 */
function CourseContainer(props) {
  return (
    <div className={style.course_info}>
      {props.Course.map((cour) => {
        return <Course key={cour.id} course={cour} />;
      })}
    </div>
  );
}
export default CourseContainer;
