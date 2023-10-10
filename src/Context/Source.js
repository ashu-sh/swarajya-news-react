import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Channel } from "./Channel";

function Source({ children }) {
  const [news, getNews] = useState([]);
  const sideEffect = useRef(false);

  useEffect(() => {
    if (sideEffect.current === false) {
      axios
        .get(
          "https://newsapi.org/v2/everything?domains=lokmat.com&apiKey=851e34b2bb3940ecbb427f5977754782"
        )
        .then((response) => {
          getNews(response.data.articles);
        })
        .catch(() => {
          document.write("Server Not Found !");
        });

      sideEffect.current = true;
    }
  }, []);

  return (
    <div>
      <Channel.Provider value={[news, getNews]}>{children}</Channel.Provider>
    </div>
  );
}
export default Source;
