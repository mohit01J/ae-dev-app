// Login Controller
// Handles user authentication flow
// Used by: /login page

function validateLogin(email, password) {
    if (!email || !password) {
        return { success: false, error: 'Email and password required' }
    }
    return { success: true }
}

function handleLoginError(response) {
    if (response.status === 401) {
        return 'Your email or password is incorrect!'
    }
}

module.exports = { validateLogin, handleLoginError }