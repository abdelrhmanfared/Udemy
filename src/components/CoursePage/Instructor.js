import { React, useState } from "react";
import Description from "./Description";
import style from "../../style_modules/CoursePage/Instructor.module.css";
function Instructor({ Instructordata }) {
  return (
    <div id="in" className={style.instr}>
      <h5>
        <span className={style.Instructor_name}>{Instructordata.name}</span>
      </h5>
      <div className={style.job}>{Instructordata.job}</div>
      <div className={style.Instructorr}>
        <div>
          <img
            className={style.img}
            src={Instructordata.img}
            alt="Instructor"
          />
        </div>
        <div className={style.data}>
          <div>
            <div className={style.Rating_image}>
              <img
                className={style.data_img}
                src={require("../../images/star.png")}
                alt="star"
              />
              <span>{Instructordata.rating + " Instructor Rating"}</span>
            </div>
            <div className={style.Rating_image}>
              <img
                className={style.data_img}
                src={require("../../images/reward.png")}
                alt="reward"
              />
              <span>{Instructordata.reviews + " Reviews"}</span>
            </div>
            <div className={style.Rating_image}>
              <img
                className={style.data_img}
                src={require("../../images/person.png")}
                alt="person"
              />
              <span>{Instructordata.students + " Students"}</span>
            </div>
            <div className={style.Rating_image}>
              <img
                className={style.data_img}
                src={require("../../images/Play.png")}
                alt="play"
              />
              <span>{Instructordata.courses + " Courses"}</span>
            </div>
          </div>
        </div>
      </div>
      <Description isInstructor={0} courseInfo={Instructordata.description} />
    </div>
  );
}

export default Instructor;
