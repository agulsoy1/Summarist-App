import BookDetailsClient from "./BookDetailsClient";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function BookDetails({ params }: PageProps) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
    { cache: "no-store" },
  );

  const text = await res.text();
  if (!text) return <div>No data returned.</div>;

  const book = JSON.parse(text);

  return <BookDetailsClient book={book} />;
}
