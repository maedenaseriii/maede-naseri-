import "./App.css";
import Cart from "./components/cart";
import Carts from "./components/carts";
import Header from "./components/header";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Manage from "./components/manage";
import Home from "./components/home";
import Detail from "./components/detail";
import CartBasket from "./components/cartbasket";
import Completed from "./components/completed";
import NonCompleted from "./components/notcompleted";
import ProductManaging from "./components/productMnaging";
// import SideBar from "./components/sidbar";

function App() {
  return (
    <div className="App">
      {/* <ProductManaging/> */}
      {/* <Completed/> */}
      {/* <NonCompleted/> */}
      {/* <CartBasket/> */}
      {/* <Detail/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage" element={<Manage/>}/>
        <Route path="/products/:productId" element={<Detail />}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
