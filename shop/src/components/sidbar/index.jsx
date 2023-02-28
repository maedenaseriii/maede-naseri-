import React from "react";
import { Link } from "react-router-dom";
import {IoMdCloseCircleOutline} from 'react-icons/io'

const SideBar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to='/' onClick={()=>{}} className=' items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white'>
        
                <span>پنل مدیریت فروشگاه</span>
            </Link>
            <IoMdCloseCircleOutline className="text-2xl mt-5" >
                <button type="button" onClick={()=>{}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden '>
                </button>
            </IoMdCloseCircleOutline>
          </div>
          <div className="mt-36">
            <h4 className=" mb-14 ">کالاها</h4>
            <h4 className=" mb-14 ">موجودی و قیمت ها </h4>
            <h4>سفارش</h4>
          </div>
          <div className="mt-40 text-red-900 hover:text-red-500">
            <Link to='/'>بازگشت به سایت</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
