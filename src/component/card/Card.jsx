import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../../redux/book/thunk/deleteBook";
import CardBody from "./CardBody";

const Card = () => {
  const books = useSelector((state) => state.books);
  const featuredBooks = useSelector((state) => state.filter);
  console.log(books);
  const dispatch = useDispatch();
  const handleDelete = (bookId) => {
    dispatch(deleteBooks(bookId));
  };
  return (
    <div className="lws-bookContainer">
      {books.map((book) => {
        console.log(book);
        return (
          <CardBody key={book.id} book={book} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default Card;
