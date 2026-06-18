"use client";

import { useEffect } from "react";
import { useAudioPlayerContext } from "@/context/audio-player-context";
import { AudioPlayer } from "@/app/components/audio/AudioPlayer";

type Props = {
  book: any;
  mode?: "read" | "listen";
};

export default function BookPlayerClient({ book, mode }: Props) {
  const { setCurrentTrack } = useAudioPlayerContext();

  useEffect(() => {
    if (mode === "listen" && book) {
      setCurrentTrack({
        title: book.title,
        src: book.audioLink,
        author: book.author,
        thumbnail: book.imageLink,
      });
    }
  }, [mode, book, setCurrentTrack]);

  return (
    <div className="my-5 w-full flex flex-col items-center justify-center">
      <div className="mb-5 text-[24px] font-bold">{book.title}</div>
      <div className="whitespace-pre-line">{book.summary}</div>

      {mode === "listen" && <AudioPlayer />}
    </div>
  );
}