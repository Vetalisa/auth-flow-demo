const submitButton = document.querySelector("#submit-button")
const login = document.querySelector("#login")
const password = document.querySelector("#password")

const sendCredential = (credentials) => {
  return fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
}

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

  sendCredential(credentials)
    .then(response => {
      if (response.ok) {
        window.location.href = response.url
      } else {
        alert("Error!")
      }
    })
}

submitButton.addEventListener("click", onSubmit)
