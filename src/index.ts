import express from 'express'

const server = express()

server.get('/', (_, res): void => {
  res.send('Picante 🌶')
})

server.listen(3000, (): void => {
  console.log(`[SERVER] Running at localhost:3000`)
})

export { express as server }
