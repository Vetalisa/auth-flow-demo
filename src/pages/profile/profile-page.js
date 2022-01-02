const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const sex = document.querySelector("#sex")
const age = document.querySelector("#age")
const newPassword = document.querySelector("#new-password")
const editSubmitButton = document.querySelector("#edit-submit-button")

const fetchUserFormData = () => {
  return fetch("/user-form-data")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        alert("Error!")
      }
    })
}

const initializeFormFields = async () => {
  const user = await fetchUserFormData()
  firstName.value = user.firstName
  lastName.value = user.lastName
  sex.value = user.sex
  age.value = user.age
}

initializeFormFields()

editSubmitButton.addEventListener("click", (e) => {
  e.preventDefault()
})
