const path = require("path")

const pageController = (server) => {
  server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/main-page.html"))
  })

  server.get("/registration", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/registration-form.html"))
  })

  server.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/login-form.html"))
  })
}

module.exports = pageController
