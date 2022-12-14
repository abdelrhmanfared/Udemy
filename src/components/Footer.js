import React from "react";
import style from "./Footer.module.css";
/**
 * @description Make Footer
 * @returns Footer
 */
function Footer() {
  return (
    <>
      <div className={style.Footer_Parent}>
        <button className={style.Englis_btn}>
          <img
            className={style.worldicon}
            src={require("../images/world.png")}
            alt="world"
          />
          English
        </button>
        <div className={style.footer1}>
          <div>Udemy Business</div>
          <div>Teach on Udemy</div>
          <div>Get the app</div>
          <div>About us</div>
          <div>Contact us</div>
        </div>
        <div className={style.footer1}>
          <div>Careers</div>
          <div>Blog</div>
          <div>Help and Support</div>
          <div>Affiliate</div>
          <div>Investors</div>
        </div>
        <div className={style.footer1}>
          <div>Terms</div>
          <div>Privacy policy</div>
          <div>Cookie settings</div>
          <div>Sitemap</div>
          <div>Accessibility statement</div>
        </div>
        <div className={style.footer2}>
          <div>
            <button className={style.btn_World}>
              <img
                className={style.worldicon}
                src={require("../images/world.png")}
                alt="world"
              />
              English
            </button>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.udemy_logo}>
          <img
            src={
              "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            }
            alt="lol"
          />
        </div>
        <div className={style.udemy_date}>© 2022 Udemy, Inc.</div>
      </div>
    </>
  );
}

export default Footer;
