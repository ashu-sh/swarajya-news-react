import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Channel } from "./Channel";
import Preloader from "../Componant/Preloader";

function Source({ children }) {
  const [news, getNews] = useState([]);
  const [loader, setloader] = useState(true);
  const sideEffect = useRef(false);

  useEffect(() => {
    if (sideEffect.current === false) {
      axios
        .get(
          "https://newsapi.org/v2/everything?domains=maharashtratimes.com&apiKey=851e34b2bb3940ecbb427f5977754782"
        )
        .then((response) => {
          getNews(response.data.articles);
          setloader(false);
        })
        .catch(() => {
          document.write(`<h2>Please Check Your Internet Connection !</h2>`);
          setloader(true);
        });

      sideEffect.current = true;
    }
  }, []);

  return (
    <div>
      {loader ? (
        <Preloader />
      ) : (
        <Channel.Provider value={[news, getNews]}>{children}</Channel.Provider>
      )}
    </div>
  );
}
export default Source;
