import React from "react";
import style from "./CollapseData.module.css";
function CollapseData(props) {
  return (
    <div className={style.container}>
      <img
        alt="play"
        className={style.play}
        src={require("./images/Play.png")}
      />
      <span className={style.data}>{props.lesson}</span>
      <span className={style.time}>04:07</span>
    </div>
  );
}

export default CollapseData;
