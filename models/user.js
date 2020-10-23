const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
    // ObjectId is a special type typically used for unique identifiers.
    // ObjectId is a class, and ObjectIds are objects. However, they are represented as strings.
    // When you convert an ObjectId to a string using toString(), you get a 24-character hexadecimal string.
    //
  },
  { timestamps: true }
);
// each schema maps to a MongoDB collection and defines the shape of documents within that collection.

module.exports = mongoose.model("users", User);
// when you call mongoose.model on a schema, Mongoose "compiles" a model for you.
// first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
//Note: the .model() function makes a copy of schema. Make sure that you've added everything you want to schema,
// including hooks, before calling .model()!
