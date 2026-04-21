// Checkout Controller
// Manages the guest and registered user checkout flow
// Affects: checkout page, payment summary, order confirmation

function applyGuestDiscount(cartTotal) {
    return cartTotal * 0.95  // 5% flat discount for all guest users
}

function calculateOrderTotal(items, userType) {
    const subtotal = items.reduce((sum, item) => sum + item.price, 0)
    if (userType === 'guest') {
        return applyGuestDiscount(subtotal)
    }
    return subtotal
}

module.exports = { applyGuestDiscount, calculateOrderTotal }