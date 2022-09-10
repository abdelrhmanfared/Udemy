import React from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "react-grid-carousel";

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

  let filteredCourses = props.Course_data.filter((word) =>
    word.title.toLowerCase().includes(SearchValue.toLowerCase())
  );
  if (filteredCourses.length === 0) filteredCourses = props.Course_data;
  const v = filteredCourses.map((cour, index) => {
    return (
      <Carousel.Item key={index}>
        <Course key={cour.id} course={cour} />
      </Carousel.Item>
    );
  });
  return (
    <div className={style.course_info}>
      <Carousel
        cols={5}
        rows={1}
        loop
        mobileBreakpoint={600}
        responsiveLayout={[
          {
            breakpoint: 800,
            cols: 2,
          },
          {
            breakpoint: 980,
            cols: 3,
          },
          {
            breakpoint: 1200,
            cols: 4,
          },
        ]}
      >
        {v}
      </Carousel>
    </div>
  );
}
export default CourseContainer;
