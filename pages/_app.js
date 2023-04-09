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
      <title>Portofolio Dena Susanti</title>
      <meta name="description" content="Portofolio Dena Susanti" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://media.licdn.com/dms/image/D5603AQGJkXGib29kUA/profile-displayphoto-shrink_800_800/0/1665710148806?e=1685577600&v=beta&t=bOM1E-LvIaDu57mKTalsuzYJ4Zh1ElxmG5YvFbUMBZc" />
    </Head>
    <Component {...pageProps} key={router.asPath} />
  </AnimatePresence>
}
