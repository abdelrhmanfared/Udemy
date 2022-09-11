import { React, useRef, useState } from "react";
import style from "../../style_modules/CoursePage/ReviewContainter.module.css";
import ReviewOfUser from "./ReviewOfUser";
/**
 *
 * @param {object} courseInfo conatain all data related with course
 * @returns
 */
function ReviewContainter({ courseInfo }) {
  const [show, setShow] = useState(false);
  const [rate, setRate] = useState(-1);
  const [render, setRender] = useState(0);
  const inputref = useRef("");
  const [Search, setSearch] = useState([]);
  const filter = () => {
    let str = inputref.current.value;
    console.log(str);
    if (str !== "") {
      setSearch(str.split(" "));
    } else setSearch([]);
  };
  const Data_Reviews = [];
  const Words_Bold = [];
  courseInfo.map((item) => {
    let res = item.review.split(" ");
    let ok = 1;
    const D = res.map((element) => {
      if (Search.includes(element) || Search.length === 0) {
        ok = 0;
        if (!Words_Bold.includes(element) && Search.length !== 0)
          Words_Bold.push(element);
      }
    });
    if (!ok) Data_Reviews.push(item);
  });
  const Review = Data_Reviews.filter(
    (item) =>
      (Math.round(item.rating) <= rate && rate <= Math.ceil(item.rating)) ||
      rate === -1
  );
  const Review_Result = Review.map((item, index) => {
    return (
      <ReviewOfUser Bold_Elmenet={Words_Bold} key={index} userReview={item} />
    );
  });

  const handleChange = (e) => {
    let str = e.target.value;
    if (str === "All rating") setRate(-1);
    else if (str === "Five Stars") setRate(5);
    else if (str === "Four Stars") setRate(4);
    else if (str === "Three Stars") setRate(3);
    else if (str === "Two Stars") setRate(2);
    else setRate(1);
  };
  return (
    <div className={style.review}>
      <h3>Reviews</h3>
      <div className={style.search_review}>
        <input
          type="text"
          ref={inputref}
          className={style.search}
          placeholder={"Search reviews"}
        />
        <button onClick={filter} className={style.Reveiw}>
          <img
            alt="search_icon"
            className={style.img_review}
            src={require("../../images/search.png")}
          />
        </button>
        <select className={style.dropdown} onChange={handleChange}>
          <option value="All rating">All rating</option>
          <option
            onClick={() => {
              setRender((old) => old + 1);
            }}
            value="Five Stars"
          >
            Five Stars
          </option>
          <option
            onClick={() => {
              setRender((old) => old + 1);
            }}
            value="Four Stars"
          >
            Four Stars
          </option>
          <option
            onClick={() => {
              setRender((old) => old + 1);
            }}
            value="Three Stars"
          >
            Three Stars
          </option>
          <option
            onClick={() => {
              setRender((old) => old + 1);
            }}
            value="Two Stars"
          >
            Two Stars
          </option>
          <option
            onClick={() => {
              setRender((old) => old + 1);
            }}
            value="One Stars"
          >
            One Stars
          </option>
        </select>
      </div>
      <div>
        {show
          ? Review_Result
          : Review_Result.slice(0, Math.min(3, Review.length))}
      </div>
      <button onClick={() => setShow((old) => !old)} className={style.showMore}>
        {!show ? "See more reviews" : "See less reviews "}
      </button>
    </div>
  );
}

export default ReviewContainter;
