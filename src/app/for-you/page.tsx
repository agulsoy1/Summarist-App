import BookList from "../components/BookList";
import SelectedForYou from "../components/SelectedForYou";

export default async function forYou() {

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const recommendedRes = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
  );
  const recommendedBooks = await recommendedRes.json();

  const SuggestedRes = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
  );
  const suggestedBooks = await SuggestedRes.json();

  return (
    <div className="flex flex-col items-start w-full">
      <SelectedForYou />

      <h1 className="font-bold text-[22px] pb-3">Recommended For You</h1>
      <p className="text-md opacity-65 pb-5">We think you'll like these</p>
      <BookList books={recommendedBooks} />

      <h1 className="font-bold text-[22px] pb-3">Suggested Books</h1>
      <p className="text-md opacity-65 pb-5">Browse those books</p>
      <BookList books={suggestedBooks} />
    </div>
  );
}