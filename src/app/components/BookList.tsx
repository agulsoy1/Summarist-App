import BookCard from "./BookCard";
import { Book } from "@/types/book";

type Props = {
  books: Book[];
};

export default function BookList({ books }: Props) {
  return (
    <div className="flex gap-10 mb-10">
      {books.slice(0, 5).map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}