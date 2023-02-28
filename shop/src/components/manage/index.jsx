import React from "react";
// import Login from "../login";
import { Routes,Route } from "react-router-dom";
import SideBar from "../sidbar";
import Orders from '../../pages/orders/index'
import Customers from '../../pages/coustomers/index'
import { useStateContext } from "../contexts/ContextProvider";


const Manage = () => {
  const {activeMenu}=useStateContext()
  // const activeMenu = true;
  return (
    <div >
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white shadow-xl p-4">
    <SideBar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg"><SideBar/></div>
      )}
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`
        }>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          navbar
        </div>
      </div>
      
      <div>
        <Routes>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/customers' element={<Customers/>}/>
        </Routes>
      </div>

    </div>
  );
};

export default Manage;
