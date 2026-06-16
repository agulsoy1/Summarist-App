import { AudioPlayer } from "@/app/components/audio/AudioPlayer";
import React from "react";

type bookPlayerProps = {
  params: {
    id: string;
  };
};

export default async function bookPlayer({ params }: bookPlayerProps) {
  const { id } = await params;

  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );

  const book = await res.json();

  return (
    <div className="my-5 w-full flex flex-col items-center justify-center">
      <div className=" mb-5 text-[24px] font-bold">{book.title}</div>
      <div className="whitespace-pre-line">{book.summary}</div>
      <AudioPlayer/>
    </div>
  );
}
