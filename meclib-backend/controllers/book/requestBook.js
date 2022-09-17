const Book = require("../../models/Book");
const Request = require("../../models/RequestBook");
const User = require("../../models/User");

const requestBook = async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    const checkUser = await User.findById(userId);
    const checkBookQuantity = await Book.findById(bookId);
    if(checkUser){
      if(checkBookQuantity.quantity >= 1){
        const newRequest = new Request({
          userId,
          bookId,
        });
        const saved = await newRequest.save();
        await Book.updateOne(
          { _id: bookId },
          { $set: { quantity: checkBookQuantity.quantity - 1 } }
        );
  
        if (saved) { 
          res.status(201).json({
            message: "Request has been sent!",
            status: 200,
          });
        }
      } else {
        res.send({message: "Book is not available"})
      }
    } else {
      res.json({message: "Invalid user"})
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = requestBook;
