import Link from "next/link";

export default async function SelectedForYou() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
  );
  const selectedBook = await res.json();

  return (
    <section className="flex flex-col justify-start items-start w-full">
      <h1 className="font-bold text-[22px] pb-[10]">Selected just for you</h1>
      {selectedBook.map((selected: any) => (
        <Link href={`/book-details/${selected.id}`} key={selected.id}>
          <div className="flex items-center w-[clamp(200px,45vw,645px)] h-[clamp(160px,18vw,185px)] bg-[rgb(251,239,214)] mb-10">
            <p className="px-4 sm:px-6 text-sm sm:text-base w-[clamp(70px,25vw,250px)] w-[clamp(120px,25vw,250px)]">
              {selected.subTitle}
            </p>
            <div className="flex border-l border-black/20">
              <figure className="w-[clamp(90px,12vw,165px)] pl-4 sm:pl-6">
                <img src={selected.imageLink} alt="" />
              </figure>
              <div className="flex flex-col">
                <h1 className="font-bold text-sm sm:text-base">{selected.title}</h1>
                <p className="text-xs sm:text-sm opacity-70">{selected.author}</p>
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
  );
}
