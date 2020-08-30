
export const addToCart = (product, quantity, size, color) => {
    return ({
        type: 'ADD_TO_CART',
        payload: {
            product: product
        },
        quantity: quantity,
        size: size,
        color: color

    })
}
export const removeToCard = id => {
    return ({
        type: 'REMOVE_TO_CART',
        payload: {
            id: id
        }
    })
}
export const setUser = user => {
    return ({
        type: 'SET_USER',
        user: user
    })
}