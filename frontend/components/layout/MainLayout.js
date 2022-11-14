import Head from 'next/head'
import tw from 'twin.macro'
import Footer from './Footer'
import Header from './Header'

export default function MainLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Germanyz' : 'Germanyz'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Germanyz shop" />
      </Head>
      <MainLayoutContainerStyle>
        <Header />
        <MainContainerStyle>{children}</MainContainerStyle>
        <Footer />
      </MainLayoutContainerStyle>
    </>
  )
}

const MainLayoutContainerStyle = tw.div`
  flex min-h-screen flex-col justify-between
`
const MainContainerStyle = tw.div`
  flex-1 container mx-auto my-16
`
