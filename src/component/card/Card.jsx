import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../../redux/book/thunk/deleteBook";
import CardBody from "./CardBody";

const Card = () => {
  const books = useSelector((state) => state.books);
  const { featured, searchText } = useSelector((state) => state.filter);

  let filteredBooks = books || [];
  const dispatch = useDispatch();
  console.log(featured);
  const handleDelete = (bookId) => {
    dispatch(deleteBooks(bookId));
  };

  //search by text(search filter)
  if (searchText) {
    filteredBooks = books.filter((book) =>
      book.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  console.log(filteredBooks);

  //featured filter
  if (featured) {
    filteredBooks = books.filter((book) => book.featured);
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
