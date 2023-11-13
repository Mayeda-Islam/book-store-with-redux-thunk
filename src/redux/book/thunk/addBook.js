import { addBook } from "../action";

export const postBooks = (bookDetails) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        ...bookDetails,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    dispatch(addBook(result));
  };
};
