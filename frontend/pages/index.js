import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import tw from 'twin.macro'
import { useTheme } from 'next-themes'
import { useLoadingContext } from '../context/loading'

const IndexPage = () => {
  const [loading, setLoading] = useLoadingContext()

  return (
    <div tw="">
      home page
      <h2 tw="text-primary">text primary</h2>
      <TextPrimary>TEST PRIMARY</TextPrimary>
      <button
        onClick={() => {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        }}
        tw="px-4 py-2 text-white rounded dark:bg-white dark:text-black"
      >
        loading nao
      </button>
      <p>test color theme</p>
    </div>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default IndexPage

const TextPrimary = tw.h2`text-primary`
