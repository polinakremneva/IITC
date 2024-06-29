const Book = require("../models/books.model");
const { buildCriteria } = require("../helpers/books.helper");
async function getBooksCount(req, res) {
  const { query } = req;
  const critiria = buildCriteria(query);
  try {
    const count = await Book.countDocuments(critiria);
    res.json({ count });
  } catch (err) {
    console.log(
      "books.controller, getBooksCount. Error while getting books count",
      err
    );
    res.status(500).json({ message: err.message });
  }
}

async function getBooks(req, res) {
  const { query } = req;
  console.log("query", query);
  const criteria = buildCriteria(query);



  try {
    const totalBooks = await Book.countDocuments(criteria); // Get the total count of products matching the criteria
    const books = await Book.find(criteria)
    res.status(200).json({
      books: books,
      totalBooks: totalBooks, // Include the total count in the response
    });
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ message: "Error fetching books" });
  }
}

async function getBookById(req, res) {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    if (err.name === "CastError") {
      console.log(
        `books.controller, getBookById. Book not found with id: ${id}`
      );
      return res.status(404).json({ message: "Book not found" });
    }
    console.log(
      `books.controller, getBooktById. Error while getting book with id: ${id}`,
      err.name
    );
    res.status(500).json({ message: err.message });
  }
}

// async function deleteBook(req, res) {
//   const { id } = req.params;
//   try {
//     const deletedBook = await Book.findByIdAndDelete(id);

//     if (!deletedBook) {
//       console.log(
//         `books.controller, deleteBook. Book not found with id: ${id}`
//       );
//       return res.status(404).json({ message: "Book not found" });
//     }

//     res.json({ message: "Book deleted" });
//   } catch (err) {
//     console.log(
//       `books.controller, deleteBook. Error while deleting book with id: ${id}`
//     );
//     res.status(500).json({ message: err.message });
//   }
// }

// async function createBook(req, res) {
//   try {
//     const bookToAdd = req.body;
//     const newBook = new Book(bookToAdd);
//     const savedBook = await newBook.save();
//     res.status(201).json(savedBook);
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       // Mongoose validation error
//       console.log(`books.controller, createBook. ${err.message}`);
//       res.status(400).json({ message: err.message });
//     } else {
//       // Other types of errors
//       console.log(`books.controller, createBook. ${err.message}`);
//       res.status(500).json({ message: "Server error while creating book" });
//     }
//   }
// }

// async function updateBook(req, res) {
//   const { id } = req.params;
//   const newFields = req.body;

//   try {
//     const updatedBook = await Book.findByIdAndUpdate(
//       id,
//       newFields,
//       { new: true, runValidators: true } // validate before updating
//     );

//     res.status(200).json(updatedBook);
//   } catch (err) {
//     if (err.name === "CastError") {
//       console.log(
//         `books.controller, getBookById. CastError! book not found with id: ${id}`,
//         err
//       );
//       res.status(404).json({ message: "book not found" });
//     } else if (err.name === "ValidationError") {
//       // Mongoose validation error
//       console.log(`books.controller, updateBook. ${err.message}`);
//       res.status(400).json({ message: err.message });
//     } else {
//       // Other types of errors
//       console.log(`books.controller, updateBook. ${err}`);
//       res.status(500).json({ message: "Server error while updateing book" });
//     }
//   }
// }

module.exports = {
  getBooks,
  getBooksCount,
  getBookById,
  // deleteBook,
  // createBook,
  // updateBook,
};
