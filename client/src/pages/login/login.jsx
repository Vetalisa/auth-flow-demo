import React from "react"
import { Link } from "wouter"
import locationProvider from "../../providers/location.provider"

// Information Expert
class LoginPage extends React.Component {
  state = {
    form: {
      login: "",
      password: "",
    }
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

  onFormChange = (e) => {
    const { name, value } = e.target
    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  onSubmit = async (e) => {
    e.preventDefault()

    if (this.state.form.login === "") {
      alert("Provide a login!")
      return
    }

    if (this.state.form.password === "") {
      alert("Provide a password!")
      return
    }

    const credentials = {
      login: this.state.form.login,
      password: this.state.form.password,
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
              name="login"
              value={this.state.form.login}
              onChange={this.onFormChange}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={this.state.form.password}
              onChange={this.onFormChange}
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
