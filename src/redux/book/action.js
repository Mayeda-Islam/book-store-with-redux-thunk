import { ADDED, DELETE, EDIT, LOADED } from "./actiontType";

export const addBook = (bookDetails) => {
  return {
    action: ADDED,
    payload: bookDetails,
  };
};
export const loadedBook = (bookDetails) => {
  console.log(bookDetails, "from action ");
  return {
    action: LOADED,
    payload: bookDetails,
  };
};
export const deleteBook = (bookId) => {
  return {
    action: DELETE,
    payload: bookId,
  };
};
export const editBook = (bookId, bookDetails) => {
  return {
    action: EDIT,
    payload: { id: bookId, updatedBook: bookDetails },
  };
};
