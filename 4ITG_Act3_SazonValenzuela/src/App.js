import "./App.scss";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
