import { editBook } from "../../book/action";

export const deleteBooks = (bookId) => {
  return async (dispatch) => {
    const res = fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });
    const result = await res.json();
    dispatch(editBook(result));
  };
};
