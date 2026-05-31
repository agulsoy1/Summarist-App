import Link from "next/link";

export default async function Suggested() {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
  );
  const sugBooks = await res.json();

  return (
    <div>
      <section>
        <h1 className="font-bold text-[22px] pb-3">Suggested Books</h1>
        <p className="text-md opacity-65 pb-5">Browse those books</p>
        <div className="flex">
          {sugBooks.slice(0, 5).map((book: any) => {
            // console.log(book.id);
            return (
              <Link href={`/book-details/${book.id}`} key={book.id}>
                <div className="flex flex-col justify-center items-center w-[220px] h-[350px] hover:bg-black/10 ">
                  <figure className="w-[175]">
                    <img src={book.imageLink} alt="" />
                  </figure>
                  <div className="text-left w-45">
                    <h1 className="font-bold">{book.title}</h1>
                    <p className="text-sm opacity-50">{book.author}</p>
                    <p className="text-sm w-[175]">{book.subTitle}</p>
                    <div className="flex">
                      <p className="text-sm opacity-50">03:24</p>
                      <p className="text-sm opacity-50">{book.averageRating}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
