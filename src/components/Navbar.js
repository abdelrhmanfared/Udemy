import React from "react";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={style.udemy_nav_par}>
      <img
        id={style.mobile}
        className={style.udemy_image2}
        alt="Menu Imgae"
        src={require("./images/Menu.png")}
      />
      <a id={style.pc} className={style.udemy_image} href="/">
        <img alt="Udemy Image" src={require("./images/logo.png")} />
      </a>
      <a id={style.pc} className={style.links} href="/">
        Categories
      </a>
      <section id={style.pc} className={style.Search_bar}>
        <form action="lol" className={style.Search_form}>
          <button type="submit" className={style.search_udemy_submit}>
            <i className="fa fa_search"></i>
          </button>
          <input
            className={style.Search}
            type="text"
            placeholder="Search for any thing"
          />
        </form>
      </section>
      <a id={style.pc} className={style.links} href="/">
        Udemy Business
      </a>
      <a id={style.pc} className={style.links} href="/">
        Tech on Udemy
      </a>
      <a id={style.pc} className={style.cart_image} href="/">
        <img alt="Udemy Imgae" src={require("./images/cart.png")} />
      </a>
      <button id={style.pc} className={style.login_btn}>
        Log in
      </button>

      <button id={style.pc} className={style.signup_btn}>
        Sign up
      </button>
      <a id={style.pc} className={style.world_btn} href="/">
        <img alt="Udemy Imgae" src={require("./images/world.png")} />
      </a>
      <a id={style.mobile} className={style.logo_image} href="/">
        <img alt="Udemy Image" src={require("./images/logo.png")} />
      </a>
    </nav>
  );
}

export default Navbar;
