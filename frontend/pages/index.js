import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import MainLayout from '../components/layout/MainLayout'
import ProductCard from '../components/product/ProductCard'
import { useLoadingContext } from '../context/loading'
import { productService } from '../services/productService'

const IndexPage = () => {
  const [loading, setLoading] = useLoadingContext()
  const [products, setProducts] = useState()

  useEffect(() => {
    setLoading(true)
    productService
      .getProducts()
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <ProductsContainer>
        {products &&
          products.map((product, index) => {
            return <ProductCard product={product} key={index} />
          })}
      </ProductsContainer>
    </>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default IndexPage

const ProductsContainer = tw.div`
  grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
`
