import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database<sqlite3.Database, sqlite3.Statement>;

export async function getDb() {
  if (!db) {
    db = await open({
      filename: './backend/db.sqlite',
      driver: sqlite3.Database
    });
    await db.run(`CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL
    )`);
  }
  return db;
} 