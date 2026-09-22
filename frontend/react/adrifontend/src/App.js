import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import NovedadDetalle from "./components/NovedadDetalle";

function App() {

  return (
    <BrowserRouter>


    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route
        path="/novedades/monotributo-2026"
        element={<NovedadDetalle />}
      />
    </Routes>


    

        </BrowserRouter>

  );


}

export default App;
