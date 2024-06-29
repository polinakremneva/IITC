const express = require("express");
const router = express.Router();

const {
  getBooks,
  getBooksCount,
  getBookById,

} = require("../controllers/books.contoller");

router.get("/", getBooks);
router.get("/count", getBooksCount);
router.get("/:id", getBookById);


module.exports = router;
