import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import "./App.css";

function App() {

  return (
    <div className="max_width">
      <Routes>
        <Route path="/" exact element={<Home />} ></Route>
        <Route path="/country/:name" exact element={<CountryDetails />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
