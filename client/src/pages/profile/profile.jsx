import React from "react"
import { Link } from "wouter"
import locationProvider from "../../providers/location.provider"
import "./profile.css"

class ProfilePage extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      sex: "",
      age: "",
      newPassword: "",
    },
  }

  async componentDidMount () {
    const userFormData = await this.fetchUserFormData()
    this.setState({
      form: {
        firstName: userFormData.firstName ?? "",
        lastName: userFormData.lastName ?? "",
        sex: userFormData.sex ?? "",
        age: userFormData.age ?? "",
      },
    })
  }

  fetchUserFormData = async () => {
    const response = await fetch("/user-form-data")
    if (!response.ok) return alert("Error!")
    const userData = await response.json()

    const userFormData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      sex: userData.sex,
      age: userData.age,
    }

    return userFormData
  }

  onFormChange = (e) => {
    const input = e.target
    const { name, value } = input
    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  onEditClick = async (e) => {
    e.preventDefault()

    const newUserData = { ...this.state.form }

    const response = await fetch("/user-edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
  
    if (!response.ok) return alert("Something went wrong!")
  
    alert("Updated user profile!")
  }

  onLogoutClick = async (e) => {
    e.preventDefault()
    const response = await fetch("/logout", { method: "POST" })
    if (response.ok) {
      this.props.setLocation("/")
    } else {
      alert("Error while logout!")
    }
  }

  render () {
    return (
      <main className="page-container">
        <h1>Profile page</h1>
        <Link href="/">Go to main page</Link>
        <button
          className="logout-button"
          onClick={this.onLogoutClick}
        >
          Log out
        </button>
        <h2>Edit my profile</h2>
        <form>
          <label>
            <p>First name</p>
            <input
              type="text"
              name="firstName"
              onChange={this.onFormChange}
              value={this.state.form.firstName}
            />
          </label>
          <label>
            <p>Last name</p>
            <input
              type="text"
              name="lastName"
              onChange={this.onFormChange}
              value={this.state.form.lastName}
            />
          </label>
          <label>
            <p>Sex</p>
            <input
              type="text"
              name="sex"
              onChange={this.onFormChange}
              value={this.state.form.sex}
            />
          </label>
          <label>
            <p>Age</p>
            <input
              type="text"
              name="age"
              onChange={this.onFormChange}
              value={this.state.form.age}
            />
          </label>
          <label>
            <p>New password</p>
            <input
              type="text"
              name="newPassword"
              onChange={this.onFormChange}
              value={this.state.form.newPassword}
            />
          </label>
          <button onClick={this.onEditClick}>Edit</button>
        </form>
      </main>
    )
  }
}

const ProfilePageWithLocation = locationProvider(ProfilePage)

export default ProfilePageWithLocation
