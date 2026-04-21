// Login Controller
// Handles user authentication flow
// Used by: /login page

// NEW: add email format validation
function validateLogin(email, password) {
    if (!email || !password) {
        return { success: false, error: 'Email and password required' }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return { success: false, error: 'Invalid email format' }
    }
    return { success: true }
}


function handleLoginError(response) {
    if (response.status === 401) {
        return 'Your email or password is incorrect!'
    }
}

module.exports = { validateLogin, handleLoginError }