const path = require("path")
const fs = require("fs")

class DatabaseService {
  getFromDatabase (databaseName) {
    const url = path.join(__dirname, `./${databaseName}/${databaseName}.json`)
    return new Promise((resolve, reject) => {
      fs.readFile(url, "utf8", (err, data) => {
        if (err) reject(err)
        const databaseData = JSON.parse(data)
        resolve(databaseData)
      })
    })
  }

  accessDatabase (databaseName, callback) {
    const url = path.join(__dirname, `./${databaseName}/${databaseName}.json`)
    return new Promise((resolve, reject) => {
      fs.readFile(url, "utf8", (err, data) => {
        if (err) throw err
        const databaseData = JSON.parse(data)
        const updatedDatabaseData = callback(databaseData)
        fs.writeFile(url, JSON.stringify(updatedDatabaseData, null, 2), () => {})
        resolve(updatedDatabaseData)
      })
    })
  }
}

const databaseService = new DatabaseService()

module.exports = databaseService
