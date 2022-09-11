import React, { useState } from "react";
import CountStars from "../CountStars";
import style from "../../style_modules/CoursePage/ReviewOfUser.module.css";
/**
 * @description make Review Component and make text bold when used in search
 * @param {object} userReview  Review of one user
 * @param {Array} Bold_Elmenet contain the array of words used in search
 * @returns jsx of Review Component
 */
function ReveiwofUser({ userReview, Bold_Elmenet }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  return (
    <div className={style.reveiw}>
      <div className={style.Reviw_name}>
        <button className={style.name}>{userReview.initials}</button>
      </div>
      <div className={style.reveiw_data}>
        <h4>{userReview.name}</h4>
        <CountStars Rate={userReview.rating} />
        <span>{userReview.timeago}</span>
        <p className={style.content}>
          {userReview.review.split(" ").map((item, index) => {
            return (
              <span
                key={index}
                style={
                  Bold_Elmenet.includes(item) ? { fontWeight: "bold" } : {}
                }
              >
                {item + " "}
              </span>
            );
          })}
        </p>
        <p>
          {like === false && dislike === false
            ? "Was this review helpful?"
            : "Thank you for your feedback"}
        </p>
        <span>
          <button
            className={like ? style.react_clicked : style.react}
            onClick={() => {
              setLike((old) => !old);
              setDislike(false);
            }}
          >
            <img
              className={like ? style.img_like : " "}
              src={require("../../images/like.png")}
              alt="like"
            />
          </button>
          <button
            className={dislike ? style.react_clicked : style.react}
            onClick={() => {
              setDislike((old) => !old);
              setLike(false);
            }}
          >
            <img
              className={dislike ? style.img_like : " "}
              src={require("../../images/dislike.png")}
              alt="dislike"
            />
          </button>
          <span className={style.Report}>Report</span>
        </span>
      </div>
    </div>
  );
}

export default ReveiwofUser;
