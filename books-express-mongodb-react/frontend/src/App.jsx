import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import BookProvider from "./components/BookProvider"; // Correct import

function App() {
  return (
    <BookProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BookProvider>
  );
}

export default App;
