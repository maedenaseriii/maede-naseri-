import React, { useState } from "react";
import Carts from "../carts";
import Header from "../header";

const Home = () => {
  let localStorageCart = JSON.parse(localStorage.getItem("cartData"));
  localStorageCart = localStorageCart || [];

  const [cart, setCart] = useState(localStorageCart);
  return (
    <div>
      <Header />
      <Carts setCart={setCart} cart={cart} />
    </div>
  );
};

export default Home;
