const db = require("../db/connection");
const Post = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const posts = [
    {
      title: "My first post",
      imgURL:
        "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: "This is a cat",
      author: "Kyle Thousand",
    },
    {
      title: "My Second Post",
      imgURL:
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: "This cat kind of looks like my cat.",
      author: "Kyle Thousand",
    },
  ];
  await Post.insertMany(posts);
  console.log("Created Posts!");
};
const run = async () => {
  await main();
  db.close();
};

run();
