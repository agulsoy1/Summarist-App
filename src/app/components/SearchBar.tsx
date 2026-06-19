"use client";
import { useAuth } from "@/context/authContext";
import { Book } from "@/types/book";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllBooks } from "@/lib/booksAPI";
import { divide } from "firebase/firestore/pipelines";
import { logOut } from "../services/auth";

export default function SearchBar() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    fetchAllBooks().then(setBooks);
  }, []);

  const filteredBooks =
    searchTerm.length > 0
      ? books.filter((book) =>
          book.title.toLowerCase().startsWith(searchTerm.toLowerCase()),
        )
      : [];

  return (
    <div className="flex justify-end items-center w-full gap-4">
      {user && (
        <div className="relative flex flex-col items-center">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="h-10 w-10 flex items-center justify-center rounded-[50px] bg-black text-white"
          >
            {user?.displayName?.charAt(0)}
          </button>
          {openMenu && (
            <div className="absolute top-12 h-10 w-20 bg-white border-black border-[2px] text-black font-bold flex items-center justify-center">
              <button
                onClick={() => {
                  setOpenMenu(false);
                  logOut();
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      <div className="relative my-5">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for books"
          className="border border-2 border-black/10 px-4 bg-black/5 rounded py-2 pl-3 pr-10 text-xs w-[250px]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm ? (
          <button onClick={() => setSearchTerm("")}>
            <figure className="flex justify-center items-center absolute right-0 top-0 border-l border-l-2 border-l-black/10 w-8 h-full overflow-hidden overflow-hidden cursor-pointer">
              <img
                src="/assets/x-solid-full.svg"
                alt="search"
                className="w-6"
              />
            </figure>
          </button>
        ) : (
          <button>
            <figure className="flex justify-center items-center absolute right-0 top-0 border-l border-l-2 border-l-black/10 w-8 h-full overflow-hidden overflow-hidden cursor-pointer">
              <img
                src="/assets/search_bar_icon.png"
                alt="search"
                className="w-6"
              />
            </figure>
          </button>
        )}

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
      </div>
    </div>
  );
}
