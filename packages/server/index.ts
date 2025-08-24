import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const openaiApiKey = process.env.OPENAI_API_KEY;

const client = new OpenAI({
   apiKey: openaiApiKey,
});

app.get('/', (req: Request, res: Response) => {
   res.send(openaiApiKey);
});

app.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello World!' });
});

app.post('/api/chat', async (req: Request, res: Response) => {
   const { prompt } = req.body;

   const response = await client.responses.create({
      model: 'gpt-4o-mini',
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 100,
   });

   res.json({ message: response.output_text });
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
