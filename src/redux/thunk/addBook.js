export const addBooks = (bookDetails) => {
  return async (dispatch) => {
    const res = fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        bookDetails,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    dispatch(addBooks(result));
  };
};
