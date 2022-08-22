import React from "react";
import Course from "./Course";
import style from "./CourseContainer.module.css";
/**
 *
 * @param {object} props - Contain all data related to al courses
 * @returns Block of  Courses
 */
function CourseContainer(props) {
  console.log(typeof props.Course);
  return (
    <div className={style.course_info}>
      {props.Course.map((cour) => {
        return <Course key={cour.id} course={cour} />;
      })}
    </div>
  );
}
export default CourseContainer;
