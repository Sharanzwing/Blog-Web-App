import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;
let submittedData = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index.ejs", { submittedData : submittedData });
});

app.get("/post", (req, res) => {
  res.render("post.ejs", { isEditing: false, post: null });
});

app.post("/post", (req, res) => {
  const { slideTag, slideExcerpt, slideHeading, authorName } = req.body;
  submittedData.push({ slideTag : slideTag, slideExcerpt : slideExcerpt, slideHeading : slideHeading, authorName : authorName });
  res.render("index.ejs", { submittedData : submittedData });  
});

app.get("/edit/:id", (req, res) => {
  const postId = req.params.id;
  const postToEdit = submittedData[postId];
  if (postToEdit) {
    res.render("post.ejs", {
      post: postToEdit,
      postId: postId,
      isEditing: true
    });
  } else {
    res.redirect("/");
  }
});

app.post("/edit/:id", (req, res) => {
  const postId = req.params.id;

  submittedData[postId].slideTag = req.body.slideTag;
  submittedData[postId].slideExcerpt = req.body.slideExcerpt;
  submittedData[postId].slideHeading = req.body.slideHeading;
  submittedData[postId].authorName = req.body.authorName;

  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});