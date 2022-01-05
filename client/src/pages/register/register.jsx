import React from "react"
import { Link } from "wouter"
import locationProvider from "../../providers/location.provider"

class RegisterPage extends React.Component {
  state = {
    form: {
      login: "",
      password: "",
      passwordRepeat: "",
    }
  }

  sendCredentials = (credentials) => {
    return fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
  }

  onRegisterClick = (e) => {
    e.preventDefault()
  
    if (this.state.form.password !== this.state.form.passwordRepeat) {
      alert("Passwords does not match!")
      this.setState({
        form: {
          ...this.state.form,
          password: "",
          passwordRepeat: "",
        }
      })
      return
    }
  
    const credentials = {
      login: this.state.form.login,
      password: this.state.form.password,
    }
  
    this.sendCredentials(credentials)
      .then(response => {
        if (response.ok) {
          alert("You are registered!")
          this.props.setLocation("/profile")
        } else {
          response.text()
            .then(errorText => {
              alert(errorText)
              this.setState({
                form: {
                  ...this.state.form,
                  login: "",
                  password: "",
                  passwordRepeat: "",
                }
              })
            })
        }
      })
  }

  onFormChange = (e) => {
    const { name, value } = e.target
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    })
  }

  render () {
    return (
      <main className="page-container">
        <h1>Registration form</h1>
        <Link href="/">Go to main page</Link>
        <Link href="/login">Login yourself</Link>
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
          <label>
            <p>Repeat password</p>
            <input
              type="password"
              name="passwordRepeat"
              value={this.state.form.passwordRepeat}
              onChange={this.onFormChange}
            />
          </label>
          <button onClick={this.onRegisterClick}>
            Register please
          </button>
        </form>
      </main>
    )
  }
}

const RegisterPageWithLocation = locationProvider(RegisterPage)

export default RegisterPageWithLocation
