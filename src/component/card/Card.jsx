import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../../redux/book/thunk/deleteBook";
import CardBody from "./CardBody";

const Card = () => {
  const books = useSelector((state) => state.books);
  const { featured, searchText } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  let filteredBooks = books || [];

  //delete books
  const handleDelete = (bookId) => {
    dispatch(deleteBooks(bookId));
  };

  //search by text(search filter)
  if (searchText) {
    filteredBooks = books.filter((book) =>
      book.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  //featured filter
  if (featured) {
    filteredBooks = books.filter((book) => book.featured);
  }

  return (
    <div className="lws-bookContainer">
      {filteredBooks.books.map((book) => {
        return (
          <CardBody key={book.id} book={book} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default Card;
