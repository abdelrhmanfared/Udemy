import React from "react";
import style from "./Course.module.css";
function CourseImage(props) {
  return <img className={style.course_image} src={props.image} alt="pyhon" />;
}
function CourseTitle(props) {
  return <h3 className={style.course_title}>{props.title}</h3>;
}
function CoursePrice(props) {
  return <h5 className={style.course_price}>{props.price} $</h5>;
}
function InstructorNames(props) {
  return <h4 className={style.instructor_name}>{props.instructor_name}</h4>;
}

function CountStars(props) {
  let Rate = props.rate;
  console.log(Rate);
  let Stars = [];

  for (let i = 1; i <= 5; i++) {
    if (Rate >= i) Stars.push(<span key={i} className="fa-star stars"></span>);
    else if (Rate + 0.5 >= i)
      Stars.push(<span key={i} className="fa-star-half-full stars"></span>);
    else Stars.push(<span key={i} className="fa-star-o stars "></span>);
  }

  return (
    <>
      <span className={style.stars}>{props.rate}</span>
      <span className={style.people}>({props.people})</span>
    </>
  );
}
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
      </div>
    </>
  );
}

export default Course;
