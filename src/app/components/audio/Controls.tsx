"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BsFillFastForwardFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillRewindFill,
  BsSkipEndFill,
  BsSkipStartFill,
  BsShuffle,
  BsRepeat,
} from "react-icons/bs";
import { useAudioPlayerContext } from "../../../context/audio-player-context";
export const Controls = () => {
  const {
    currentTrack,
    audioRef,
    progressBarRef,
    setDuration,
    duration,
    setTimeProgress,
    isPlaying,
    setIsPlaying,
  } = useAudioPlayerContext();
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    if (seconds !== undefined) {
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  const updateProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        "--range=progress",
        `${(currentTime/duration) * 100}`,
      );
    }
  }, [duration, setTimeProgress, audioRef, progressBarRef]);

  const startAnimation = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [updateProgress, duration, audioRef, progressBarRef]);

  const playAnimationRef = useRef<number | null>(null);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startAnimation();
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress();
    }
    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, startAnimation, updateProgress, audioRef]);

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
      updateProgress();
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
      updateProgress();
    }
  };

  useEffect(() => {
    const currentAudioRef = audioRef.current;
    if (currentAudioRef) {
      currentAudioRef.onended = () => {
        if (isRepeat) {
          currentAudioRef.currentTime = 0;
          currentAudioRef.play();
        } else {
          setIsPlaying(false);
        }
      };
    }
    return () => {
      if (currentAudioRef) {
        currentAudioRef.onended = null;
      }
    };
  }, [isRepeat, setIsPlaying, audioRef]);

  return (
    <div className="flex gap-4 items-center">
      <audio
        src={currentTrack?.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      <button onClick={skipBackward}>
        <img src={"/assets/rewin_15.png"} width={25} alt="" />
      </button>
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? (
          <BsFillPauseFill size={30} />
        ) : (
          <BsFillPlayFill size={30} />
        )}
      </button>
      <button onClick={skipForward}>
        <img src={"/assets/fast_forward.png"} width={25} alt="" />
      </button>
      <button onClick={() => setIsRepeat((prev) => !prev)}>
        <BsRepeat size={20} className={isRepeat ? "text-[#f50]" : ""} />
      </button>
    </div>
  );
};
