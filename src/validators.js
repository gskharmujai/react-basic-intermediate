export function checkEmail(email) {
  const errors = []
  if (email.length === 0) {
    errors.push("Required")
  }

  if (!email.endsWith("@gkwebs.dev")) {
    errors.push("Must end with @gkwebs.dev")
  }

  return errors
}

export function checkPassword(password) {
  const errors = []
  if (password.length < 10) {
    errors.push("Password length should be more than 10 characters")
  }

  if (!password.match(/[a-z]/)) {
    errors.push("Must include atleast 1 lowercase alphabet")
  }

  if (!password.match(/[A-Z]/)) {
    errors.push("Must include atleast 1 uppercase alphabet")
  }

  if (!password.match(/[0-9]/)) {
    errors.push("Must include atleast 1 number")
  }

  return errors
}
