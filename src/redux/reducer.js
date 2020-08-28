const initialState = [


]
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            var index = state.findIndex((products) => products.products.product.id === action.payload.product.id)
            if (index >= 0) {
                state[index].quantity += action.quantity
                state[index].size = action.size
                state[index].color = action.color
            }
            else {
                state.push({ products: action.payload, quantity: action.quantity, size: action.size, color: action.color })
            }
            console.log(state)
            return [...state]
        case 'REMOVE_TO_CART':
            var index = state.findIndex((products) => products.products.product.id === action.payload.id)
            if (index >= 0) {
                state.splice(index, 1)
            }
            return [...state]

        default:
            return state
    }
}