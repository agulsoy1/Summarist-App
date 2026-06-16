"use client";
import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { TrackInfo } from "./TrackInfo";
import { Controls } from "./Controls";
import { ProgressBar } from "./ProgressBar";
import { VolumeControl } from "./VolumeControl";

export const AudioPlayer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="absolute bottom-0 w-screen">
      <div className="min-h-8 bg-black flex flex-col gap-9 lg:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        <TrackInfo />
        <div className=" flex flex-col items-center justify-between gap-1 m-auto flex-1">
          <Controls />
          <ProgressBar />
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <VolumeControl />
          <button onClick={() => setOpenDrawer((prev) => !prev)}>
            <RiMenuAddLine />
          </button>
        </div>
      </div>
    </div>
  );
};
