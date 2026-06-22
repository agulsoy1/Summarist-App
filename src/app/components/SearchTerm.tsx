"use client";

import { fetchAllBooks } from "@/lib/booksAPI";
import { Book } from "@/types/book";
import Link from "next/link";
import { useEffect, useState } from "react";

type searchTermProps = {
    searchTerm : string;
    setSearchTerm : React.Dispatch<React.SetStateAction<string>>
    filteredBooks : Book[]
}

export default function SearchTerm({searchTerm, setSearchTerm, filteredBooks}: searchTermProps) {

  return (
    <>
      {searchTerm && (
        <div className="absolute top-full right-0 mt-10 w-100 bg-white border border-black/10 rounded shadow-md z-50">
          {filteredBooks.slice(0, 5).map((book) => (
            <Link
              key={book.id}
              href={`/book-details/${book.id}`}
              className="block px-3 py-2 text-xs hover:bg-black/5"
              onClick={() => setSearchTerm("")}
            >
              <div className="flex justify-start items-center w-90">
                <img src={book.imageLink} alt="" className="m-5" width={80} />
                <div className="flex flex-col">
                  <div className="text-[16px] font-bold">{book.title}</div>
                  <div className="text-[14px] text-black/40 py-1">
                    {book.author}
                  </div>
                  <div className="flex gap-1">
                    <img
                      src="/assets/clock-regular-full.svg"
                      alt=""
                      className="opacity-40"
                      width={20}
                    />
                    <div className="text-[14px] text-black/40">03:24</div>
                  </div>
                </div>
              </div>
              <div className="h-[.4px] bg-black/20"></div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
