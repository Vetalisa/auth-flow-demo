import React from "react"
import { Link } from "wouter"
import locationProvider from "../../providers/location.provider"
import "./profile.css"

class ProfilePage extends React.Component {
  render () {
    return (
      <main className="page-container">
        <h1>Profile page</h1>
        <Link href="/">Go to main page</Link>
        <button className="logout-button">Log out</button>
        <h2>Edit my profile</h2>
        <form>
          <label>
            <p>First name</p>
            <input id="first-name" type="text" />
          </label>
          <label>
            <p>Last name</p>
            <input id="last-name" type="text" />
          </label>
          <label>
            <p>Sex</p>
            <input id="sex" type="text" />
          </label>
          <label>
            <p>Age</p>
            <input id="age" type="text" />
          </label>
          <label>
            <p>New password</p>
            <input id="new-password" type="text" />
          </label>
          <button id="edit-submit-button">Edit</button>
        </form>
      </main>
    )
  }
}

const ProfilePageWithLocation = locationProvider(ProfilePage)

export default ProfilePageWithLocation
