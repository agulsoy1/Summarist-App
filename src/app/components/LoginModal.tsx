"use client";
import React from "react";
import { useState } from "react";
import { logIn, signUp } from "../services/auth";
import Image from "next/image";

type SideBarProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginModal({ openModal, setOpenModal }: SideBarProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMode, setLoginMode] = useState(true)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (loginMode) {
        await logIn(email, password);
      } else {
        await signUp(email, password);
      }
      setOpenModal(false);
    } catch (error) {
      console.error("Auth error: ", error);
    }
  }

  if(!openModal){
    return null;
  }

  return (
    <>
      {/* Modal */}
      {openModal && (
        <div className="bg-black/40 w-screen h-screen flex justify-center items-center absolute">
          <form
            onSubmit={handleSubmit}
            className="gap-3 bg-white w-[400px] h-75 p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center relative"
          >
            <button
              onClick={() => setOpenModal(false)}
              className="mt-4 text-gray-500 text-lg w-full absolute left-42 top-5"
            >
              X
            </button>
            <h2 className="text-xl fonr-bold mb-4">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex justify-center items-center">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  className="tex-xl tex-black bg-white border border-gray-300 px-4 py-2 relative"
                />
                <figure className="absolute left-23">
                  <Image
                    src="/assets/username_symbol.png"
                    width={20}
                    height={20}
                  />
                </figure>
              </div>
              <div className="flex justify-center items-center">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className="tex-xl tex-black bg-white border border-gray-300 px-4 py-2"
                />
                <figure className="absolute left-22">
                  <Image
                    src="/assets/password_symbol.png"
                    width={25}
                    height={25}
                  />
                </figure>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-black py-2 rounded-xl cursor-pointer"
            >
              {loginMode ? "Login" : "Sign Up"}
            </button>

            <p
              className="text-blue-500 text-sm mt-3 text-center"
              onClick={() => setLoginMode(!loginMode)}
            >
              {loginMode ? (
                <div className="text-black">
                  No account?{" "}
                  <u className="text-blue-500 cursor-pointer">Sign Up</u>
                </div>
              ) : (
                <div className="text-black">
                  Already have an account?{" "}
                  <u className="text-blue-500 cursor-pointer">Login</u>
                </div>
              )}
            </p>
          </form>
        </div>
      )}
    </>
  );
}
