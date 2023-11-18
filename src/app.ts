import { Hono } from 'hono'

// routes
import api from './api'
import pages from './pages'

// initialize database client
import { initDbClient } from './database/dbClient'

// ===
const app = new Hono()

app.notFound((c) => c.json({
    message: 'Page not Found',
    ok: false
}, 404))

// nested routes
app.route('/api', api)
app.route('/', pages)

// database initialization
initDbClient()
    .then((db) => {
        const query = db.query(`SELECT * FROM dictionary`);
        // console.log(query.get()) // get first element
        console.log(query.all())
    })

export default {
    port: 3000,
    fetch: app.fetch
}
