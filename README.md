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
    Dockerfile
  frontend/
    src/
      App.tsx
      index.tsx
    public/
      index.html
    package.json
    tsconfig.json
    Dockerfile
  package.json (root, for concurrent start)
  start.bat (root, for Windows concurrent start)
  Dockerfile (monolithic, for POC)
  docker-compose.yml (for multi-container setup)
.github/
  workflows/
    ci-cd.yml (GitHub Actions pipeline)
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

## Docker (Multi-Container)

From the `3tier-poc` directory:

```sh
docker-compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:4000](http://localhost:4000)

## CI/CD Pipeline (GitHub Actions)

- The pipeline is defined in `.github/workflows/ci-cd.yml`.
- It runs automatically on every push or pull request to the `main` branch.
- **What it does:**
  - Installs dependencies for backend and frontend
  - Runs unit tests for both
  - Builds Docker images for backend and frontend
- **How to view pipeline runs:**
  - Go to your repository on GitHub
  - Click the "Actions" tab to see the status and logs of each workflow run "# AIDrivenPOC" 
