const REMOVE='REMOVE',
      ADD='ADD'

export function remove(item){
    return {
        type: REMOVE,
        item
    }
}

export function add(item){
    return {
        type: ADD,
        item
    }
}

let initialState={
    cart: []
}

export default function updateCart(state=initialState, action){
    let newCart=[...state.cart]
    switch (action.type){
        case REMOVE:
            newCart.splice(newCart.indexOf(action.item),1)
            return Object.assign({}, state, {cart: newCart})

        case ADD:
            newCart.push(action.item)
            return Object.assign({}, state, {cart: newCart})
        
        default:
            return state
    }       
}