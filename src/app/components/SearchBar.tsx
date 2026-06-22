"use client";
import { useAuth } from "@/context/authContext";
import { Book } from "@/types/book";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllBooks } from "@/lib/booksAPI";
import { logOut } from "../services/auth";
import { usePathname } from "next/navigation";
import SearchTerm from "./SearchTerm";

export default function SearchBar() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    fetchAllBooks().then(setBooks);
  }, []);

  const filteredBooks =
    searchTerm.length > 0
      ? books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : [];

  return (
    <>
      <div className="flex justify-start md:justify-end items-center w-full gap-4">
        {pathname === "/" ? (
          ""
        ) : (
          <Link href="/" className="flex justify-start w-full mr-auto hidden md:block">
            <img src="/assets/logo.png" width={200} alt="" />
          </Link>
        )}

        {user && (
          <div className="relative flex flex-col items-center order-1 md:order-2">
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

        <div className="relative my-5 order-2 md:order-1">
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
          <SearchTerm
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredBooks={filteredBooks}
          />
        </div>
      </div>
    </>
  );
}
