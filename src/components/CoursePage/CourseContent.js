import React, { useState } from "react";
import style from "../../style_modules/CoursePage/CourseContent.module.css";
import CustomizeAccordion from "./CustomizeAccordion";
let array = [];
function CourseContent(props) {
  const [show, setShow] = useState(0);
  const [here, setHere] = useState(0);

  return (
    <div className={style.Content}>
      <h2>Course content</h2>
      <div className={style.content_data}>
        <span className={style.dataAboutCourse}>
          {props.courseInfo.sectionsCount +
            " sections ." +
            props.courseInfo.lecturesCount +
            " lectures  ." +
            props.courseInfo.totalLength +
            " total length"}
        </span>
        <button
          onClick={() => {
            setShow(!show);
            setHere(0);
            array = show
              ? []
              : [...Array(props.courseInfo.lectures.length).keys()];
          }}
          className={style.Expand}
        >
          {!show ? "Expand all sections" : "Callaps all section "}
        </button>
      </div>
      <CustomizeAccordion
        data={props.courseInfo}
        Expand={show}
        control={here}
        arr={array}
        setControl={setHere}
      />
    </div>
  );
}

export default CourseContent;
