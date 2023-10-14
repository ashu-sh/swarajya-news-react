import React, { useContext, useEffect, useState } from "react";
import { Channel } from "../Context/Channel";
import ScaleLoader from "react-spinners/ScaleLoader";
// import { Button, Card } from "react-bootstrap";

function Cardgrid() {
  const [news] = useContext(Channel);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setloader(false);
  }, []);
  return (
    <div className="cards">
      {loader ? (
        <ScaleLoader color="#36d7b7" />
      ) : (
        <div>
          {news.slice(1, 2).map((res, i) => {
            return (
              <>
                <div className="flex-container2" key={i}>
                  <div
                    className="flex-item-main"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(25,25,25,1) 100%),url(${res.urlToImage})`,
                    }}
                  >
                    <p className="source">
                      Top Stories&nbsp; | &nbsp;
                      <a>
                        {new Date(res.publishedAt).toLocaleString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </a>
                    </p>
                    <p>{res.title}</p>
                    <p className="source">
                      <a style={{ color: "red" }}>|</a> read more at{" "}
                      <a href={res.url}>{res.source.name}</a>
                    </p>
                  </div>
                  <div className="flex-container">
                    {news.slice(2, 3).map((res, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            className="flex-item-left"
                            style={{
                              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(25,25,25,1) 100%),url(${res.urlToImage})`,
                            }}
                          >
                            <p>{res.title}</p>
                            <p className="source2">
                              <a href={res.url}>
                                <a style={{ color: "red" }}>|</a> read more...
                              </a>
                            </p>
                          </div>
                        </>
                      );
                    })}
                    {news.slice(3, 4).map((res, i) => {
                      return (
                        <div
                          key={i}
                          className="flex-item-right"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(25,25,25,1) 100%),url(${res.urlToImage})`,
                          }}
                        >
                          <p>{res.title}</p>
                          <p className="source2">
                            <a href={res.url}>
                              <a style={{ color: "red" }}>|</a> read more...
                            </a>
                          </p>
                        </div>
                      );
                    })}
                    {news.slice(4, 5).map((res, i) => {
                      return (
                        <div
                          key={i}
                          className="flex-item-left"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(25,25,25,1) 100%),url(${res.urlToImage})`,
                          }}
                        >
                          <p>{res.title}</p>
                          <p className="source3">
                            <a href={res.url}>
                              <a style={{ color: "red" }}>|</a> read more...
                            </a>
                          </p>
                        </div>
                      );
                    })}
                    {news.slice(5, 6).map((res, i) => {
                      return (
                        <div
                          key={i}
                          className="flex-item-left"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(25,25,25,1) 100%),url(${res.urlToImage})`,
                          }}
                        >
                          <p>{res.title}</p>
                          <p className="source2">
                            <a href={res.url}>
                              <a style={{ color: "red" }}>|</a> read more...
                            </a>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cardgrid;
