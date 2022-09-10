import React, { useState, useEffect } from "react";
import style from "../../style_modules/CoursePage/CourseCard.module.css";
/**
 * @description make Course Card stay stable when y-coordinates less than 300
 * return stable again when y-coordinates greater than 2000
 * @param {*} courseInfo conatain all data about courses
 * @returns jsx of card
 */
function CourseCard({ courseInfo, useref }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [add, setadd] = useState(0);
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div
          className={
            scrollPosition < 300 ? style.coursecard : style.coursecard_Move
          }
        >
          <div
            style={
              scrollPosition > document.documentElement.offsetHeight - 1490
                ? { top: document.documentElement.offsetHeight - 1490 }
                : {}
            }
            className={
              scrollPosition < 300
                ? style.courseStatic
                : scrollPosition > document.documentElement.offsetHeight - 1490
                ? style.courseSticky
                : style.courseFixed
            }
          >
            <div
              className={
                scrollPosition < 300 ||
                scrollPosition > document.documentElement.offsetHeight - 1490
                  ? style.ImageExist
                  : style.ImageRemoved
              }
            >
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
            </div>

            <div className={style.current_price}>{"E£" + courseInfo.price}</div>
            <button className={style.add_to_cart} onClick={() => setadd(1)}>
              {!add ? "Add to cart" : "Go to cart"}
            </button>
            <div>
              <button className={style.buy_now}>Buy now</button>
            </div>
            <span className={style.money_back}>
              30-Day Money-Back Guarantee
            </span>
            <div className={style.Course_data}>
              <h2 className={style.head}>This course includes:</h2>
              <div className={style.item}>
                <img
                  className={style.item_img}
                  src={require("../../images/screen.png")}
                  alt="screen"
                />
                <span>{courseInfo.hoursCount + " hours on-demand video"}</span>
              </div>
              <div className={style.item}>
                <img
                  className={style.item_img}
                  src={require("../../images/article.png")}
                  alt="article"
                />
                <span>
                  {courseInfo.articlesCount
                    ? courseInfo.articlesCount + "  article"
                    : ""}
                </span>
              </div>
              <div className={style.item}>
                <img
                  className={style.item_img}
                  src={require("../../images/file.png")}
                  alt="file"
                />
                <span>
                  {courseInfo.downloadableResource
                    ? courseInfo.downloadableResource +
                      " downloadable resources"
                    : ""}
                </span>
              </div>
              <div className={style.item}>
                <img
                  className={style.item_img}
                  src={require("../../images/infinity.png")}
                  alt="file"
                />
                <span>{" Full lifetime access"}</span>
              </div>
              <div className={style.item}>
                <img
                  className={style.item_img}
                  src={require("../../images/smartphone.png")}
                  alt="file"
                />
                <span>{" Access on mobile and TV"}</span>
              </div>
              <div className={style.item}>
                <img
                  className={style.item_img}
                  src={require("../../images/cup.png")}
                  alt="file"
                />
                <span>{" Certificate of completion"}</span>
              </div>
            </div>
            <div className={style.Course_Subscription}>
              <div className={style.share}>Share</div>
              <div>Gift this course</div>
              <div className={style.ApplyCoupon}>Apply Coupon</div>
            </div>
            <div className={style.Training}>
              <h2 className={style.train}>Training 5 or more people?</h2>
              <div>
                Get your team access to 17,000+ top Udemy courses anytime,
                anywhere.
              </div>
              <div>
                <button className={style.btn_udemy_business}>
                  Try Udemy Business
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
