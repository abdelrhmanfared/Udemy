import React from "react";
import style from "../../style_modules/CoursePage/FooterCourses.module.css";
function FooterCourses({ useref }) {
  return (
    <div ref={useref} id="Footer" className={style.footer}>
      <div className={style.footer_title}>
        Top companies choose Udemy Business to build in-demand career skills.
      </div>
      <div className={style.brand_img}>
        <img
          className={style.img}
          src={"https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"}
          alt="brand"
        />
        <img
          className={style.img}
          src={"https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"}
          alt="brand"
        />
        <img
          className={style.img}
          src={"https://s.udemycdn.com/partner-logos/v4/box-light.svg"}
          alt="brand"
        />
        <img
          className={style.img}
          src={"https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"}
          alt="brand"
        />
        <img
          className={style.img}
          src={"https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"}
          alt="brand"
        />
      </div>
    </div>
  );
}

export default FooterCourses;
