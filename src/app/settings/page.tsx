"use client";
import { useAuth } from "@/context/authContext";
import { useModal } from "@/context/ModalContext";
import { usePremium } from "@/context/PremiumContext";
import Link from "next/link";

export default function Settings() {
  const { setOpenModal } = useModal();
  const { user } = useAuth();
  const { isPremium } = usePremium();

  return (
    <div className="flex flex-col items-start my-5">
      <h1 className="text-[32px] font-bold">Settings</h1>
      <div className="w-full h-[1px] bg-black/10 my-5"></div>
      <div>
        <h1 className="font-bold text-[18px] mb-1">Your Subscription plan</h1>
        <p className="text-[16px] mb-1">{isPremium ? "Premium" : "Basic"}</p>
        {user ? (
          <Link href="/account/subscription">
            <button className="bg-green-500/80 px-3 py-2 rounded cursor-pointer">
              Upgrade to Premium
            </button>
          </Link>
        ) : (
            <button onClick={() => setOpenModal(true)} className="bg-green-500/80 px-3 py-2 rounded cursor-pointer">
              Upgrade to Premium
            </button>
        )}
      </div>
      <div className="w-full h-[1px] bg-black/10 my-5"></div>
      <div>
        <h1 className="font-bold text-[18px]">Email</h1>
        <p className="text-[16px]">alex@email.com</p>
      </div>
    </div>
  );
}
