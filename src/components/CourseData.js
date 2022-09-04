import React from "react";
import { useLocation } from "react-router-dom";
import style from "./CourseData.module.css";
import CourseInformation from "./CourseInformation";
import CourseLearn from "./CourseLearn";
import CourseContent from "./CourseContent";
function CourseData() {
  const location = useLocation();
  const d = location.state.data;
  return (
    <>
      <CourseInformation courseInfo={d} />
      <div className={style.fullContent}>
        <div className={style.Content}>
          <CourseLearn courseInfo={d} />
          <CourseContent courseInfo={d} />
        </div>
      </div>
    </>
  );
}

export default CourseData;
