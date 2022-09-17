const Book = require("../../models/Book");

const DeleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete({ _id: id });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = DeleteBook;
