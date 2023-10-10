import { useContext } from "react";
import "./App.css";
import Cardgrid from "./Componant/Cardgrid";
import Header from "./Componant/Header";
import Heading from "./Componant/Heading";
import Source from "./Context/Source";

function App() {
  return (
    <div className="App">
      <Source>
        <Header />
        <Heading />
        <Cardgrid />
      </Source>
    </div>
  );
}

export default App;
