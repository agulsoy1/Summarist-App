"use client";

import SideBar from "./components/SideBar";
import LoginModal from "./components/LoginModal";
import SearchBar from "./components/SearchBar";

import { AudioPlayerProvider } from "@/context/audio-player-context";
import { AuthProvider, useAuth } from "@/context/authContext";
import { ModalProvider } from "@/context/ModalContext";
import { PremiumProvider } from "@/context/PremiumContext";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";

export default function clientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (!loading && !user && pathname !== "/") {
      router.replace("/");
    }
  }, [user, loading, pathname, router]);

  if (loading) return null;

  return (
    <PremiumProvider>
      <ModalProvider>
        <AudioPlayerProvider>
          <div className="flex overflow-x-hidden">
            {user && (
              <div className="hidden md:block w-[240px] flex-shrink-0">
                <SideBar />
              </div>
            )}
            {user && !sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden fixed top-4 right-4 z-100"
              >
                <FiMenu size={24} />
              </button>
            )}

            {user && sidebarOpen && (
              <div className="fixed inset-0 z-50">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute right-5 top-5 z-[70]"
                >
                  <img
                    src="/assets/x-solid-full-white.svg"
                    width={30}
                    className="block"
                    alt="close"
                  />
                </button>
                <SideBar mobile={true} setSidebarOpen={setSidebarOpen} />
              </div>
            )}
            <div className=" relative flex-1 min-w-0 flex flex-col mx-auto w-full sm:w-[400px] max-w-screen-xl px-4 sm:px-6 lg:px-10">
              <div className=" flex flex-col">
                <SearchBar/>
                <div className="h-[1px] bg-black/10 mb-5"></div>
              </div>
              {children}
            </div>
            <LoginModal />
          </div>
        </AudioPlayerProvider>
      </ModalProvider>
    </PremiumProvider>
  );
}
