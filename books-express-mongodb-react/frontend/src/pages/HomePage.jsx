import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookProvider, { BookContext } from "../components/BookProvider";

const HomePage = () => {
  const { books, loading, fetchBooks, handleFilter, filters } =
    useContext(BookContext);
  const [selectedGenre, setSelectedGenre] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const genreParam = queryParams.get("genre");
    setSelectedGenre(genreParam || ""); // Set selectedGenre from URL param on page load
  }, [location.search]);

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    queryParams.set("genre", genre);
    window.history.replaceState(null, "", `?${queryParams.toString()}`);
    handleFilter({ ...filters, genre }); // Apply filter to update displayed books
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-end mb-4">
          <label className="mr-2 text-gray-700">Filter by Genre:</label>
          <select
            value={selectedGenre}
            onChange={handleGenreChange}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
          >
            <option value="">All Genres</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mystery">Mystery</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Book details */}
                <div>
                  <a
                    href={`/books/${book._id}`}
                    className="text-blue-700 hover:underline font-medium"
                  >
                    {book.title}
                  </a>
                  <p className="text-gray-600">{book.author}</p>
                  <p className="text-gray-500">{book.genre}</p>
                  <p className="text-gray-500">{book.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
