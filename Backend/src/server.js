import express from "express"; // const express = require("express");
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

//simple custom midddleware
// app.use((req, res, next) => {
//   console.log(`Got a req method of ${req.method} and req url ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRouter);

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});

//mongodb+srv://toolsai897:8CFh1gKAh3kZhSNYongodb.net/?retryWrites=true&w=majority&appName=Cluster0
