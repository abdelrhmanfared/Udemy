import React from "react";
import style from "./Course.module.css";
import { useNavigate } from "react-router-dom";
import CountStars from "./CountStars";

/**
 *
 * @param {string} props-Conatin image of course
 * @returns jsx contain image
 */
function CourseImage(props) {
  return <img className={style.course_image} src={props.image} alt="pyhon" />;
}
/**
 *
 * @param {string} props-Conatin title of course
 * @returns jsx contain title
 */
function CourseTitle(props) {
  return <h3 className={style.course_title}>{props.title}</h3>;
}
/**
 *
 * @param {integer} props-Conatin price of course
 * @returns jsx contain price
 */
function CoursePrice(props) {
  return <h5 className={style.course_price}>{props.price} $</h5>;
}

/**
 *
 * @param {string} props-Conatin instructor of course
 * @returns jsx instructor names
 */
function InstructorNames(props) {
  let str = "";
  console.log(props.instructor_name.name);
  /*props.instructor_name.map((item, index) => {
    return (str +=
      item.name + (index + 1 === props.instructor_name.length ? "" : ","));
  });*/
  return (
    <h4 className={style.instructor_name}>{props.instructor_name.name}</h4>
  );
}

/**
 *
 * @param {course} props - Contain all data realted to course
 * @returns Course component
 */
function Course(props) {
  const navigate = useNavigate();
  console.log(props.course);
  return (
    <>
      <div
        onClick={
          () =>
            navigate("/Course/" + props.course.id, {
              state: {
                data: props.course,
              },
            })
          //            {state:{id:1,name:'sabaoon'}}
        }
        className={style.courses}
      >
        <CourseImage image={props.course.image} />
        <div className={style.course_data}>
          <CourseTitle title={props.course.title} />
          <InstructorNames instructor_name={props.course.instructor} />
          <CountStars
            Rate={props.course.rate}
            rate_count={props.course.ratingCount}
          />
        </div>
        <CoursePrice price={props.course.price} />
      </div>
    </>
  );
}

export default Course;
