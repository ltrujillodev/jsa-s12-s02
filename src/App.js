import logo from "./logo.svg";
import "./App.css";
import { Parrafo } from "./components/parrafo";
import { Imagenes } from "./components/imagenes";
import { Videos } from "./components/videos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parrafo />
        <Imagenes />
        <Videos />
      </header>
    </div>
  );
}

export default App;
