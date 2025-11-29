# HireSphere Backend (Simple Demo)

This is a minimal Node/Express backend intended to accompany the HireSphere frontend demo. It provides basic endpoints for signup, login, sending verification code, and retrieving user profiles. It uses `lowdb` (a small JSON-based database) for persistence so you can run it locally without installing a full DB.

## Setup

1. Install dependencies

```powershell
cd backend
npm install
```

2. Copy env example

```powershell
cp .env.example .env
# On Windows PowerShell, run:
# copy .env.example .env
```

3. Start the server

```powershell
npm run dev
# or
npm start
```

The server will run at `http://localhost:4000` by default.

## Endpoints

- `GET /api/health` - health check
- `POST /api/auth/send-code` - simulate sending a verification code to an email/phone
- `POST /api/auth/signup` - signup a user
- `POST /api/auth/login` - login (returns a mock token)
- `GET /api/users/:id` - get user profile

## Notes
- This backend is intentionally minimal and not production-ready. It uses bcryptjs for password hashing and lowdb for persistence.
- You can inspect `backend/db.json` to see stored users and codes.
