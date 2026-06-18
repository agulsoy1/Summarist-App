import Link from "next/link";

export default async function SelectedForYou() {

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
  );
  const selectedBook = await res.json();

  return (
    <div className="flex justify-start items-start w-full">
      <section className="flex flex-col">
        <h1 className="font-bold text-[22px] pb-[10]">Selected just for you</h1>
        {selectedBook.map((selected: any) => (
          <Link href={`/book-details/${selected.id}`} key={selected.id}>
            <div className="flex items-center h-[185px] w-[645px] bg-[rgb(251,239,214)] mb-10">
              <p className="pb-25 px-6 top-0 text-md w-[250]">
                {selected.subTitle}
              </p>
              <div className="flex border-l border-black/20">
                <figure className="min-w-0 max-w-[165] relative pl-7">
                  <img src={selected.imageLink} alt="" />
                </figure>
                <div className="flex-col">
                  <h1 className="font-bold">{selected.title}</h1>
                  <p className="text-sm">{selected.author}</p>
                  <div className="flex">
                    <figure className="w-[30px]">
                      <img src="/assets/play_button.png" alt="" />
                    </figure>
                    <div className="text-sm font-bold">3 mins 23 secs</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
