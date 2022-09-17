const Book = require("../../models/Book");
const Request = require("../../models/RequestBook");

const returnBook = async (req, res) => {
  const requestid = req.params.id;
  const bookId = req.query.bookid;
  try {
    const request = await Request.findById({ _id: requestid });

    if (request) {
      await Request.updateOne({ _id: requestid }, { isSolve: true });
      const book = await Book.findById({ _id: bookId });
      await Book.updateOne({ _id: bookId }, { quantity: book.quantity + 1 });
    }
    res.json({ message: "Returnd" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = returnBook;