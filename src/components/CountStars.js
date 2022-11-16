import React from "react";
/**
 *
 * @param {integer} props - Contain rate - contain people
 * @returns jsx contain rate and stars and people
 */
function CountStars(props) {
  const fullStarIconSrc =
    "https://cdn-icons-png.flaticon.com/512/1828/1828884.png";
  const halfStarIconSrc =
    "https://cdn-icons-png.flaticon.com/512/2107/2107737.png";
  const emptyStarIconSrc = require("../images/star-boeder.png");

  let Rating = parseFloat(props.Rate);
  let Stars = [];
  for (let k = 0; k < 5; k++) {
    Stars.push(
      <img
        style={{
          width: "16px",
          color: "#e59819",
          paddingBottom: 6,
          marginLeft: 1,
          marginRight: 1,
        }}
        key={k}
        alt="stars"
        src={
          Rating >= k + 1
            ? fullStarIconSrc
            : Rating > k
            ? halfStarIconSrc
            : emptyStarIconSrc
        }
      />
    );
  }

  return (
    <>
      <span>{Stars}</span>
    </>
  );
}
export default CountStars;
