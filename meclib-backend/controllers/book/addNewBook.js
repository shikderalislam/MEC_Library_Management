const Book = require("../../models/Book");
const User = require("../../models/User");

const addNewBook = async (req, res) => {
  const { name, userId, authors, category,subCategories,  bookImageURL, shortDescription, publishers,uniqueid, edition} = req.body;

  try {
    const checkAdmin = await User.findById(userId);
    if (checkAdmin?.isSuperAdmin || checkAdmin?.isAdmin) {
      const saveBook = new Book({
        name,
        bookImageURL,
        shortDescription,
        publishers,
        authors,
        edition,
        category,
        uniqueid,
        subCategories
      });
      const saved = await saveBook.save();
      if (saved) {
        res
          .status(201)
          .json({ message: "Successfully added the book", data: saved });
      }
    } else {
        res.json({ message: "Super-admin and admin can approve book request"});

    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = addNewBook;
