import request from 'supertest';
import express from 'express';
import { getDb } from './db';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const db = await getDb();
  const notes = await db.all('SELECT * FROM notes');
  res.json(notes);
});

describe('GET /api/notes', () => {
  it('should return an array (possibly empty)', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
}); 