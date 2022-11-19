import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { useLoadingContext } from '../../context/loading'
import { productService } from '../../services/productService'
import { Store } from '../../utils/store'

export default function ProductDetail() {
  const { state, dispatch } = useContext(Store)
  const { query } = useRouter()
  const { slug } = query
  const [loading, setLoading] = useLoadingContext()
  const [product, setProduct] = useState()

  useEffect(() => {
    setLoading(true)
    productService
      .getProducts()
      .then(res => {
        console.log(res.data)
        setProduct(
          res.data.find(product => {
            return product.slug === slug
          }),
        )
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  if (!product) {
    return <div>Product not found!</div>
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((item) => { return item.slug === product.slug })
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Ooops, this product is out of stock')
    }

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    })
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <button onClick={addToCartHandler}>add to cart</button>
    </div>
  )
}

ProductDetail.getLayout = function getLayout(page) {
  return <MainLayout title='Product'>{page}</MainLayout>
}