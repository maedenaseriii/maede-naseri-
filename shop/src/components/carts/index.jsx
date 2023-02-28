import React, { useEffect } from "react";
import Cart from "../cart";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../redux/feature/cart-slice";
// import {IoCaretBack} from 'react-icons/io'

const Carts = () => {
  const { products, loading } = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <section className="py-10 bg-gray-100">
      {/* <IoCaretBack/> */}
      <p className="text-right px-40 " onClick={() => {}}>
        تیشرت ها
      </p>
      <div className=" mx-auto grid  max-w-6xl  grid-cols-1 gap-12 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        {products.map((item) => (
          <Cart  key={item.id} id={item.id} item={item} />
        ))}
      </div>
    </section>
    
  );
};

export default Carts;
