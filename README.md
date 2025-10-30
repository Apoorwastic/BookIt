# BookIt - Experiences & Slots

This repository contains a ready-to-run fullstack project (frontend + backend).

## Structure
- backend/  -> Express + MongoDB (Mongoose)
- frontend/ -> Vite + React + TypeScript + Tailwind

## Quick start (local)
1. Start MongoDB (or use Atlas). Copy backend/.env.example -> backend/.env and set MONGO_URI.
2. In a terminal:
   - cd backend
   - npm install
   - npm run seed   # optional: seeds experience data
   - npm run dev
3. In another terminal:
   - cd frontend
   - npm install
   - copy frontend/.env.example -> frontend/.env (adjust VITE_API_URL if needed)
   - npm run dev

Both apps will run locally (frontend default on port 5173, backend on 5000).
