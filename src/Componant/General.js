import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BiTrendingUp } from "react-icons/bi";

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
        {data.slice(6, 9).map((res, k) => {
          return (
            <div
              className="flex-item-left-five"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(25,25,25,1) 100%),url(${res.urlToImage})`,
              }}
              key={k}
            >
              <p className="source">
                राज्य-देश&nbsp;
                <a>
                  <BiTrendingUp style={{ fontSize: "24px" }} />
                </a>
              </p>
              <p>{res.title}</p>
              <p className="source5">
                <a style={{ color: "red" }}>|</a>{" "}
                <a href={res.url}>{res.source.name}</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default General;
