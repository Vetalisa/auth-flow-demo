const logoutButton = document.querySelector("#logout-button")
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const sex = document.querySelector("#sex")
const age = document.querySelector("#age")
const newPassword = document.querySelector("#new-password")
const editSubmitButton = document.querySelector("#edit-submit-button")

const fetchUserFormData = async () => {
  const response = await fetch("/user-form-data")
  if (!response.ok) return alert("Error!")
  const user = await response.json()
  return user
}

const initializeFormFields = async () => {
  const user = await fetchUserFormData()
  firstName.value = user.firstName
  lastName.value = user.lastName
  sex.value = user.sex
  age.value = user.age
}

initializeFormFields()

logoutButton.addEventListener("click", async (e) => {
  e.preventDefault()
  const response = await fetch("/logout", { method: "POST" })
  if (response.ok) {
    window.location.href = response.url
  } else {
    alert("Error while logout!")
  }
})

editSubmitButton.addEventListener("click", (e) => {
  e.preventDefault()
})
