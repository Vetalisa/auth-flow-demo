const express = require("express")
const bodyParser = require("body-parser")
const pageController = require("./controllers/page-controller")

const port = process.env.SERVER_PORT ?? "3030"

const server = express()

server.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
})

pageController(server)
