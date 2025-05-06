# 3-Tier Web Application POC

This project demonstrates a simple 3-tier web application using TypeScript for both frontend and backend.

## Stack
- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express + TypeScript
- **Database:** SQLite

## Structure
```
3tier-poc/
  backend/
    src/
      server.ts
      db.ts
    package.json
    tsconfig.json
    db.sqlite
  frontend/
    src/
      App.tsx
      index.tsx
    public/
      index.html
    package.json
    tsconfig.json
  package.json (root, for concurrent start)
  start.bat (root, for Windows concurrent start)
```

## Features
- View and add notes (simple CRUD)
- Demonstrates separation of concerns for each tier

## Quick Start (Concurrent)

From the `3tier-poc` directory:

### On macOS/Linux
```sh
npm install  # installs root and concurrently
npm install --prefix backend
npm install --prefix frontend
npm start    # starts both backend and frontend together
```

### On Windows
Just run:
```
start.bat
```

- Backend: [http://localhost:4000](http://localhost:4000)
- Frontend: [http://localhost:3000](http://localhost:3000) 