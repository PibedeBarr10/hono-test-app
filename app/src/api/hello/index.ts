// hello.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('Hello World!'))

export default app