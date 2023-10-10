import React from "react";

function Heading() {
  return (
    <div className="header">
      <div className="title">Welcome to SwarajyaNews.com</div>
      <div className="Date">
        {new Date().toLocaleString("en-IN", {
          day: "numeric",
          month: "long",
          weekday: "long",
        })}
      </div>
    </div>
  );
}

export default Heading;
