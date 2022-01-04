import React from "react"
import { Link } from "wouter"

class MainPage extends React.Component {
  render () {
    return (
      <main>
        <h1>The Main Page</h1>
        <p>Hello!</p>
        <Link href="/login">Go to Login page</Link><br />
        <Link href="/register">Go to Register page</Link><br />
        <Link href="/profile">Go to Profile page</Link><br />
      </main>
    )
  }
}

export default MainPage
