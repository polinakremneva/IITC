import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  // Fetch books function
  const fetchBooks = async (filters = {}) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/api/books`, {
        params: {
          title: filters.name,
          author: filters.author,
          genre: filters.genre,
          description: filters.description,
        },
      });
      setBooks(response.data.books);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
      // Handle error state or display a message to the user
    }
  };

  // Effect to fetch books based on page and filters
  useEffect(() => {
    fetchBooks(filters);
  }, [filters]);

  // Remove book function
  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/books/${id}`
      );
      console.log("Book deleted successfully:", response.data);
      fetchBooks(currentPage, filters); // Refresh books after deletion
    } catch (error) {
      console.error("Error deleting book:", error);
      // Handle error state or display a message to the user
    }
  };

  // Handle filter application
  const handleFilter = (filters) => {
    setFilters(filters);
    // Reset to first page when applying filters
  };

  // Context value to provide
  const contextValue = {
    books,
    loading,
    filters,
    fetchBooks,
    handleFilter,
  };

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
