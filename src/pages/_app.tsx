import '#/styles/main.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../store'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '500', subsets: ['latin'] })

import store from '../store'
import Layout from '#/components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const excludeLayoutPaths = ['/login']

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {excludeLayoutPaths.includes(pathname) ? (
          <Component {...pageProps} />
        ) : (
          <Layout className={roboto.className}>
            <Component {...pageProps} />
          </Layout>
        )}
      </PersistGate>
    </Provider>
  )
}

export default MyApp
