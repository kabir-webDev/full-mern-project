import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const route = express.Router();

route.get("/", getPosts);
route.post("/", createPost);

route.get("/posts", (req, res) => {
  res.send("This is post");
});

export default route;
