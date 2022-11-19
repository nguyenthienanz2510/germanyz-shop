import { createContext, useReducer } from 'react'

export const Store = createContext()

const initialState = {
  cart: {
    cartItems: [],
  },
}

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(item => {
        return item.slug === newItem.slug
      })
      const cartItems = existItem
        ? state.cart.cartItems.map(item => {
            return item.name === newItem.name ? newItem : item
          })
        : [...state.cart.cartItems, newItem]
      console.log(cartItems)
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter((item) => { 
        return item.slug !== action.payload.slug
       })
       console.log("store", cartItems)
       return { ...state, cart: { ...state.cart, cartItems } }
    }
    default:
      return state
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{children}</Store.Provider>
}
