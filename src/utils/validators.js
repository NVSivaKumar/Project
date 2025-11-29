/**
 * Validation utilities for common form validations
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} - { isValid, strength, message }
 */
export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  const strength = [
    password.length >= minLength,
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSpecialChar,
  ].filter(Boolean).length;

  const strengthLevels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];

  return {
    isValid: strength >= 3,
    strength: strengthLevels[strength],
    message: strength < 3 ? 'Password is too weak' : 'Password is strong',
  };
};

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean}
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Validate required field
 * @param {any} value - Value to check
 * @returns {boolean}
 */
export const validateRequired = (value) => {
  return value !== null && value !== undefined && value !== '';
};

/**
 * Validate minimum length
 * @param {string} value - Value to check
 * @param {number} length - Minimum length
 * @returns {boolean}
 */
export const validateMinLength = (value, length) => {
  return value && value.length >= length;
};

/**
 * Validate maximum length
 * @param {string} value - Value to check
 * @param {number} length - Maximum length
 * @returns {boolean}
 */
export const validateMaxLength = (value, length) => {
  return value && value.length <= length;
};

/**
 * Validate name (only letters, spaces, hyphens, apostrophes allowed)
 * Accepts international letters (basic Latin-1 Supplement range)
 * @param {string} name - Name to validate
 * @returns {boolean}
 */
export const validateName = (name) => {
  if (!name) return false;
  // Allow letters (including many accented characters), spaces, hyphens and apostrophes
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
  return nameRegex.test(name.trim());
};
