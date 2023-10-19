import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function Preloader() {
  return (
    <div style={{ padding: "20rem" }}>
      <ScaleLoader color="#36d7b7" />
    </div>
  );
}

export default Preloader;
