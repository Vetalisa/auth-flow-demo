const databaseService = require("../database/database-service")
const UserModel = require("../database/users/user-model")
const SECRET_KEY = require("../sectet-key.json").value

const authController = (server) => {
  server.post("/auth", (req, res) => {
    console.log("POST /auth", JSON.stringify(req.body, null, 2))
    res.statusCode = 200
    res.send("success")
  })

  server.post("/registration", async (req, res) => {
    const userRawData = req.body
    res.cookie("secret-key", SECRET_KEY)

    const users = await databaseService.getFromDatabase("users")
    
    if (users.find(u => u.login === userRawData.login)) {
      res.statusCode = 400 // Unacceptable
      res.send(`User ${userRawData.login} already exists!`)
      return
    }

    const updatedUsers = await databaseService.accessDatabase("users", (users) => {
      const user = new UserModel({
        login: userRawData.login,
        password: userRawData.password,
      })
      return [...users, user]
    })

    res.send({
      users: updatedUsers,
      secretKey: SECRET_KEY,
    })
  })
}

module.exports = authController
