"use client";
import SaveButton from "@/app/components/SaveButton";
import { useAudioPlayerContext } from "@/context/audio-player-context";
import { useAuth } from "@/context/authContext";
import { useModal } from "@/context/ModalContext";
import { usePremium } from "@/context/PremiumContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  book: any;
};

export default function BookDetailsClient({ book }: Props) {
  const { setOpenModal } = useModal();
  const { user } = useAuth();
  const router = useRouter();
  const { isPremium, loading } = usePremium();
  const { setCurrentTrack } = useAudioPlayerContext();
  const [isLoading, setIsLoading] = useState(false)

  const handlePlay = () => {
    setCurrentTrack({
      title: book.title,
      src: book.audioLink,
      author: book.author,
      thumbnail: book.imageLink,
    });
    handleBookAccess()
  };

  const handleBookAccess = () => {
    if (!user) {
      setOpenModal(true);
      return;
    }

    if (!isPremium && book.subscriptionRequired) {
      router.push("/account/subscription");
      return;
    }

    router.push(`/book-player/${book.id}`);
  };

  return (
    <div>
      <div className="flex border-black/20 pt-10 text-[#032b41]">
        <div className="flex flex-col w-full pr-5">
          <h1 className="text-[32px] font-bold leading-[40px]">
            {book.title} {book.subscriptionRequired ? "(Premium)" : ""}
          </h1>
          <div className="text-[16px] font-bold my-3">{book.author}</div>
          <div className="text-[20px] font-thin">{book.subTitle}</div>
          <div>
            <div className="flex flex-col py-4 my-5 gap-[20] font-bold text-[14px] border-t border-b border-black/20">
              <div className="flex items-center">
                <img
                  src="/assets/star-regular-full.svg"
                  className="w-[30px]"
                  alt=""
                />
                {book.averageRating} ({book.totalRating} ratings)
              </div>
              <div className="flex gap-[100px]">
                <div className="flex items-center">
                  <img
                    src="/assets/microphone-solid-full.svg"
                    className="w-[30px]"
                    alt=""
                  />
                  {book.type}
                </div>
                <div className="flex items-center">
                  <img
                    src="/assets/lightbulb-regular-full.svg"
                    className="w-[30px]"
                    alt=""
                  />
                  {book.keyIdeas} Key Ideas
                </div>
              </div>
            </div>
            <div className="text-white flex gap-5">
              <button
                onClick={handleBookAccess}
                className="bg-[#032b41] rounded flex items-center gap-2 px-10 py-3 cursor-pointer"
              >
                <img
                  src="/assets/readme-brands-solid-full.svg"
                  className="w-[30px] invert"
                  alt=""
                />
                <div>Read</div>
              </button>
              <button
                onClick={handlePlay}
                className="bg-[#032b41] rounded flex items-center gap-2 px-10 py-3 cursor-pointer"
              >
                <img
                  src="/assets/microphone-solid-full.svg"
                  className="w-[30px] invert"
                  alt=""
                />
                <div>Listen</div>
              </button>
            </div>
            <SaveButton book={book} />
          </div>
          <div>
            <div className="my-5 font-bold text-[18px]">What's it about?</div>
            <div className="flex gap-4 mb-5">
              {book.tags.map((tag: string, index: number) => (
                <div key={index}>
                  <button className="bg-black/5 text-black p-4">{tag}</button>
                </div>
              ))}
            </div>
            <div>{book.bookDescription}</div>
            <div className="my-5 font-bold text-[18px]">About the Author</div>
            <div>{book.authorDescription}</div>
          </div>
        </div>
        <figure className="w-[400px]">
          <img src={book.imageLink} className="w-full h-auto" alt="" />
        </figure>
      </div>
    </div>
  );
}
