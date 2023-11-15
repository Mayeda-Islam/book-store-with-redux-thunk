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
export const editBook = (bookDetails) => {
  console.log(bookDetails, "from line 22");
  return {
    type: EDIT,
    payload: bookDetails,
  };
};
