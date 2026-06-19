import BookPlayerClient from "../BookPlayerClient";

type bookPlayerProps = {
  book: any;
  mode?: "read" | "listen";
};

export default async function BookPlayerPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { mode?: "read" | "listen" };
}) {

  await new Promise((resolve) => setTimeout(resolve, 10000))

  
  const { id } = await params;
  const { mode } = await searchParams;
  
  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
  );
  
  const book = await res.json();

  return <BookPlayerClient book={book} mode={mode} />;
}