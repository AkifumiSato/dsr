import { createApp } from 'servest'

const app = createApp()
app.handle('/', async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/plain',
    }),
    body: 'Hello, Servest!',
  })
})
app.listen({ port: 8000 })