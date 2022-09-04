import React from "react";
/**
 *
 * @param {integer} props - Contain rate - contain people
 * @returns jsx contain rate and stars and people
 */
function CountStars(props) {
  let Rating = props.Rate;
  let Stars = [];
  for (let k = 1; k <= 5; k++) {
    if (Rating >= k)
      Stars.push(<i key={k} className="fa fa-star" aria-hidden="true"></i>);
    else if (Rating >= 0.2)
      Stars.push(<i key={k} className="fas fa-star-half-alt"></i>);
    else Stars.push(<i key={k} className="fa fa-star-o"></i>);
  }

  return (
    <>
      <span style={{ color: "#f3ca8c", paddingRight: 6 }}>{Rating}</span>
      <span style={{ color: "#f3ca8c", paddingRight: 6 }}>{Stars}</span>
      <span style={{ color: "#cec0fc", paddingRight: 6 }}>
        {"(" + props.rate_count + ")"}
      </span>
    </>
  );
}
export default CountStars;
