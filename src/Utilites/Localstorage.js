// Get Cart 
const getStoredCart = () => {
    const StoredCartString = localStorage.getItem('cart')
    if (StoredCartString) {
        return JSON.parse(StoredCartString)
    }
    return [];
}

// save cart in local storage
const SetCart = cart => {
    const CartString = JSON.stringify(cart)
    localStorage.setItem('cart', CartString);
}


const addToLS = (id) => {
    const cart = getStoredCart()
    cart.push(id)
    SetCart(cart)
}
const removeToLS = id => {
const cart = getStoredCart()
const remaining = cart.filter(idx=>idx!==id)
SetCart(remaining)
}
export { addToLS, getStoredCart ,removeToLS }