import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../../redux/book/thunk/deleteBook";
import CardBody from "./CardBody";

const Card = () => {
  const books = useSelector((state) => state.books);
  const { featured } = useSelector((state) => state.filter);
  console.log(books);
  let filteredBooks = [];
  const dispatch = useDispatch();
  console.log(featured);
  const handleDelete = (bookId) => {
    dispatch(deleteBooks(bookId));
  };
  if (featured) {
    filteredBooks = books.filter((book) => book.featured);
  } else {
    filteredBooks = books;
  }

  return (
    <div className="lws-bookContainer">
      {filteredBooks.map((book) => {
        return (
          <CardBody key={book.id} book={book} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default Card;
