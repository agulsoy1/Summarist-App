import { createContext, useContext, useState } from "react";

type ModalContextType = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (

  <ModalContext.Provider value={{ openModal, setOpenModal }}>
    {children}
  </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within ModalProvider");
  }
  return context;
}
