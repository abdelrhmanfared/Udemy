import React from "react";
import style from "../../style_modules/HomePage/PopOver.module.css";
import Spinner from "react-bootstrap/Spinner";
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
/**
 *
 * @param {object} coursInfo conatin all data about the course
 * @param {state} love contain the the popover love or not
 * @param {Function} setLove to set Love value
 * @param {Function} delay to make delay to show spinner
 * @param {state} Load  make delay to show spinner
 * @param {Function} seLoading to to make delay to show spinner
 * @returns PopOver Component
 *
 */
function PopOver({ coursInfo, love, setLove, delay, Load, seLoading }) {
  const GetMonth = (str) => {
    let c = str.split("/");
    return month[parseInt(c[0] - 1)] + " " + c[1];
  };
  return (
    <div className={style.popover_card}>
      <div className={style.allElment}>
        <div className={style.title}>{coursInfo.title}</div>
        <div className={style.wrap}>
          <button className={style.new_btn}>New</button>
          <div className={style.date}>
            {"Updated " + GetMonth(coursInfo.lastupdated)}
          </div>
        </div>
        <div className={`${style.wrap} ${style.lol}`}>
          <div>{coursInfo.hoursCount + " total hours. "}</div>
          <div>{" All Levels. "}</div>
          <div>{" Subtitle"}</div>
        </div>
        <h4 className={style.intro}>{coursInfo.description}</h4>
        <div>
          {coursInfo.overview.map((item) => {
            return (
              <div key={item} className={style.overview}>
                {
                  <img
                    alt="lol"
                    className={style.correct}
                    src={require("../../images/correct.png")}
                  />
                }
                <span>{item}</span>
              </div>
            );
          })}
        </div>
        <div className={style.bnts}>
          <button className={style.addtocart}>Add to cart</button>
          <div
            className={style.love_react}
            onClick={() => {
              setLove(!love);
              delay();
              seLoading(true);
            }}
          >
            {Load === true ? (
              <Spinner animation="border" role="status" />
            ) : (
              <img
                className={style.love}
                alt="love"
                src={
                  !love
                    ? require("../../images/heart.png")
                    : require("../../images/heart-black.png")
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopOver;
/**
 *             

 */
