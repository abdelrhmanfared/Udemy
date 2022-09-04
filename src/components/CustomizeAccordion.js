import { React, useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import style from "./CustomizeAccordion.module.css";
import CollapseData from "./CollapseData";
function CustomToggle({ children, eventKey }) {
  const [Rotate, setRotate] = useState(0);
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    console.log("totally custom!");
    // console.log(Rotate);
    // console.log(eventKey);
    setRotate((old) => ({ Rotate: !old.Rotate }));
  });
  const FlipImage = () => {
    if (Rotate.Rotate === true)
      return (
        <img
          alt="img"
          className={style.Route_img}
          src={require("./images/Expand.png")}
        />
      );
    else
      return (
        <img
          alt="img"
          className={style.Return_img}
          src={require("./images/Expand.png")}
        />
      );
  };
  return (
    <div className={style.accordion} onClick={decoratedOnClick}>
      {FlipImage()}
      <span>{children}</span>
      <span className={style.Time}>{"2 Lecture . 6min"}</span>
    </div>
  );
}
//content[0][1]
function CustomizeAccordion(props) {
  const [showMore, setShowMore] = useState(0);
  let data = props.arr;
  const check = (index) => {
    if (data.includes(index)) {
      data.splice(data.indexOf(index), 1);
    } else data.push(index);
  };
  const AccordionData = props.data.content.map((item, index) => {
    return (
      <Card key={index}>
        <Card.Header
          onClick={() => {
            check(index);
            props.setControl((old) => old + 1);
          }}
        >
          <CustomToggle eventKey={index}>{item[0][0]}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={index}>
          <Card.Body>
            {item[1].map((d, index) => {
              return <CollapseData key={index} lesson={d} />;
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });
  const DisplayMore = () => {
    let sz = Math.max(0, props.data.lectures.length - 10);
    console.log(sz);
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
      console.log(showMore);
      return [...Array(props.data.lectures.length).keys()];
    } else return [];
  };
  return (
    <>
      <Accordion activeKey={Filter()} className={style.lol} alwaysOpen>
        {showMore
          ? AccordionData
          : AccordionData.slice(0, Math.min(10, props.data.lectures.length))}
      </Accordion>
      {DisplayMore()}
    </>
  );
}

export default CustomizeAccordion;
/***/
