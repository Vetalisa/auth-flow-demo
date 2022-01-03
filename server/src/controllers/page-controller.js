const path = require("path")

const SECRET_KEY = require("../sectet-key.json").value

const pageController = (server) => {
  server.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../../client/public/index.html"))
  })
}

module.exports = pageController
