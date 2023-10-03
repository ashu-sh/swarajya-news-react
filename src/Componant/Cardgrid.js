import React, { useContext, useEffect } from "react";
import { Channel } from "../Context/Channel";
// import { Button, Card } from "react-bootstrap";

function Cardgrid() {
  const [news, getNews] = useContext(Channel);

  useEffect(() => {
    console.log(news);
    getNews(news);
  }, []);

  return (
    <div className="card-grid">
      {news.map((res, i) => {
        return (
          <div className="grid">
            <img className="img" src={res.urlToImage}></img>
            <p>{res.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cardgrid;
