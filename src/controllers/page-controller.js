const path = require("path")

const SECRET_KEY = "magnolia"

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
    const { key } = req.body
    if (key !== SECRET_KEY) {
      res.statusCode = 401 // Unauthorized
      res.send("Provide a appropriate key to get access to this page!")
      return
    }

    res.sendFile(path.join(__dirname, "../pages/registrant/registrant-page.html"))
  })
}

module.exports = pageController
