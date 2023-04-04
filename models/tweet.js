const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
const model = mongoose.model // shorthand for model function


const tweetSchema = new Schema(
    {
      title: String,
      body: String,
      author: String,
      likes: { type: Number, default: 0 },
      sponsored: { type: Boolean, default: false },
    },
    { timestamps: true }
  );

  const Tweet = model("Tweet", tweetSchema);

  module.exports = Tweet;