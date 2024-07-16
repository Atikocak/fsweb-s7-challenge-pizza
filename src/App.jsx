import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;
