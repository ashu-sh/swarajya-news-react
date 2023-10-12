import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function General() {
  const [data, setData] = useState([]);
  const sideEffect = useRef(false);
  useEffect(() => {
    if (sideEffect.current === false) {
      axios
        .get(
          "https://newsapi.org/v2/everything?domains=maharashtratimes.com&apiKey=851e34b2bb3940ecbb427f5977754782"
        )
        .then((response) => {
          setData(response.data.articles);
          console.log(response.data.articles);
        })
        .catch(() => console.log("Error"));
      sideEffect.current = true;
    }
  });
  return (
    <div className="flex-container-new">
      <div className="flex-container-four">
        {data.slice(0, 1).map((res, k) => {
          return (
            <div
              className="flex-item-left-five"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 38%, rgba(254,254,254,0) 30%, rgba(255,255,255,0) 100%),url(${res.urlToImage})`,
              }}
              key={k}
            >
              <p>{res.title}</p>
            </div>
          );
        })}
        {data.slice(1, 2).map((res, k) => {
          return (
            <div
              className="flex-item-right-six"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 38%, rgba(254,254,254,0) 30%, rgba(255,255,255,0) 100%),url(${res.urlToImage})`,
              }}
              key={k}
            >
              <p>{res.title}</p>
            </div>
          );
        })}
        {data.slice(2, 3).map((res, k) => {
          return (
            <div
              className="flex-item-right-seven"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 38%, rgba(254,254,254,0) 30%, rgba(255,255,255,0) 100%),url(${res.urlToImage})`,
              }}
              key={k}
            >
              <p>{res.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default General;
