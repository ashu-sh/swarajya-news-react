import axios from "axios";
import React, { Children, useEffect, useState } from "react";
import { Channel } from "./Channel";

function Source({ children }) {
  const [news, getNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=maharashtratimes.com&apiKey=851e34b2bb3940ecbb427f5977754782"
      )
      .then((response) => {
        getNews(response.data.articles);
      });
  }, []);

  return (
    <div>
      <Channel.Provider value={[news, getNews]}>{children}</Channel.Provider>
    </div>
  );
}
export default Source;
