import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { handleRoute } from "./route/handleRoute.js";
import route from "./route/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://kabir:kabir4321@ltm.dpvzh.mongodb.net/memory?retryWrites=true&w=majority";
const PORT = process.env.PORT || 1111;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is Connected :D ");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/", route);

app.listen(PORT, () => {
  console.log("Server is running Bro");
});
