class UserModel {
  constructor ({ login, password }) {
    this.id = Date.now()
    this.login = login
    this.password = password
    this.firstName = "Default Name"
    this.lastName = "Default Last Name"
    this.sex = null
    this.age = null
  }
}

module.exports = UserModel
