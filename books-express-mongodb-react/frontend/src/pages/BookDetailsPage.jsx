

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetailsPage = () => {
  const { id } = useParams(); // Get the book ID from the URL params
  const [book, setBook] = useState(null); // State to hold the book details
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${id}`);
        setBook(response.data); // Assuming your API returns the book details in response.data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book:', error);
        setLoading(false);
        // Handle error state or display a message to the user
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Display a loading indicator while fetching data
  }

  if (!book) {
    return <p>Book not found</p>; // Handle case where book is not found
  }

  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
        <p className="text-gray-600 mb-2">{book.author}</p>
        <p className="text-gray-500 mb-2">{book.genre}</p>
        <p className="text-gray-500 mb-4">{book.description}</p>
        <a href="/" className="text-blue-700 hover:underline">Back to Home</a>
      </div>
    </div>
  );
};

export default BookDetailsPage;
