import React, { useState } from "react";
import style from "./Header.module.css";
/**
 * @description Make header
 * @returns Jsx conatain header
 */
function Header() {
  const [show, setShow] = useState(1);
  const ShowData = () => {
    if (show) {
      return (
        <header className={style.offers}>
          <div className={style.offer_courses}>
            <div className={style.offer_deadline}>
              <strong>Get Courses From E$169.99 for a Limited time </strong>|
              <span> A special offer for new students</span>
            </div>
            <strong>Ends in 5h 59m 27s.</strong>
          </div>
          <div onClick={() => setShow(0)} className={style.offer_close}>
            X
          </div>
        </header>
      );
    } else return <></>;
  };
  return <>{ShowData()}</>;
}

export default Header;
