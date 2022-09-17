const Book = require("../../models/Book");

const GetAllBooks = async (req, res) => {
  const categoty = req.params.category;
  try {
    if (categoty.toLowerCase() === "all") {
      const allBooks = await Book.find({});
      if (allBooks) {
        res.json({
          message: "Success",
          amount: allBooks.length,
          data: allBooks,
        });
      } else {
        res.json({ message: "Something went wrong" });
      }
    } else {
        const filterBooks = await Book.find({ category: categoty });
        res.json({ quantity: filterBooks.length, data: filterBooks });
    }

    // if (category) {
    //   const filterBooks = await Book.find({ category: categoty });
    //   res.json({ data: filterBooks });
    // }
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = GetAllBooks;
