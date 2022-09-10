import React from "react";
import Category from "./Category";

function Categories() {
  const Data = {
    Design:
      "https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg",
    Development:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
    Marketing:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
    "IT and Software":
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
    "Personal Development":
      "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
    Business:
      "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
    Photography:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
    Music:
      "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
  };
  const category = [];
  Object.keys(Data).forEach((k, index) => {
    category.push(<Category key={index} name={k} path={Data[k]} />);
  });
  return (
    <section className="udemy-Category d-flex justify-content-center ">
      <div className="container-fluid ms-10  " style={{ width: 1330 }}>
        <h4>
          <strong>Top categories</strong>
        </h4>
        <div className=" row d-flex flex-wrap">{category}</div>
      </div>
    </section>
  );
}

export default Categories;
