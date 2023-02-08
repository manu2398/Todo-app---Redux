require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/api", require("./routes/todoRouter"));

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) throw err;
  console.log("Mongodb connected");
});

const port = process.env.port || 1234;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
