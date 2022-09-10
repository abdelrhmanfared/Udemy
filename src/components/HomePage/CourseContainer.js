import React from "react";
import { useSearchParams } from "react-router-dom";
import Course from "./Course";
import style from "../../style_modules/HomePage/CourseContainer.module.css";
/**
 *
 * @param {object} props - Contain all data related to al courses
 * @returns Block of  Courses
 */
function CourseContainer(props) {
  const [SearchParams] = useSearchParams();
  let SearchValue = SearchParams.get("search");
  if (SearchValue == null) SearchValue = "";

  console.log(props.Course_data);
  let filteredCourses = props.Course_data.filter((word) =>
    word.title.toLowerCase().includes(SearchValue.toLowerCase())
  );
  if (filteredCourses.length === 0) filteredCourses = props.Course_data;
  const v = filteredCourses.map((cour) => {
    return <Course key={cour.id} course={cour} />;
  });
  console.log(v);
  return <div className={style.course_info}>{v}</div>;
}
export default CourseContainer;
