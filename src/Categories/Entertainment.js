import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BiTrendingUp } from "react-icons/bi";

function Entertainment() {
  const [Entertainment, setEntertainment] = useState([]);
  const sideEffects = useRef(false);

  useEffect(() => {
    if (sideEffects.current === false) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=bollywood&domains=indiatimes.com&apiKey=97c1e55e6b5d4a869642a140876c9327"
        )
        .then((response) => setEntertainment(response.data.articles))
        .catch(() => {
          console.log("error");
        });
      sideEffects.current = true;
    }
  }, []);
  return (
    <div className="flex-container-new">
      <div className="flex-container-four">
        {Entertainment.slice(4).map((res, k) => {
          return (
            <div
              className="flex-item-left-five"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(25,25,25,1) 100%),url(${res.urlToImage})`,
              }}
              key={k}
            >
              <p className="source">
                Entertainment Trending&nbsp;&nbsp;
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

export default Entertainment;
