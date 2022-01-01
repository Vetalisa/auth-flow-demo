const submitButton = document.querySelector("#submit-button")
const login = document.querySelector("#login")
const password = document.querySelector("#password")
const passwordRepeat = document.querySelector("#password-repeat")

const sendCredential = (credentials) => {
  return fetch("/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
}

const onSubmit = (e) => {
  e.preventDefault()

  if (password.value !== passwordRepeat.value) {
    alert("Passwords does not match!")
    password.value = ""
    passwordRepeat.value = ""
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
        return response.json()
      } else {
        throw response.text()
      }
    })
    .then((updatedUsers) => {
      alert("You are registered!")
      window.location.pathname = "/"
    })
    .catch(errorMessage => {
      errorMessage.then(text => {
        alert(text)
        login.value = ""
        password.value = ""
        passwordRepeat.value = ""
        login.focus()
      })
    })
}

submitButton.addEventListener("click", onSubmit)
