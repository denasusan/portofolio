import '../styles/globals.css';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

import { AnimatePresence } from 'framer-motion'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import Head from 'next/head';
export default function App({ Component, pageProps, router }) {
  return <AnimatePresence mode="wait" initial={false}>
    <Head>
      <title>Gaya Properti</title>
      <meta name="description" content="Website Gaya Properti" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo.png" />
    </Head>
    <Component {...pageProps} key={router.asPath} />
  </AnimatePresence>
}
