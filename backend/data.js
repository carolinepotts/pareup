const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    negotiated: String,
    salary: Number,
    equity: Number,
    one_time: Number,
    lat: Number,
    long: Number
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Offer", DataSchema);