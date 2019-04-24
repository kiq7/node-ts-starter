import express from 'express'

const server = express()

server.get('/', (_, res): void => {
  res.send('Picante 🌶')
})

server.listen(3000, (): void => {
  console.log(`Server running at http://localhost:3000`)
})

export { express as server }
