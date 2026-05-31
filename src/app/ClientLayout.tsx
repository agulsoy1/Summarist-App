"use client";

import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import LoginModal from "./components/LoginModal";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AUthProvider } from "./AuthContext";
import SearchBar from "./components/SearchBar";

export default function clientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const isLogin = !!user;

  return (
    <AUthProvider>
      <div className="flex overflow-x-hidden overflow-y-hidden">
        <SideBar setOpenModal={setOpenModal} />
        <div className="flex-1 min-w-0 flex flex-col justify-center min-h-screen">
          <SearchBar />
          <div className="w-full flex justify-center items-center">
            {children}
          </div>
        </div>
        <LoginModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </AUthProvider>
  );
}