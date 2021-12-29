const authController = (server) => {
  server.post("/auth", (req, res) => {
    console.log("POST /auth", JSON.stringify(req.body, null, 2))
  })
}

module.exports = authController
