import React from "react";

export default function SearchBar() {
  return (
    <div className="border-b w-full flex justify-end items-center">
      <div className="relative my-5">
        <input
          type="text"
          placeholder="Search for books"
          className="border border-2 border-black/10 px-4 bg-black/5 rounded py-2 pl-3 pr-10 text-xs w-[250px]"
        />
        <button>
          <figure className="flex justify-center items-center absolute right-0 top-0 border-l border-l-2 border-l-black/10 w-8 h-full overflow-hidden overflow-hidden cursor-pointer">
            <img
              src="/assets/search_bar_icon.png"
              alt="search"
              className="w-6"
            />
          </figure>
        </button>
      </div>
    </div>
  );
}
