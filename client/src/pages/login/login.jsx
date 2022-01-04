import React from "react"
import { Link } from "wouter"
import locationProvider from "../../providers/location.provider"

class LoginPage extends React.Component {
  state = {
    login: "",
    password: "",
  }

  sendCredentials = (credentials) => {
    return fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
  }

  onLoginChange = (e) => {
    this.setState({ login: e.target.value })
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  onSubmit = async (e) => {
    e.preventDefault()

    if (this.state.login === "") {
      alert("Provide a login!")
      return
    }

    if (this.state.password === "") {
      alert("Provide a password!")
      return
    }

    const credentials = {
      login: this.state.login,
      password: this.state.password,
    }

    const response = await this.sendCredentials(credentials)

    if (response.ok) {
      this.props.setLocation("/profile")
    } else {
      alert("Error!")
    }
  }

  render () {
    return (
      <main className="page-container">
        <h1>Login form</h1>
        <Link href="/">Go to main page</Link>
        <Link href="/register">Register yourself</Link>
        <form>
          <label>
            <p>Login</p>
            <input
              type="text"
              value={this.state.login}
              onChange={this.onLoginChange}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </label>
          <button onClick={this.onSubmit}>
            Login
          </button>
        </form>
      </main>
    )
  }
}

const LoginPageWithLocation = locationProvider(LoginPage)

export default LoginPageWithLocation
