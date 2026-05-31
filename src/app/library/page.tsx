export default async function Library() {
  return (
    <div className="flex flex-col">
        <div>
          <section>
            <h1 className="font-bold text-xl">Saved Books</h1>
            <p className="text-sm opacity-65"># items</p>
            <div className="flex">
              <div className="flex-col">
                <figure>
                  <img src="/assets/placeholder_book.png" alt="" />
                </figure>
                <h1 className="font-bold">book.title</h1>
                <p className="text-sm opacity-50">book.author</p>
                <p className="text-sm">book.summary</p>
                <div className="flex">
                  <p className="text-sm opacity-50">03:24</p>
                  <p className="text-sm opacity-50">4.4</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className="font-bold text-xl">Finished</h1>
            <p className="text-sm opacity-65"># items</p>
            <div className="flex">
              <div className= "flex-col">
                <figure>
                  <img src="/assets/placeholder_book.png" alt="" />
                </figure>
                <h1 className="font-bold">book.title</h1>
                <p className="text-sm opacity-50">book.author</p>
                <p className="text-sm">book.summary</p>
                <div className="flex">  
                  <p className="text-sm opacity-50">03:24</p>
                  <p className="text-sm opacity-50">4.4</p>
                </div>
              </div>
            </div>
          </section>
        </div>;
    </div>
  );
}
