import { loadedBook } from "../../book/action";

export const getData = () => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books`);
    const data = await res.json();
    console.log(data);
    dispatch(loadedBook(data));
  };
};
