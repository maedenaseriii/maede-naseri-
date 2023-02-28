import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <section className="">
      <div className="flex  justify-center items-center ">
        <input
          type="text"
          placeholder=" سرچ کنید ..."
          className="w-72 bg-gray-100 p-1 ml-1"
        />
    <div className="bg-gray-100 p-2">
    <AiOutlineSearch />
    </div>
      </div>
    </section>
  );
};

export default Search;
