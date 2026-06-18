import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logOut } from "../services/auth";
import { useAuth } from "@/context/authContext";
import { useModal } from "@/context/ModalContext";

type SideBarProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBar() {
  const {setOpenModal} = useModal();
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-screen items-center relative bg-[rgb(247,250,249)] text-black w-[200px] mr-20">
      <figure className="py-4">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            width={160}
            height={40}
            alt="logo"
          ></Image>
        </Link>
      </figure>
      <div className="flex flex-col h-screen pt-10">
        <ul className="flex flex-col text-[16px]">
          <li className="pb-10">
            <Link href="/for-you" className="flex gap-2">
              <img
                src="/assets/house-solid-full.svg"
                className="w-[25]"
                alt=""
              />
              For You
            </Link>
          </li>
          <li className="pb-10">
            <Link className="flex gap-2" href="/library">
              <img
                src="/assets/bookmark-solid-full.svg"
                className="w-[25]"
                alt=""
              />
              My Library
            </Link>
          </li>
          <li className="pb-10">
            <Link className="flex gap-2" href="/">
              <img
                src="/assets/pen-clip-solid-full.svg"
                className="w-[25]"
                alt=""
              />
              Highlights
            </Link>
          </li>
          <li className="pb-10">
            <Link className="flex gap-2" href="/">
              <img
                src="/assets/magnifying-glass-solid-full.svg"
                className="w-[25]"
                alt=""
              />
              Search
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col h-full justify-end items-start text-[16px] gap-4">
          <li className="pb-5">
            <Link className="flex gap-2" href="/settings">
              <img
                src="/assets/gear-solid-full.svg"
                className="w-[25]"
                alt=""
              />
              Settings
            </Link>
          </li>
          <li className="pb-5">
            <Link className="flex gap-2" href="/">
              <img
                src="/assets/circle-question-solid-full.svg"
                className="w-[25]"
                alt=""
              />
              Help & Support
            </Link>
          </li>
          <li className="pb-5 flex gap-2">
            <img
              src="/assets/arrow-right-from-bracket-solid-full.svg"
              className="w-[25] cursor-pointer"
              alt=""
            />
            <button
              onClick={() => {
                if (user) {
                  logOut();
                } else {
                  setOpenModal(true);
                }
              }}
              className="cursor-pointer"
            >
              {user ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
