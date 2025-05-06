# Use official Node.js image
FROM node:20

WORKDIR /app

# Copy root package files and install root dependencies (concurrently)
COPY package.json package-lock.json* ./
RUN npm install

# Backend dependencies
COPY backend/package.json backend/package-lock.json* ./backend/
RUN npm install --prefix backend

# Frontend dependencies
COPY frontend/package.json frontend/package-lock.json* ./frontend/
RUN npm install --prefix frontend

# Copy source code
COPY backend ./backend
COPY frontend ./frontend

# Build frontend
RUN npm run build --prefix frontend

# Build backend
RUN npm run build --prefix backend

# Install 'serve' to serve frontend static files
RUN npm install -g serve

# Expose ports
EXPOSE 4000 3000

# Start both backend and frontend concurrently
CMD ["concurrently", "npm run dev --prefix backend", "serve -s frontend/dist -l 3000"] 