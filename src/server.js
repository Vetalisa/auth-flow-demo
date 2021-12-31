const express = require("express")
const bodyParser = require("body-parser")
const pageController = require("./controllers/page-controller")
const authController = require("./controllers/auth-controller")

const port = process.env.SERVER_PORT ?? "3030"

const server = express()
server.use(bodyParser.json())

server.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
})

const controllers = [
  pageController,
  authController,
]

for (const controller of controllers) {
  controller(server)
}
