const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const User = require("./models/Login");

const port = process.env.PORT || 3000;

// Set up static and views directories
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Set up static directory
app.use(express.static(publicDirectoryPath));

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.post("/login", async (req, res) => {
  try {
    const artist = new User({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await artist.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
