import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Book from "./Book";

const Books = () => {
  const { data: books, isLoading, isError, error } = useGetBooksQuery();
  const { status, search } = useSelector((state) => state.filters);

  const filterStatus = (book) => {
    return status === "all" ? true : book.featured;
  };

  const filterSearch = (book) => {
    return book.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredBooks = books?.filter(filterStatus)?.filter(filterSearch);

  // Decide what to render
  let content = null;

  if (isLoading) content = <div>Loading..</div>;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isLoading && !isError && filteredBooks.length === 0)
    content = <div>No Books Found</div>;

  if (!isLoading && !isError && filteredBooks.length > 0)
    content = filteredBooks.map((book) => <Book key={book.id} book={book} />);
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Books;
