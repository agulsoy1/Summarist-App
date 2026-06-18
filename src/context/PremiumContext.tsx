import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
import { getPremiumStatus } from "@/app/account/getPremiumStatus";
import { initFirebase } from "@/app/firebase";

type PremiumContextType = {
  isPremium: boolean;
  loading: boolean;
};

const PremiumContext = createContext<PremiumContextType | null>(null);

export function PremiumProvider({ children }: { children: React.ReactNode }) {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const app = initFirebase();

  useEffect(() => {
    if (!user) {
      setIsPremium(false);
      setLoading(false);
      return;
    }

    const checkPremium = async () => {
        setLoading(true)

      try {
        const premiumStatus = await getPremiumStatus(app);
        setIsPremium(premiumStatus);
      } finally {
        setLoading(false);
      }
    };

    checkPremium();
  }, [user]);

  return (
    <PremiumContext.Provider value={{ isPremium, loading }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  const context = useContext(PremiumContext);
  if (!context) {
    throw new Error("Must use usePremium within PremiumProvider");
  }
  return context;
}
