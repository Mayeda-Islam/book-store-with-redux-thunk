import { useState } from "react";
import { useDispatch } from "react-redux";
import { postBooks } from "../../redux/book/thunk/addBook";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [toggleCheck, setToggleCheck] = useState(true);
  const dispatch = useDispatch();
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

    console.log(bookName, authorName, thumbnail, price, rating, toggleCheck);
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={(e) => handleAddBook(e)} className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="bookName"
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
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
              name="thumbnail"
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
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
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              onChange={(e) => setToggleCheck(e.target.checked)}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
