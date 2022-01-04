import React from "react"
import { Link } from "wouter"

class MainPage extends React.Component {
  render () {
    return (
      <main className="page-container">
        <h1>The Main Page</h1>
        <p>Hello!</p>
        <Link href="/login">Go to Login page</Link>
        <Link href="/register">Go to Register page</Link>
        <Link href="/profile">Go to Profile page</Link>
      </main>
    )
  }
}

export default MainPage
