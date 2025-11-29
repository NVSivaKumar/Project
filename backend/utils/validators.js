export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(String(email).toLowerCase())
}

export const validatePhone = (phone) => {
  if (!phone) return false
  const digits = String(phone).replace(/\D/g, '')
  return /^\d{10}$/.test(digits)
}

export const validateName = (name) => {
  if (!name) return false
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/
  return nameRegex.test(name.trim())
}

export const validatePassword = (password) => {
  return typeof password === 'string' && password.length >= 8
}
