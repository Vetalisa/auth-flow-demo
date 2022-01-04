const path = require("path")

const pageController = (server) => {
  server.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../../client/public/index.html"))
  })
}

module.exports = pageController
