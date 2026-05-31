import Link from "next/link";

export default async function Recommended() {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
  );
  const recBooks = await res.json();

  return (
    <div>
      <section>
        <h1 className="font-bold text-[22px] pb-3">Recommended For You</h1>
        <p className="text-md opacity-65 pb-5">We think you'll like these</p>
        <div className="flex mb-10">
          {recBooks.slice(0, 5).map((book: any) => (
            <Link href="/book-details" key={book.id}>
              <div className="flex flex-col justify-start items-center w-[220] h-[350] py-7 hover:bg-black/10">
                <figure className="w-[175]">
                  <img src={book.imageLink} alt="" />
                </figure>
                <div className="text-left w-45">
                  <h1 className="font-bold">{book.title}</h1>
                  <p className="text-sm opacity-50">{book.author}</p>
                  <p className="text-sm">{book.subTitle}</p>
                  <div className="flex">
                    <p className="text-sm opacity-50">03:24</p>
                    <p className="text-sm opacity-50">{book.averageRating}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
