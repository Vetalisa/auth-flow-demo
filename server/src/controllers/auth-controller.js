const databaseService = require("../database/database-service")
const UserModel = require("../database/users/user-model")
const SECRET_KEY = require("../sectet-key.json").value

const authController = (server) => {
  server.post("/auth", (req, res) => {
    res.statusCode = 200
    res.send("success")
  })

  server.post("/registration", async (req, res) => {
    const userRawData = req.body

    const users = await databaseService.getFromDatabase("users")
    
    if (users.find(u => u.login === userRawData.login)) {
      res.statusCode = 400 // Unacceptable
      res.send(`User ${userRawData.login} already exists!`)
      return
    }

    const user = new UserModel({
      login: userRawData.login,
      password: userRawData.password,
    })

    await databaseService.accessDatabase("users", (users) => {
      return [...users, user]
    })

    res.cookie("secret-key", SECRET_KEY)
    res.cookie("user-id", user.id)

    res.redirect("/profile")
  })

  server.post("/login", async (req, res) => {
    const credentials = req.body
    const { login, password } = credentials

    const users = await databaseService.getFromDatabase("users")
    const user = users.find(u => u.login === login && u.password === password)

    if (!user) {
      res.statusCode = 400 // Unacceptable
      res.send("Wrong credentials!")
      return
    }

    res.cookie("secret-key", SECRET_KEY)
    res.cookie("user-id", user.id)
    res.send("success")
  })

  server.post("/logout", async (req, res) => {
    res.cookie("secret-key", "")
    res.cookie("user-id", "")
    res.send("success")
  })
}

module.exports = authController
