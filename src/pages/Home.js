import { useDispatch, useSelector } from "react-redux";
import Books from "../components/Books/Books";
import { changeStatus } from "../features/filter/filterSlice";

const Home = () => {
  const { status } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/books")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              className={`lws-filter-btn  ${
                status === "all" && "active-filter"
              }`}
              onClick={() => dispatch(changeStatus("all"))}
            >
              All
            </button>
            <button
              className={`lws-filter-btn  ${
                status === "featured" && "active-filter"
              }`}
              onClick={() => dispatch(changeStatus("featured"))}
            >
              Featured
            </button>
          </div>
        </div>
        <Books />
      </div>
    </main>
  );
};

export default Home;
