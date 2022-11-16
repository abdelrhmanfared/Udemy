import React, { useRef, useState } from "react";
import style from "../../style_modules/HomePage/Course.module.css";
import { useNavigate } from "react-router-dom";
import CountStars from "../CountStars";
import { Popover, OverlayTrigger } from "react-bootstrap";
import PopOver from "./PopOver";
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
  return <h4 className={style.course_title}>{props.title}</h4>;
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
  props.instructorname.map((item, index) => {
    return (str +=
      item.name + (index + 1 === props.instructorname.length ? "" : ","));
  });
  return <div className={style.instructors}>{str}</div>;
}

/**
 *@description Conatain all data related to course , pop over component
 * @param {course} props - Contain all data realted to course
 * @returns Course component
 */
function Course(props) {
  const PopOverWidth = 320;
  const useref = useRef(null);
  const navigate = useNavigate();
  const [enter, setEnter] = useState(false);
  const [Love, setlove] = useState(false);
  const [load, seloading] = useState(false);
  const handleCheck = () => {
    seloading(false);
  };
  const Delay = () => {
    setTimeout(() => {
      handleCheck();
    }, 2000);
  };
  const popoverHoverFocus = (
    <Popover
      id="popover-positioned-right"
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      title="Popover right"
    >
      <PopOver
        coursInfo={props.course}
        love={Love}
        setLove={setlove}
        delay={Delay}
        Load={load}
        seLoading={seloading}
      />
    </Popover>
  );
  const [Postion, setPostion] = useState("right");
  const check = (Left, Right) => {
    if (Left >= PopOverWidth && Right >= PopOverWidth) {
      setPostion(Left >= Right ? "left" : "right");
    } else if (Left >= PopOverWidth) {
      setPostion("left");
    } else if (Right >= PopOverWidth) setPostion("right");
    else setPostion("top");
  };
  return (
    <>
      <OverlayTrigger
        trigger={["hover", "focus"]}
        show={enter}
        placement={Postion}
        overlay={popoverHoverFocus}
      >
        <div
          ref={useref}
          style={enter ? { cursor: "pointer" } : {}}
          onMouseEnter={() => {
            setEnter(true);
            check(
              useref.current.offsetLeft + props.Offset(),
              window.innerWidth -
                useref.current.offsetLeft -
                useref.current.offsetWidth -
                props.Offset()
            );
          }}
          onMouseLeave={() => setEnter(false)}
          onClick={() =>
            navigate("/Course/" + props.course.id, {
              state: {
                data: props.course,
              },
            })
          }
          className={style.courses}
        >
          <CourseImage image={props.course.img} />
          <div className={style.course_data}>
            <CourseTitle title={props.course.title} />
            <InstructorNames instructorname={props.course.instructors} />
            <span style={{ color: "#e59819", paddingRight: 6 }}>
              {props.course.rating}
            </span>

            <CountStars Rate={props.course.rating} />
            <span style={{ color: "#6a6f73", paddingRight: 6 }}>
              {"(" + props.course.totalreviews + ")"}
            </span>
          </div>
          <CoursePrice price={props.course.price} />
        </div>
      </OverlayTrigger>
    </>
  );
}

export default Course;
