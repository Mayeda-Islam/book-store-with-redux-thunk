import { ADDED, DELETE, EDIT, LOADED, SELECTEDBOOK } from "./actiontType";

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

export const selectedBook = (bookDetails) => {
  return {
    type: SELECTEDBOOK,
    payload: { ...bookDetails },
  };
};

export const editBook = (bookDetails) => {
  return {
    type: EDIT,
    payload: { ...bookDetails },
  };
};
