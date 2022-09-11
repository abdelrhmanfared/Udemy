import React, { useState } from "react";
import style from "../../style_modules/CoursePage/CourseContent.module.css";
import CustomizeAccordion from "./CustomizeAccordion";
let array = [];
/**
 *
 * @param {object} Content conatin Course content
 * @returns
 */
function CourseContent({ Content }) {
  const [show, setShow] = useState(0);
  const [here, setHere] = useState(0);

  return (
    <div className={style.Content}>
      <h2>Course content</h2>
      <div className={style.content_data}>
        <span className={style.dataAboutCourse}>
          {Content.sectionsCount +
            " sections ." +
            Content.lecturesCount +
            " lectures  ." +
            Content.totalLength +
            " total length"}
        </span>
        <button
          onClick={() => {
            setShow(!show);
            setHere(0);
            array = show ? [] : [...Array(Content.lectures.length).keys()];
          }}
          className={style.Expand}
        >
          {!show ? "Expand all sections" : "Callaps all section "}
        </button>
      </div>
      <CustomizeAccordion
        data={Content}
        Expand={show}
        control={here}
        arr={array}
        setControl={setHere}
      />
    </div>
  );
}

export default CourseContent;
