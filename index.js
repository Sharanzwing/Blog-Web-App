import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.post("/post", (req, res) => {
  const { slideTag, slideExcerpt, slideHeading, authorName } = req.body;
  res.render("index.ejs", { slideTag, slideExcerpt, slideHeading, authorName });  
});

app.get("/update", (req, res) => {
  app.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});