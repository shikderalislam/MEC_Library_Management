
const Book = require("../../models/Book");
const Request = require("../../models/RequestBook");

const DeleteBookRequest = async (req, res) => {
  const id = req.params.id;
  const bookId = req.query.bookid;
  try {
    const request = await Request.deleteOne({ _id: id });
    if(request){
      const book = await Book.findById({_id: bookId})
      await Book.updateOne({_id: bookId}, {quantity: book.quantity + 1})
    }
    res.json({ message: "Deleted" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = DeleteBookRequest;
