"use client";

import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Book } from "@/types/book";
import { useAuth } from "@/context/authContext";

type saveButtonProps = {
  book: Book;
};

export default function SaveButton({ book }: saveButtonProps) {
  const [saveBook, setSaveBook] = useState(false);
  const {user} = useAuth();

  useEffect(() => {
    const checkIfSaved = async () => {
      if (!user) return;

      const docRef = doc(db, "users", user.uid, "library", book.id);
      const snapshot = await getDoc(docRef);

      setSaveBook(snapshot.exists());
    };

    checkIfSaved();
  }, [user, book.id]);

  const toggleLibrary = async () => {
    if (!user) {
      alert("Please log in");
      return;
    }

    const docRef = doc(db, "users", user.uid, "library", book.id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      await deleteDoc(docRef);
      setSaveBook(false);
    } else {
      await setDoc(docRef, {
        id: book.id,
        title: book.title,
        subTitle: book.subTitle,
        author: book.author,
        imageLink: book.imageLink,
        averageRating: book.averageRating,
      });
      setSaveBook(true)
    }
  };

  return (
    <div className="my-5 text-[18px] cursor-pointer text-[#0365f2] hover:text-[#044298] transition duration-300 font-bold">
      <button onClick={() => toggleLibrary()}>
        <div className="flex items-center gap-1">
          <img
            src={
              saveBook
                ? "/assets/bookmark-solid-full.svg"
                : "/assets/bookmark-regular-full.svg"
            }
            className="w-[30]"
            alt=""
          />
          {saveBook ? "Saved in My Library" : "Add title to My Library"}
        </div>
      </button>
    </div>
  );
}
