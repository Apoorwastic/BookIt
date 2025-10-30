# BookIt Backend

## Setup
1. Copy `.env.example` to `.env` and set `MONGO_URI`.
2. Install:
   ```
   cd backend
   npm install
   ```
3. Seed data (optional):
   ```
   npm run seed
   ```
4. Run:
   ```
   npm run dev
   ```
APIs:
- GET /experiences
- GET /experiences/:id
- POST /bookings
- POST /promo/validate
