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

pageController(server)
authController(server)

// databaseService.accessDatabase("users", (databaseData) => {
//   const user = new UserModel({ login: "tig3r", password: "123"})
//   if (databaseData.some(u => u.login === user.login)) {
//     console.log(`User with login ${user.login} already exists!!!`)
//     return databaseData
//   }
//   databaseData.push(user)
//   return databaseData
// })
