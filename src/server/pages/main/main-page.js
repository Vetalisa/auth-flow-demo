const login = document.querySelector("#login")
const registration = document.querySelector("#registration")
const profile = document.querySelector("#profile")

const secretKeyIsPresent = document.cookie
  .split(";")
  .find(cookie => {
    const [key, value] = cookie.split("=")
    return key === "secret-key" && Boolean(value)
  })

if (secretKeyIsPresent) {
  login.remove()
  registration.remove()
} else {
  profile.remove()
}
