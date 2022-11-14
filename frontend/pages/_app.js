import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from 'next-themes'
import SpinnerComponent from '../components/Loading'
import { LoadingProvider } from '../context/loading'
import { StoreProvider } from '../utils/store'
import GlobalStyles from './../styles/GlobalStyles'

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (page => page)
  return (
    <StoreProvider>
      <CacheProvider value={cache}>
        <ThemeProvider attribute="class">
          {getLayout(
            <>
              <GlobalStyles />
              <LoadingProvider>
                <SpinnerComponent />
                <Component {...pageProps} />
              </LoadingProvider>
            </>,
          )}
        </ThemeProvider>
      </CacheProvider>
    </StoreProvider>
  )
}

export default App
