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
    <div className="flex flex-col my-5">
      <h1 className="text-[32px] font-bold">Settings</h1>
      <div className="w-full h-[1px] bg-black/10 my-5"></div>
      <div>
        {user ? (
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-[18px] mb-1">
              Your Subscription plan
            </h1>
            <p className="text-[16px] mb-1">
              {isPremium ? "Premium" : "Basic"}
            </p>
            <Link href="/account/subscription">
              <button className="bg-green-500/80 px-3 py-2 rounded cursor-pointer">
                Upgrade to Premium
              </button>
            </Link>
            <div className="w-full h-[1px] bg-black/10 my-5"></div>
            <div>
              <h1 className="font-bold text-[18px]">Email</h1>
              <p className="text-[16px]">{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img src="/assets/login.png" alt="" width={500} />
            <div className="text-[24px] font-bold mb-5">
              Login to see your account details
            </div>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-green-500/80 px-20 py-2 rounded cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
