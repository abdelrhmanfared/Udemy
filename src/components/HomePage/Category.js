import React from "react";

function Category({ name, path }) {
  return (
    <div className="col-md-4 col-sm-12 col-xl-3">
      <figure>
        <img
          alt="Design categories"
          className=" mt-2"
          style={{ width: "95%", height: 300 }}
          src={path}
        />
      </figure>
      <figcaption>
        <h6>
          <strong>{name}</strong>
        </h6>
      </figcaption>
    </div>
  );
}

export default Category;
