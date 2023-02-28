import React from "react";
import Header from "../header";

const CartBasket = () => {
  
  return (
    <>
    <Header/>
    <div className="w-screen mx-auto mt-10 flex-row-reverse">
      <div className="flex justify-center shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">سبد خرید </h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              کالا ها
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              تعداد
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              قیمت
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">حذف</h3>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              {/* product */}
              <div className="w-20">
               
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Iphone 6S</span>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input
                className="mx-2 border text-center w-8"
                type="text"
                value="1"
              />

              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
              $400.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
            <a>حذف</a>
            </span>
          </div>
                <div className="flex justify-between items-center mt-16">
                  <div className="flex gap-3">
                  <p>جمع:</p><p>899تومان</p>
                  </div>
                    <button className=" bg-green-700 p-3 rounded-lg text-white border-none">نهایی کردت سبد خرید</button>
                </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartBasket;
