const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

const authRoutes = require("./routes/auth/auth");
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const categoryRoutes = require("./routes/category");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/", userRoutes);
app.use("/", bookRoutes);
app.use("/", categoryRoutes);


async function createConnection () {
  await mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
      console.log("connected to DB");
    }
  )
}

createConnection()


app.listen(PORT, () => {
  console.log("server is running");
});
