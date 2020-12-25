const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection is established successfullly");
});

const mainRouter = require("./routes/main");
app.use("/main", mainRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
