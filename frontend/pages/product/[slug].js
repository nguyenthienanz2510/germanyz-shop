import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { useLoadingContext } from '../../context/loading'
import { productService } from '../../services/productService'

export default function ProductDetail() {
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

  if(!product){
    return <div>Product not found!</div>
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  )
}

ProductDetail.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
