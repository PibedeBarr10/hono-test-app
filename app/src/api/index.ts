// api/index.ts
import { Hono } from 'hono'
import hello from './hello'

const app = new Hono()

// nested routes
app.route('/hello', hello)

app.get('/', (c) => c.json('Hello API!'))

export default app