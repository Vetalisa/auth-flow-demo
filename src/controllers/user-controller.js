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

  server.post("/user-edit", async (req, res) => {
    const userId = req.cookies["user-id"]
    const newUserData = req.body

    await databaseService.accessDatabase("users", (users) => {
      const updatedUsers = users.map(u => {
        if (u.id !== Number(userId)) return u

        const updatedUser = {
          ...u,
          firstName: newUserData.firstName,
          lastName: newUserData.lastName,
          sex: newUserData.sex,
          age: newUserData.age,
          password: newUserData.newPassword
            ? newUserData.newPassword
            : u.password
        }
        return updatedUser
      })
      return updatedUsers
    })

    res.send("Successfully updated user")
  })
}

module.exports = userControoler
