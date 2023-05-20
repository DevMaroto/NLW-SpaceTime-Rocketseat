import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true /* todas URLs de front-end poderão accessar nosso back-end */,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    /* referente ao arquivo api.ts do mobile, precisa colocar o host: '0.0.0.0' para funcionar */
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP Maroto Server running on http://localhost:3333')
  })
