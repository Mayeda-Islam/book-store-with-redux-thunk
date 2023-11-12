import { loadedBook } from "../book/action";

const getData = () => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books`);
    const data = await res.json();
    console.log(data);
    if (data?.length) dispatch(loadedBook(data));
  };
};

export default getData;
