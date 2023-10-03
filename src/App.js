import "./App.css";
import Cardgrid from "./Componant/Cardgrid";
import Header from "./Componant/Header";
import Source from "./Context/Source";

function App() {
  return (
    <div className="App">
      <Source>
        <Header />
        <Cardgrid />
      </Source>
    </div>
  );
}

export default App;
