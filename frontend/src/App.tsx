import React, { useEffect, useState } from 'react';

type Note = {
  id: number;
  content: string;
};

const API_URL = 'http://localhost:4000/api/notes';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setNotes);
  }, []);

  const addNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newNote })
    });
    const note = await res.json();
    setNotes([...notes, note]);
    setNewNote('');
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <form onSubmit={addNote} style={{ marginTop: '1rem' }}>
        <input
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
          placeholder="Add a note"
          style={{ width: '70%' }}
        />
        <button type="submit" style={{ width: '28%', marginLeft: '2%' }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default App; 