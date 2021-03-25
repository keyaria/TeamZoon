import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import {Fonts} from '../fonts'


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <ChakraProvider resetCSS theme={theme}>
     <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
//MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default MyApp;
