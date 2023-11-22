import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import { useGetBookQuery } from "../features/api/apiSlice";

const Edit = () => {
  const { bookId } = useParams();

  const { data: book, isLoading, isError, error } = useGetBookQuery(bookId);

  let content = null;

  if (isLoading) content = <div>Loading..</div>;

  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && book?.id) content = <EditForm book={book} />;

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default Edit;
