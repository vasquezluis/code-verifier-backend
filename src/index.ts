import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// dotenv config
dotenv.config();
const PORT: string | number = process.env.PORT || 3000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hola mundo");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("bye");
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
