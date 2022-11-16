import { Accordion } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import style from "../../style_modules/CoursePage/CustomizeAccordion.module.css";
import CollapseData from "./CollapseData";
/**
 *
 * @param {string} children contain Header of accoridon
 * @param {boolean} expand  flip image
 * @param {lesson} contain lessons name
 * @returns
 */
function CustomToggle({ children, expand, lesson }) {
  const [Rotate, setRotate] = useState(0);
  useEffect(() => setRotate(expand), [expand]);
  const flip = () => {
    setRotate((old) => !old);
  };

  return (
    <div className={style.accordion} onClick={() => flip()}>
      {FlipImage(Rotate)}
      <span className={style.lectures}>{children}</span>
      <span className={style.Time}>{lesson + " Lecture"}</span>
    </div>
  );
}
const FlipImage = (Rotate) => {
  return (
    <img
      alt="img"
      className={Rotate ? style.Route_img : style.Return_img}
      src={require("../../images/Expand.png")}
    />
  );
};

/**
 *
 * @param {*} props conatin array of active key and data about course content
 * @returns
 */
function CustomizeAccordion(props) {
  const [showMore, setShowMore] = useState(0);

  let data = props.arr;
  const check = (index) => {
    if (data.includes(index)) {
      data.splice(data.indexOf(index), 1);
    } else data.push(index);
  };
  const AccordionData = props.data.lectures.map((item, index) => {
    return (
      <div key={index}>
        <div
          className={style.accordion_item}
          onClick={() => {
            check(index);
            props.setControl((old) => old + 1);
          }}
        >
          <CustomToggle lesson={item.lessons.length} expand={props.Expand}>
            {item.title}
          </CustomToggle>
        </div>
        <Accordion.Collapse eventKey={index}>
          <div className={style.collapse}>
            {item.lessons.map((item_lessons, index) => {
              return <CollapseData key={index} lesson={item_lessons} />;
            })}
          </div>
        </Accordion.Collapse>
      </div>
    );
  });
  const DisplayMore = () => {
    let sz = Math.max(0, props.data.lectures.length - 10);
    if (sz > 0 && showMore === 0) {
      return (
        <button className={style.show} onClick={() => setShowMore(1)}>
          {sz + " more section"}
        </button>
      );
    }
  };
  const Filter = () => {
    if (props.control !== 0) {
      return data;
    } else if (props.Expand === true) {
      return [...Array(props.data.lectures.length).keys()];
    } else return [];
  };
  return (
    <>
      <Accordion activeKey={Filter()} className={style.Accordion} alwaysOpen>
        {showMore
          ? AccordionData
          : AccordionData.slice(0, Math.min(10, props.data.lectures.length))}
      </Accordion>
      {DisplayMore()}
    </>
  );
}

export default CustomizeAccordion;
