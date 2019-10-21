const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    job_title: String,
    ed_level: String,
    company_size: String,
    salary: Number,
    equity: Number,
    negotiated: String,
    one_time: Number,
    lat: Number,
    long: Number,
    race: String,
    pronouns: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Offer", DataSchema);