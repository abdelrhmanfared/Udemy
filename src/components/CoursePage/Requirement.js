import React from "react";
import style from "../../style_modules/CoursePage/Requirement.module.css";
/**
 *
 * @param {Array} requirement  conatin all requirement data about course
 * @returns
 */
function Requirement({ requirement }) {
  const d = requirement.map((item, index) => {
    return (
      <div className={style.list} key={index}>
        {item}
      </div>
    );
  });
  return (
    <>
      <div className={style.reqtable}>
        <h2 className={style.req}>Requirement </h2>
        <ul className={style.ul_item}>{d}</ul>
      </div>
    </>
  );
}

export default Requirement;
