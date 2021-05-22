import express from "express";
import { getPosts, createPost, deletePost } from "../controllers/posts.js";

const route = express.Router();

route.get("/", getPosts);
route.post("/", createPost);
route.delete("/", deletePost);
route.get("/posts", (req, res) => {
  res.send("This is post");
});

export default route;
