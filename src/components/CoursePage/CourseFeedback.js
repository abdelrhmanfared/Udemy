import React from "react";
import style from "../../style_modules/CoursePage/CourseFeedback.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import CountStars from "../CountStars";
/**
 * @description make Course Feedback component
 * @param {Array} courseInfo Contain all courses
 * @param {ref} Contain reference map to item
 * @returns
 */
function CourseFeedback({ courseInfo, useref }) {
  let Counter = 1e9;
  return (
    <div className={style.CourseFeedback} ref={useref}>
      <h3 className={style.Student_feedback}>Student feedback</h3>
      <div className={style.data_hidden}>
        <span className={style.rate_Number}>{courseInfo.rating}</span>
        <span className={style.Feedback_rating}>Course Rating</span>
      </div>
      <div className={style.Feedback}>
        <div className={style.rate}>
          <div className={style.rate_Number}>{courseInfo.rating}</div>
          <div className={style.Feedback_star}>
            <CountStars Rate={courseInfo.rating} />
          </div>
          <div className={style.Feedback_rating}>Course Rating</div>
        </div>
        <div className={style.prograsbar}>
          {courseInfo.studentFeedback.map((item) => {
            return (
              <ProgressBar
                variant="secondary "
                key={item}
                className={style.prograsbar_item}
                now={item}
              />
            );
          })}
        </div>
        <div className={style.courserate}>
          {courseInfo.studentFeedback.map((item, index) => {
            return (
              <div key={item} className={style.Feedback_block_rating}>
                <span key={index} className={style.Feedback_star}>
                  {<CountStars Rate={Math.ceil(item / 10)} />}
                </span>
                <span key={Counter--} className={style.Feedback_user_rating}>
                  {item + "%"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseFeedback;
