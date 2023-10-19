import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { BiTrendingUp } from "react-icons/bi";
function Sports() {
  const [sportsData, setSportsData] = useState([]);
  const sideEffect = useRef(false);
  useEffect(() => {
    if (sideEffect.current === false) {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=851e34b2bb3940ecbb427f5977754782"
        )
        .then((response) => setSportsData(response.data.articles))
        .catch((error) => {
          console.log(error);
        });
      sideEffect.current = true;
    }
  }, []);
  return (
    <div className="flex-container-new">
      <div className="flex-container-four">
        {sportsData.map((res, k) => {
          return (
            <div
              className="flex-item-left-five"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(25,25,25,1) 100%),url(${res.urlToImage})`,
              }}
              key={k}
            >
              <p className="source">
                Sports Trending&nbsp;&nbsp;
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

export default Sports;
