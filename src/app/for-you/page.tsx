import Recommended from "../components/Recommended";
import SelectedForYou from "../components/SelectedForYou";
import Suggested from "../components/Suggested";

export default function forYou() {
  return (
    <div className="flex flex-col w-[1225]">
      <SelectedForYou />
      <Recommended/>
      <Suggested/>
      {/* <section>
        <h1 className="font-bold text-xl">Suggested Books</h1>
        <p className="text-sm opacity-65">Browse those books</p>
        <div className="flex">
          <div flex-col>
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
      </section> */}
    </div>
  );
}
