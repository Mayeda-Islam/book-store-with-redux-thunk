import { editBook } from "../../book/action";

export const updateBooks = (bookId, bookDetails) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...bookDetails,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result, "from updated book");
    dispatch(editBook(result));
  };
};
