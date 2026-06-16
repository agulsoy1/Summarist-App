import { useAudioPlayerContext } from "@/context/audio-player-context";
import { useState } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const { progressBarRef, audioRef, timeProgress, setTimeProgress, duration } =
    useAudioPlayerContext();
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current?.value);
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
      // if progress bar changes while audio is on pause
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(newTime / duration) * 100}%`,
      );
    }
  };

  const formatTime = (time: number | undefined): string => {
    if (typeof time === "number" && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      //Convert to string and pad with leading zeroes if necessary
      const formatMinutes = minutes.toString().padStart(2, "0");
      const formatSeconds = seconds.toString().padStart(2, "0");
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="flex items-center justify-center gap-5 w-full">
      <span>{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        style={{ "--range-progress": `${progress}%` } as React.CSSProperties}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};
