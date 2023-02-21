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
      <meta name="description" content="Gaya Properti didirikan pada tahun 2013 yang bermula sebagai pengembang perumahan khususnya di wilayah Kota Bandung, Jawa Barat. Seiring berkembangnya waktu, Gaya Properti bertransformasi menjadi perusahaan yang bergerak di bidang Kontraktor, Arsitektur, Desain Interior dan Custom Furniture.Gaya Properti bertujuan menjadi perusahaan konglomerasi properti yang dapat besaing di kancah Nasional Maupun Internasional dengan memberikan pelayanan yang terbaik untuk mitra dan klien, membangun sumber daya manusia yang berintegritas dan berkompetensi internasional serta membangun manajemen yang transparan dan profesional." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo-small.png" />
    </Head>
    <Component {...pageProps} key={router.asPath} />
  </AnimatePresence>
}
