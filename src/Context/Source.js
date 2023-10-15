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
          "https://newsapi.org/v2/everything?domains=maharashtratimes.com&apiKey=97c1e55e6b5d4a869642a140876c9327"
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
