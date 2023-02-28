import React from "react";
import Header from "../header";

const Detail = ({item}) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div class="mt-[50px] w-screen  justify-around p-6 flex ">
        <div class=" w-96 h-52 bg-gray-200  flex-col justify-between p-2  bg-center ">
          <img src="" alt="detail photo" className="w-96 h-52" />
        </div>

        <div class="p-2 flex ml-96 flex-col items-center w-96 ">
          <p class="text-gray-400 font-light text-xs text-center p-2">
              {item.name}
          </p>

          <h1 class="text-gray-800 text-center mt-1 p-2">Item name</h1>

          <p class="text-center text-gray-800 mt-1 p-2">12 تومان</p>

          <div className="flex justify-between items-center gap-3">
            <div class="inline-flex items-center mt-4 p-2 ">
              <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>

              <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>

              <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button class="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p className="text-start mr-20 mt-16">description</p>
    </div>
  );
};

export default Detail;
