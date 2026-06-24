import { AuthProvider } from "@/context/authContext";
import { ModalProvider } from "@/context/ModalContext";
import { PremiumProvider } from "@/context/PremiumContext";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <PremiumProvider>
        <ModalProvider>{children}</ModalProvider>
      </PremiumProvider>
    </AuthProvider>
  );
}
