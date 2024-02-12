const mongoose = require("mongoose");

const good = new mongoose.Schema({
  id: String,
  goodName: String,
});

const Good = mongoose.model("good", good);

module.exports = Good;
