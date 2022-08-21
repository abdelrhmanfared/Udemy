import React from "react";
import Course from "./Course";
import style from "./CourseContainer.module.css";
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
