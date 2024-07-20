import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
