import express from "express";
import methodOverride from "method-override";

const app = express();
const port = process.env.PORT || 3000;
let submittedData = [];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index.ejs", { submittedData : submittedData });
});

app.get("/post", (req, res) => {
  res.render("post.ejs", { isEditing: false, post: null });
});

app.post("/post", (req, res) => {
  const { slideTag, slideExcerpt, slideHeading, authorName } = req.body;
  submittedData.push({ slideTag : slideTag, slideExcerpt : slideExcerpt, slideHeading : slideHeading, authorName : authorName });
  res.redirect("/");  
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

app.patch("/edit/:id", (req, res) => {
  const postId = req.params.id;

  if(submittedData[postId]){
    submittedData[postId].slideTag = req.body.slideTag;
    submittedData[postId].slideExcerpt = req.body.slideExcerpt;
    submittedData[postId].slideHeading = req.body.slideHeading;
    submittedData[postId].authorName = req.body.authorName;
  }

  res.redirect("/");
});

app.delete("/delete/:id", (req, res) => {
  const deleteId = req.params.id;
  if(submittedData[deleteId]){
    submittedData.splice(deleteId, 1);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});