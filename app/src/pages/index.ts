// pages/index.ts
import { Hono } from 'hono'
import { html } from 'hono/html'

const pages = new Hono()

const template = (name: string) =>  html`
<h1>Hello ${name}!</h1>
`

pages.get('/', (c) => {
    const name = 'World'
    return c.html(template(name))
})

export default pages