import express from 'express';
import { getDb } from './db';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const db = await getDb();
  const notes = await db.all('SELECT * FROM notes');
  res.json(notes);
});

app.post('/api/notes', async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: 'Content required' });
  const db = await getDb();
  const result = await db.run('INSERT INTO notes (content) VALUES (?)', content);
  res.json({ id: result.lastID, content });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 