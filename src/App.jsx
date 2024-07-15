import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroPage from "./components/pages/HeroPage";
import OrderPage from "./components/pages/OrderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
}

export default App;
