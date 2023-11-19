import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBooks } from "../../redux/book/thunk/addBook";
import { updateBooks } from "../../redux/book/thunk/updateBook";
import { selectedBook } from "../../redux/book/action";

const AddBook = () => {
  const { editableBook } = useSelector((state) => state.books);
  console.log(editableBook);
  const dispatch = useDispatch();

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [toggleCheck, setToggleCheck] = useState(false);

  const formRef = useRef(null);

  const handleAddBook = (e) => {
    e.preventDefault();
    const bookDetails = {
      name: bookName,
      author: authorName,
      thumbnail: thumbnail,
      price: price,
      rating: rating,
      featured: toggleCheck,
    };
    dispatch(postBooks(bookDetails));
    e.target.reset();
  };

  useEffect(() => {
    if (editableBook) {
      setToggleCheck(editableBook.featured);
      setBookName(editableBook.name);
      setAuthorName(editableBook.author);
      setThumbnail(editableBook.thumbnail);
      setPrice(editableBook.price);
      setRating(editableBook.rating);
    }
    // Reset the form by setting its values to their default values
    formRef.current.reset();
  }, [editableBook]);

  const handleUpdateBook = () => {
    const bookDetails = {
      name: bookName,
      author: authorName,
      thumbnail: thumbnail,
      price: price,
      rating: rating,
      featured: toggleCheck,
    };
    dispatch(updateBooks(editableBook.id, bookDetails));
    formRef.current.reset();
    dispatch(selectedBook({}));
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">
          {" "}
          {editableBook ? "Update Book" : "Add Book"}
        </h4>
        <form
          ref={formRef}
          onSubmit={(e) => handleAddBook(e)}
          className="book-form"
        >
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="bookName"
              defaultValue={editableBook ? editableBook.name : ""}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              defaultValue={editableBook ? editableBook.author : ""}
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              defaultValue={editableBook ? editableBook.thumbnail : ""}
              name="thumbnail"
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                defaultValue={editableBook ? editableBook.price : ""}
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                min="1"
                max="5"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                defaultValue={editableBook ? editableBook.rating : ""}
                name="rating"
                min="1"
                max="5"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              checked={toggleCheck}
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              onChange={() => setToggleCheck(!toggleCheck)}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          {Object.keys(editableBook).length === 0 ? (
            <button type="submit" className="submit">
              Add Book
            </button>
          ) : (
            <button onClick={handleUpdateBook} type="button" className="submit">
              Update Book
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddBook;
