"use client";

import SideBar from "./components/SideBar";
import LoginModal from "./components/LoginModal";
import SearchBar from "./components/SearchBar";

import { AudioPlayerProvider } from "@/context/audio-player-context";
import { AuthProvider, useAuth } from "@/context/authContext";
import { ModalProvider } from "@/context/ModalContext";
import { PremiumProvider } from "@/context/PremiumContext";
import { useState } from "react";

export default function clientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <AuthProvider>
      <PremiumProvider>
        <ModalProvider>
          <AudioPlayerProvider>
            <div className="flex overflow-x-hidden overflow-y-hidden">
              <div className="w-[240px] flex-shrink-0">
                <SideBar />
              </div>

              <div className="flex-1 flex flex-col mx-auto max-w-[1080px] overflow-x-hidden overflow-y-hidden">
                <div className="relative flex flex-col">
                  <SearchBar />
                  <div className="h-[1px] bg-black/10 mb-5"></div>
                </div>
                {children}
              </div>

              <LoginModal />
            </div>
          </AudioPlayerProvider>
        </ModalProvider>
      </PremiumProvider>
    </AuthProvider>
  );
}
