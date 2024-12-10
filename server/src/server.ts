import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import { dbConnect } from "./config/dbConnect";
import { startApolloServer } from "./apollo/apolloServer";

const app = express();

app.use(cookieParser());

dbConnect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

async function startServer() {
  await startApolloServer(app);
}

startServer();
