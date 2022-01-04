import React from "react"
import { Link } from "wouter"

class MainPage extends React.Component {
  secretKeyIsPresent = () => {
    const secretKeyIsPresent = document.cookie
      .split(";")
      .find(cookie => {
        const [key, value] = cookie.split("=")
        return key === "secret-key" && Boolean(value)
      })
    return Boolean(secretKeyIsPresent)
  }

  render () {
    return (
      <main className="page-container">
        <h1>The Main Page</h1>
        <p>Hello!</p>
        {
          this.secretKeyIsPresent()
            ? <Link href="/profile">Go to Profile page</Link>
            : (
              <React.Fragment>
                <Link href="/login">Go to Login page</Link>
                <Link href="/register">Go to Register page</Link>
              </React.Fragment>
            )
        }
      </main>
    )
  }
}

export default MainPage
