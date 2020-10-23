const db = require("../db/connection");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      username: "kylethousand",
      email: "kathousand@gmail.com",
    },
    {
      username: "kalethousand",
      email: "kalethousand@gmail.com",
    },
  ];
  await User.insertMany(users);
  console.log("Created Posts!");
};
const run = async () => {
  await main();
  db.close();
};

run();
