import { ADDED, DELETE, EDIT, LOADED } from "./actiontType";

export const addBook = (bookDetails) => {
  return {
    type: ADDED,
    payload: bookDetails,
  };
};
export const loadedBook = (bookDetails) => {
  return {
    type: LOADED,
    payload: bookDetails,
  };
};
export const deleteBook = (bookId) => {
  return {
    type: DELETE,
    payload: bookId,
  };
};
export const editBook = (bookId, bookDetails) => {
  return {
    type: EDIT,
    payload: { id: bookId, updatedBook: bookDetails },
  };
};
