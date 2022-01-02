const databaseService = require("../database/database-service")

const userControoler = (server) => {
  server.get("/user-form-data", async (req, res) => {
    const userId = req.cookies["user-id"]

    const users = await databaseService.getFromDatabase("users")
    const user = users.find(u => u.id === Number(userId))

    if (!user) {
      res.statusCode = 404 // Not Found
      res.send("User not found!")
      return
    }

    const userFormData = {
      firstName: user.firstName,
      lastName: user.lastName,
      sex: user.sex,
      age: user.age,
    }

    res.send(userFormData)
  })
}

module.exports = userControoler
