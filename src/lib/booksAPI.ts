import { Book } from "@/types/book";

const BASE_URL = "https://us-central1-summaristt.cloudfunctions.net/getBooks";

export async function fetchAllBooks(): Promise<Book[]> {
  const statuses = ["selected", "recommended", "suggested"];

  const responses = await Promise.all(
    statuses.map((status) =>
      fetch(`${BASE_URL}?status=${status}`).then((res) => res.json()),
    ),
  );
  return responses.flat();
}