class UserModel {
  constructor ({ login, password }) {
    // non-editable
    this.id = Date.now()
    this.login = login

    // can edit
    this.password = password

    // supposed to be edited
    this.firstName = "Default Name"
    this.lastName = "Default Last Name"
    this.sex = null
    this.age = null
  }
}

module.exports = UserModel
