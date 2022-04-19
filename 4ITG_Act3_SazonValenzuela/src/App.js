import "./App.scss";
import Login from "./components/Login";
import Register from "./components/Register";
import Portal from "./components/Portal";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="portal" element={<Portal />} />
      </Routes>
    </div>
  );
}

export default App;
