const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const postRoutes = require("./routes/posts");
const PORT = process.env.PORT || 3000;
const db = require("./db/connection");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", postRoutes);
app.use("/api", userRoutes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
