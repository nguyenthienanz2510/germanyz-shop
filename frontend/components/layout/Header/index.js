import Link from 'next/link'
import { useContext } from 'react'
import tw from 'twin.macro'
import { Store } from '../../../utils/store'
import ButtonChangeTheme from './ButtonChangeTheme'

const Header = () => {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  console.log("CART:", cart.cartItems.length)
  return (
    <HeaderStyle>
      <NavigationStyle>
        <Link href="/">
          <MainLogoLinkStyle>Germanyz</MainLogoLinkStyle>
        </Link>
        <div>
          <Link href="/cart">
            Cart
            {cart.cartItems.length > 0 && (
              <span>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
            )}
          </Link>

          <ButtonChangeTheme />
        </div>
      </NavigationStyle>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = tw.header`
    bg-white dark:bg-color-gray-rgba-06 shadow-sm
`
const MainLogoLinkStyle = tw.button`
    text-lg font-bold text-primary
`
const NavigationStyle = tw.nav`
    flex justify-between items-center px-5 shadow-md h-16 
`
