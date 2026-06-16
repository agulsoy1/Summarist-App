"use client";
import { useAudioPlayerContext } from "@/context/audio-player-context";
import { ChangeEvent, useEffect, useState } from "react";
import {
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
  IoMdVolumeOff,
} from "react-icons/io";

export const VolumeControl = () => {
  const [volume, setVolume] = useState<number>(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };
  const {audioRef} = useAudioPlayerContext()

  useEffect(() => {
    if(audioRef.current){
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume])

  return (
    <div>
      <div className="flex items-center gap-3">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <IoMdVolumeOff size={25} />
          ) : volume < 40 ? (
            <IoMdVolumeLow size={25} />
          ) : (
            <IoMdVolumeHigh size={25} />
          )}
        </button>
        <input
          style={{
            background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
          }}
          type="range"
          min={0}
          max={100}
          value={volume}
          className="volumn"
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};
