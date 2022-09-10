import { React, useRef } from "react";
import { useLocation } from "react-router-dom";
import style from "../../style_modules/CoursePage/CourseData.module.css";
import CourseInformation from "./CourseInformation";
import CourseLearn from "./CourseLearn";
import CourseContent from "./CourseContent";
import Requirement from "./Requirement";
import Description from "./Description";
import InstructorsContainer from "./InstructorsContainer";
import CourseFeedback from "./CourseFeedback";
import ReviewContainter from "./ReviewContainter";
import FooterCourses from "./FooterCourses";
import CourseCard from "./CourseCard";
import CourseHeaderData from "./CourseHeaderData";
import Scroll from "./Scroll";
function CourseData() {
  const location = useLocation();
  const d = location.state.data;

  const myDescription = useRef(null);
  const feedback = useRef(null);
  const courseLearn = useRef(null);
  const instructor = useRef(null);
  const footer = useRef(null);

  return (
    <>
      <CourseHeaderData courseInfo={d} />
      <CourseCard courseInfo={d} useref={footer} />
      <CourseInformation courseInfo={d} />
      <div className={style.fullContent}>
        <div className={style.Content}>
          <Scroll
            overview={courseLearn}
            Curriculum={myDescription}
            Instructor={instructor}
            Reviews={feedback}
          />
          <CourseLearn useref={courseLearn} courseInfo={d} />
          <CourseContent courseInfo={d} />
          <Requirement courseInfo={d} />
          <Description
            isInstructor={1}
            useref={myDescription}
            courseInfo={d.descriptions}
          />
          <InstructorsContainer
            useref={instructor}
            instructor={d.instructors}
          />
          <CourseFeedback useref={feedback} courseInfo={d} />
          <ReviewContainter courseInfo={d.reviewers} />
        </div>
      </div>
      <FooterCourses useref={footer} />
    </>
  );
}

export default CourseData;
