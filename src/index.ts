import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// dotenv config
dotenv.config();
const PORT: string | number = process.env.PORT || 3000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ data: { message: "Goodbye world!" } });
});

app.get("/hello", (req: Request, res: Response) => {
  const name = req.query.name;

  res
    .status(200)
    .json({ data: { message: `Hola, ${name ? name : "anonimo"}` } });
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
