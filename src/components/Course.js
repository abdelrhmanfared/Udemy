import React from "react";
import style from "./Course.module.css";
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
  return <h4 className={style.instructor_name}>{props.instructor_name}</h4>;
}
/**
 *
 * @param {integer} props - Contain rate - contain people
 * @returns jsx contain rate and stars and people
 */
function CountStars(props) {
  let Rate = props.rate;
  let Stars = [];
  for (let k = 1; k <= 5; k++) {
    if (Rate >= k)
      Stars.push(<i key={k} className="fa fa-star" aria-hidden="true"></i>);
    else if (Rate >= 0.2)
      Stars.push(<i key={k} className="fas fa-star-half-alt"></i>);
    else Stars.push(<i key={k} className="fa fa-star-o"></i>);
  }

  return (
    <>
      <span className={style.stars}>{props.rate}</span>
      <span className={style.stars}>{Stars}</span>
      <span className={style.people}>({props.people})</span>
    </>
  );
}
/**
 *
 * @param {boolean} props - Contain course if best seller or not
 * @returns jsx contain bestseller
 */
function BestSeller(props) {
  let name = "BestSeller";
  return props.bestSeller ? (
    <span className={style.bestseller}>{name}</span>
  ) : (
    <></>
  );
}
/**
 *
 * @param {course} props - Contain all data realted to course
 * @returns Course component
 */
function Course(props) {
  return (
    <>
      <div className={style.courses}>
        <CourseImage image={props.course.image} />
        <div className={style.course_data}>
          <CourseTitle title={props.course.title} />
          <InstructorNames instructor_name={props.course.author} />
          <CountStars rate={props.course.rating} people={props.course.people} />
        </div>
        <CoursePrice price={props.course.price} />
        <BestSeller bestSeller={props.course.bestSeller} />
      </div>
    </>
  );
}

export default Course;
