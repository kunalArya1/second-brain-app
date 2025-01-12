import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

app.get("/", (req, res) => {
  res.send("App is runing");
});

app.listen(process.env.PORT, () => {
  console.log(`App is Running on port ${process.env.PORT}`);
});
