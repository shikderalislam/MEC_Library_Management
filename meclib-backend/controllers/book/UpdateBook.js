const Book = require("../../models/Book");

const UpdateBook = async (req, res) => {
  const id = req.params.id;
  const {body} = req
  try {
    const book = await Book.findOneAndUpdate({_id: id}, {$set: body});
    if(book){
      res.json({ message: "updated", status: 201 });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = UpdateBook;
