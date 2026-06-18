"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { useAuth } from "@/context/authContext";
import { Book } from "@/types/book";
import LibrayLoading from "./loading";

export default function Library() {
  const [savedBook, setSavedBook] = useState<Book[]>([]);
  const { user, loading } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      if(loading){
        return <LibrayLoading/>
      }

      if (!user) {
        setSavedBook([]);
        return;
      }
      const snapshot = await getDocs(
        collection(db, "users", user.uid, "library"),
      );

      const books = snapshot.docs.map((doc) => ({ ...doc.data() })) as Book[];

      setSavedBook(books);
    };

    fetchBooks();
  }, [user]);

  return (
    <div className="flex flex-col">
      <div className="w-screen">
        <section>
          <h1 className="font-bold text-xl mb-4">Saved Books</h1>
          <p className="text-sm opacity-65 mb-4"># items</p>
          <BookList books={savedBook} />
        </section>
        <section>
          <h1 className="font-bold text-xl mb-4">Finished</h1>
          <p className="text-sm opacity-65 mb-4"># items</p>
          <div className="flex">
            <div className="flex-col">No Books have been finished yet.</div>
          </div>
        </section>
      </div>
    </div>
  );
}
