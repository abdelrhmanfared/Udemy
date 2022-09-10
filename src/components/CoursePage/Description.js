import React, { useState } from "react";
import style from "../../style_modules/CoursePage/Description.module.css";
import ReactMarkdown from "react-markdown";

function Description({ courseInfo, useref, isInstructor }) {
  const [show, setShow] = useState(1);

  return (
    <div>
      <div className={`${style.desc} ${show && style.fun}`} ref={useref}>
        <h2>{isInstructor ? "Description" : ""} </h2>
        {/* {des.slice(0, Math.min(2, courseInfo.length)) : des} */}
        <ReactMarkdown>
          {!show || courseInfo.length === 0
            ? courseInfo
            : courseInfo.substring(0, Math.min(400, courseInfo.length))}
        </ReactMarkdown>
      </div>
      <div className={style.more}>
        <button onClick={() => setShow(!show)} className={style.btn_more}>
          {"Show " + (show ? "more" : "less")}
        </button>
        <img
          className={show ? style.img_return : style.img_reverse}
          alt="expand "
          src={require("../../images/arrow.png")}
        />
      </div>
    </div>
  );
}

export default Description;
