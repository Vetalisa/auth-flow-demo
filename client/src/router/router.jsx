import React from "react"
import { Route } from "wouter"
import LoginPage from "../pages/login/login"
import MainPage from "../pages/main/main"
import ProfilePage from "../pages/profile/profile"
import RegisterPage from "../pages/register/register"

// Creator + Information Expert
class Router extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
      </React.Fragment>
    )
  }
}

export default Router
