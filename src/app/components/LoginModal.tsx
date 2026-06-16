"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { logIn, signUp, guestLogin, googleLogin } from "../services/auth";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/ModalContext";

type SideBarProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginModal() {
  const {openModal, setOpenModal} = useModal();
  // const { user, loading } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMode, setLoginMode] = useState(true);
  const [authError, setAuthError] = useState("");
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAuthError("");

    try {
      if (loginMode) {
        await logIn(email, password);
        router.push("/")
      } else {
        await signUp(email, password, firstName, lastName);
      }
      setOpenModal(false);
    } catch (error: any) {
      console.error("Auth error: ", error);

      if (error.code === "auth/invalid-credential") {
        setAuthError("Incorrect email or password.");
      } else if (error.code === "auth/user-not-found") {
        setAuthError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setAuthError("Wrong password.");
      } else if (error.code === "auth/email-already-in-use") {
        setAuthError("Email already in use.");
      } else {
        setAuthError("Something went wrong. Please try again.");
      }
    }
  }

  useEffect(() => {
    if (!openModal) {
      return;
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setAuthError("");
  }, [openModal]);

  if (!openModal) {
      return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-5 flex flex-col items-center bg-gray-400 rounded-lg px-15 py-20 text-[20px]"
      >
        <h2 className="text-[25px] font-bold mb-5">
          {loginMode ? "Login" : "Sign Up"}
        </h2>

        <button
          type="button"
          onClick={async () => {
            try {
              await googleLogin();
              setOpenModal(false);
            } catch (error) {
              console.error("Google login error,", error);
            }
          }}
          className="border-black border-[1px] bg-white text-black px-3 py-2 rounded-[50px] w-full"
        >
          <div className="flex gap-4">
            <img src="/assets/google_logo.svg" alt="" className="w-7" />
            Login with Google
          </div>
        </button>

        <div className="w-full flex items-center justify-center gap-4 my-5">
          <div className="w-1/3 text-[15px] h-[1px] bg-black/15"></div>
          <div className="text-[15px] whitespace-nowrap">or</div>
          <div className="w-1/3 text-[15px] h-[1px] bg-black/15"></div>
        </div>

        {!loginMode ? (
          <div className="flex flex-col">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="bg-white border border-black border-[2px] rounded mb-5 focus:border-green-500 focus:outline-none"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="bg-white border border-black border-[2px] rounded mb-5 focus:border-green-500 focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-white border border-black border-[2px] rounded mb-5 focus:border-green-500 focus:outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-white border border-black border-[2px] rounded mb-5 focus:border-green-500 focus:outline-none"
            />
          </div>
        ) : (
          <div className="flex flex-col">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-white border border-black border-[2px] rounded mb-3 focus:border-green-500 focus:outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-white border border-black border-[2px] rounded mb-5 focus:border-green-500 focus:outline-none"
            />
          </div>
        )}

        {authError && (
          <p className="text-red-700 text-[14px] mb-4 text-center">
            {authError}
          </p>
        )}

        <button
          type="submit"
          className="mb-4 text-[16px] bg-green-400 px-3 py-1 rounded border border-green-600 border-2 transition hover:bg-green-300 active:bg-green-600"
        >
          {loginMode ? "Login" : "Sign Up"}
        </button>

        <button
          type="button"
          onClick={() => setLoginMode(!loginMode)}
          className="text-[15px]"
        >
          {loginMode ? "No account? Sign Up" : "Already have an account? Login"}
        </button>

        <div className="w-full flex items-center justify-center gap-4 my-5">
          <div className="w-1/3 text-[15px] h-[1px] bg-black/15"></div>
          <div className="text-[15px] whitespace-nowrap">or</div>
          <div className="w-1/3 text-[15px] h-[1px] bg-black/15"></div>
        </div>

        <button
          type="button"
          onClick={async () => {
            try {
              await guestLogin();
              setOpenModal(false);
            } catch (error) {
              console.error("Guest login error:", error);
            }
          }}
          className="w-full bg-blue-500 text-white text-sm px-2 py-1 rounded mb-2 border border-blue-600 border-2 transition hover:bg-blue-300 active:bg-blue-600"
        >
          Continue as Guest
        </button>
      </form>
    </div>
  );
}
