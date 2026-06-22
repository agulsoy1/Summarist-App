import Link from "next/link";

type Book = {
  id: string;
  title: string;
  subTitle: string;
  author: string;
  imageLink: string;
  averageRating: number;
  subscriptionRequired: boolean;
};

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/book-details/${book.id}`} key={book.id} className="h-[400px] hover:bg-black/10">
      <div className="relative w-[clamp(150px,18vw,200px)] h-[360px] flex flex-col justify-center items-center">
        {book.subscriptionRequired && (
          <div className=" absolute top-0 right-0 bg-black text-white text-sm rounded-[50px] px-2">
            premium
          </div>
        )}
        <div className="flex flex-col h-[300px]">
          <figure className="w-[clamp(100px, 10vw, 175px)]">
            <img src={book.imageLink} alt="" />
          </figure>
          <div className="text-left w-45 mt-3">
            <h1 className="font-bold">{book.title}</h1>
            <p className="text-sm opacity-50">{book.author}</p>
            <p className="text-sm w-[175]">{book.subTitle}</p>
            <div className="flex">
              <p className="text-sm opacity-50">03:24</p>
              <p className="text-sm opacity-50">{book.averageRating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
