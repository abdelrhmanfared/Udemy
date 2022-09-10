import { React, useState } from "react";
import CountStars from "../CountStars";
import style from "../../style_modules/CoursePage/CourseInformation.module.css";
function CourseInformation({ courseInfo }) {
  const [add, setadd] = useState(0);
  return (
    <>
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.Section}>
            <span className={style.dataview}>
              {"Development > Programming Languages > Python"}
            </span>
            {data(courseInfo)}
          </div>
          <div>
            <div className={style.course_data}>
              <div className={style.course_image_d}>
                <span className={style.dataview}>
                  {"Development > Programming Languages > Python"}
                </span>
                <img
                  className={style.course_image}
                  src={courseInfo.img}
                  alt="courseImage"
                />
                <img
                  className={style.playicon}
                  src={require("../../images/play_large.png")}
                  alt="screen"
                />
                <span className={style.Preview}>Preview this Course</span>
                {data(courseInfo)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseInformation;

/**
 *
 * @param {string} props-Conatin instructor of course
 * @returns jsx instructor names
 */
function InstructorNames(props) {
  let str = "";
  props.instructorname.map((item, index) => {
    return (str +=
      item.name + (index + 1 === props.instructorname.length ? "" : ","));
  });
  return <span>{str}</span>;
}

function data(courseInfo) {
  return (
    <>
      <h1 className={style.CourseName}>{courseInfo.title}</h1>
      <div className={style.Introduction}>{courseInfo.description}</div>
      <div className={style.CountStars}>
        <span className={style.rate}>{courseInfo.rating}</span>
        <CountStars Rate={courseInfo.rating} />
        <span className={style.ratingCount}>
          {"(" + courseInfo.totalreviews + " ratings)"}
        </span>

        <span className={style.students}>
          {courseInfo.enrollments + " Students"}
        </span>
      </div>
      <div className={style.Instuctor}>
        {"Created by "}
        <span className={style.ratingCount}>
          <InstructorNames instructorname={courseInfo.instructors} />
        </span>
      </div>
      <div className={style.LastUpdate}>
        <div className={style.wrap}>
          <img
            className={style.change_color_image}
            src={require("../../images/exclamation-mark.png")}
            alt="!"
          />
          <span>{"Last updated " + courseInfo.lastupdated}</span>
        </div>
        <div className={style.wrap}>
          <img
            className={style.change_color_image}
            src={require("../../images/globe.png")}
            alt="!"
          />
          <span className={style.english_item}>{"English"}</span>
        </div>
        <div className={style.wrap}>
          <img
            className={style.change_color_image}
            src={require("../../images/closed-caption.png")}
            alt="!"
          />
          <span className={style.english_item}>{"English"}</span>
        </div>
      </div>
    </>
  );
}
