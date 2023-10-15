import "./App.css";
import Cardgrid from "./Componant/Cardgrid";
import Header from "./Componant/Header";
import Heading from "./Componant/Heading";
import Source from "./Context/Source";
import General from "./Componant/General";
import Newsheading from "./Componant/Newsheading";
import International from "./Componant/International";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sports from "./Categories/Sports";
import Entertainment from "./Categories/Entertainment";

function App() {
  return (
    <div className="App">
      <Source>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={[
                <Header />,
                <Heading />,
                <Cardgrid />,
                <br />,
                <Newsheading />,
                <General />,
                <br />,
                <International />,
              ]}
            ></Route>
            <Route
              path="sports"
              element={[<Header />, <Heading />, <Sports />]}
            />
            <Route
              path="Entertainment"
              element={[<Header />, <Heading />, <Entertainment />]}
            />
          </Routes>
        </BrowserRouter>
      </Source>
    </div>
  );
}

export default App;
