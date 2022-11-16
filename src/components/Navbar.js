import React, { useRef } from "react";
import style from "./Navbar.module.css";
import { Link, useSearchParams } from "react-router-dom";
/**
 * @description Create nav par
 * @returns Jsx of Nav par
 */
function Navbar() {
  const inputref = useRef("");
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = () => {
    setSearchParams({ search: inputref.current.value });
  };

  return (
    <div className={style.udemy_nav_par}>
      <Link to="/Udemy">
        <img
          id={style.mobile}
          className={style.udemy_image2}
          alt="Menu Imgae"
          src={require("../images/Menu.png")}
        />
      </Link>
      <Link id={style.pc} className={style.udemy_image} to="/Udemy">
        <img alt="Udemy" src={require("../images/logo.png")} />
      </Link>
      <Link id={style.pc} className={style.links} to="/Udemy">
        Categories
      </Link>
      <section id={style.pc} className={style.Search_bar}>
        <div>
          <div className={style.Search_form}>
            <button type="submit" className={style.search_udemy_submit}>
              <img
                onClick={filter}
                alt="search"
                src={require("../images/loupe.png")}
              />
            </button>
            <input
              className={style.Search}
              ref={inputref}
              type="text"
              placeholder="Search for any thing"
            />
          </div>
        </div>
      </section>
      <Link id={style.pc} className={style.links} to="/Udemy">
        Udemy Business
      </Link>
      <Link id={style.pc} className={style.links} to="/Udemy">
        Tech on Udemy
      </Link>
      <Link id={style.pc} className={style.cart_image} to="/">
        <img alt="UdemyImgae" src={require("../images/cart.png")} />
      </Link>
      <button id={style.pc} className={style.login_btn}>
        Log in
      </button>

      <button id={style.pc} className={style.signup_btn}>
        Sign up
      </button>
      <Link id={style.pc} className={style.world_btn} to="/Udemy">
        <img alt="UdemyImgae" src={require("../images/world.png")} />
      </Link>
      <Link id={style.mobile} className={style.logo_image} to="/Udemy">
        <img alt="UdemyImage" src={require("../images/logo.png")} />
      </Link>
    </div>
  );
}

export default Navbar;
