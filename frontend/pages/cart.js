import Link from 'next/link'
import { useContext } from 'react'
import tw from 'twin.macro'
import MainLayout from '../components/layout/MainLayout'
import { useRouter } from 'next/router'
import { Store } from '../utils/store'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export default function CartPage() {
  const { state, dispatch } = useContext(Store)
  const router = useRouter()
  const {
    cart: { cartItems },
  } = state
  console.log(cartItems.length)
  const removeItemHandle = item => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }
  const checkoutCartHandler = () => {
    router.push("/checkout")
  }
  return (
    <>
      <h2>My Cart</h2>
      <div>
        {!!cartItems && cartItems.length === 0 ? (
          <p>
            Cart is empty.{' '}
            <Link tw="text-primary" href="/">
              Go shopping
            </Link>
          </p>
        ) : (
          <div tw="grid grid-cols-4 gap-5">
            <div tw="overflow-y-auto col-span-3 ">
              <table tw="min-w-full">
                <thead>
                  <tr tw="border-b">
                    <td>Index</td>
                    <td>Item</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <button
                            onClick={() => {
                              removeItemHandle(item)
                            }}
                          >
                            <HighlightOffIcon />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div tw='col-span-1'>
              <p>
                Total (
                {cartItems.reduce((total, item) => {
                  return total + item.quantity
                }, 0)}
                ) : ${' '}
                {cartItems.reduce((total, item) => {
                  return total + item.quantity * item.price
                }, 0)}
              </p>
              <button onClick={checkoutCartHandler} tw='w-full'>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

CartPage.getLayout = function getLayout(page) {
  return <MainLayout title="Cart">{page}</MainLayout>
}

// {
//   "name": "Modern Plastic Keyboard",
//   "slug": "illo-laborum-itaque",
//   "category": "Fantastic",
//   "image": "http://loremflickr.com/640/480/nature",
//   "price": "786.00",
//   "countInStock": 29911,
//   "brand": "Health",
//   "rating": 69308,
//   "numReviews": 41599,
//   "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
//   "id": "5",
//   "quantity": 5
// }
