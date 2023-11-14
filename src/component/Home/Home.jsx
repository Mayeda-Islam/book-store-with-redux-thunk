import { useEffect } from "react";
import Card from "../card/Card";
import AddBook from "../addbook/AddBook";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/book/thunk/getBook";
import { feature } from "../../redux/filter/action";

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleFilterReset = () => {
    dispatch(feature(false));
  };

  const handleFilterFeature = () => {
    dispatch(feature(true));
  };

  return (
    <>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
              <h4 className="mt-2 text-xl font-bold">Book List</h4>

              <div className="flex items-center space-x-4">
                <button
                  onClick={handleFilterReset}
                  className="filter-btn active-filter"
                  id="lws-filterAll"
                >
                  All
                </button>
                <button
                  onClick={handleFilterFeature}
                  className="filter-btn bg-white"
                  id="lws-filterFeatured"
                >
                  Featured
                </button>
              </div>
            </div>
            <Card />
          </div>
          <AddBook />
        </div>
      </main>
    </>
  );
};

export default Home;
