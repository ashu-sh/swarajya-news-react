import { useContext } from "react";
import "./App.css";
import Cardgrid from "./Componant/Cardgrid";
import Header from "./Componant/Header";
import Heading from "./Componant/Heading";
import Source from "./Context/Source";
import General from "./Componant/General";
import Newsheading from "./Componant/Newsheading";

function App() {
  return (
    <div className="App">
      <Source>
        <Header />
        <Heading />
        <Cardgrid />
        <br />
        <Newsheading />
        <General />
      </Source>
    </div>
  );
}

export default App;
