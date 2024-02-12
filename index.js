const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotEnv = require("dotenv");
const Good = require("./models/goods");
const cors = require("cors");
dotEnv.config();
mongoose
  .connect(`${process.env.DB_URL}`)
  .then(() => {
    console.log("mongoose listen ...");
  })
  .catch(() => {
    console.log("base error");
  });
app.use(
  cors({
    origin: process.env.URL_FRONT,
  })
);
app.use(express.json());
app.get("/", async (req, res) => {
  const goods = await Good.find({});
  res.json({ data: goods });
});
app.post("/goods", async (req, res) => {
  await Good.create({ id: 1, goodName: req.body.goodName });

  res.json({ data: [] });
});
app.listen("5001", () => {
  console.log("server connected...");
});
