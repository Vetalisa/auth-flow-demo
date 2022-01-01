const path = require("path")

const SECRET_KEY = require("../sectet-key.json").value

const pageController = (server) => {
  // Public pages
  server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/main/main-page.html"))
  })

  server.get("/registration", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/registration/registration-form.html"))
  })

  server.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/login/login-form.html"))
  })

  server.get("/guest-page", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/guest/guest-page.html"))
  })

  // Private pages
  server.get("/registrant-page", (req, res) => {
    const accessKey = req.cookies["secret-key"]
    if (accessKey !== SECRET_KEY) {
      res.statusCode = 401 // Unauthorized
      res.redirect("/registration")
      return
    }

    res.sendFile(path.join(__dirname, "../pages/registrant/registrant-page.html"))
  })
}

module.exports = pageController
