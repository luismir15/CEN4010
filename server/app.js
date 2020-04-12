// Requires
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("config");

// Express instance
const app = express();

// Built in express parser
app.use(express.json());
app.use(cors());

// DB Config
const db = config.get("mongoURI");

// Connect to DB (Mongo)
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/books", require("./routes/api/books"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/Comments", require("./routes/api/Comments"));
app.use("/api/wishlists", require("./routes/api/wishlist"));
app.use("/api/carts", require("./routes/api/cart"));
// Port for DB
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Server started on ${port}`));

app.use(express.static(path.join(__dirname, "../..", "build")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
