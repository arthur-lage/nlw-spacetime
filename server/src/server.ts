import fastify, { FastifyRequest, FastifyReply } from 'fastify'

const app = fastify()

app.get('/', (req: FastifyRequest, rep: FastifyReply) => {
  rep.send({ message: 'hello' })
})

app.listen({
  port: 3333
}).then(() => {
  console.log('Running app on http://localhost:3333')
})