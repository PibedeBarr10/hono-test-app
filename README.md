# Hono test app

### Description
Prototype of an English learning app

---

### Stack:
- Hono (Bun)
- SQLite
- no ORM (because of Bun dialet and SQLite)
- Docker & Docker Compose

### Plans:
- Arrow.js
- Valibot / Zod
- Hono's RPC
- Tailwind CSS (?)
- `bun:test` / `hono/testing`
- Lucia Auth / Hono's Basic Auth (?)

### VSC Extensions:
- lit-html

---

## How to run app?

### 1. Run the app

Run app without Docker
```
cd app
bun install
bun run dev
```
or:

Run app with Docker (docker-compose)
```
docker-compose up --build
```

### 2. Open app in browser

Default app port is `http://localhost:3000`, but when you run app with docker-compose use `:3001` port
