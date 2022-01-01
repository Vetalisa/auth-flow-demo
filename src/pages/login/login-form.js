const submitButton = document.querySelector("#submit-button")
const login = document.querySelector("#login")
const password = document.querySelector("#password")

const onSubmit = (e) => {
  e.preventDefault()

  if (login.value === "") {
    alert("Provide a login!")
    login.focus()
    return
  }

  if (password.value === "") {
    alert("Provide a password!")
    password.focus()
    return
  }

  const credentials = {
    login: login.value,
    password: password.value,
  }

  alert("You are logged in!")
  window.location.pathname = "/"
}

submitButton.addEventListener("click", onSubmit)