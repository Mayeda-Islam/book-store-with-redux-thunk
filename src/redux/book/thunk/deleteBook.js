import { deleteBook, editBook } from "../../book/action";

export const deleteBooks = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });
    console.log("working");
    dispatch(deleteBook(bookId));
  };
};
