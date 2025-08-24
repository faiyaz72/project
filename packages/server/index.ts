import express from 'express';
import type { Request, Response } from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const openaiApiKey = process.env.OPENAI_API_KEY;
app.get("/", (req: Request, res: Response) => {
  res.send(openaiApiKey);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});