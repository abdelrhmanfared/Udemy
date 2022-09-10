import React from "react";
import style from "../../style_modules/CoursePage/InstructorsContainer.module.css";
import Instructor from "./Instructor";
function InstructorsContainer({ instructor, useref }) {
  return (
    <div className={style.allInstructions} ref={useref}>
      <h2 className={style.JobTitle}>Instructors</h2>
      <div>
        {instructor.map((item, index) => {
          return <Instructor key={index} Instructordata={item} />;
        })}
      </div>
    </div>
  );
}

export default InstructorsContainer;
