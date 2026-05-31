type PageProps = {
  params: {
    id: string;
  };
};

export default async function BookDetails({ params }: PageProps) {
  const { id } = params;

  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );

  const book = await res.json();

  return (
    <div>
      <h1 className="text-lg font-bold">{book.title}</h1>;
    </div>
  );
}
