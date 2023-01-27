import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import CardMuseumWarm from '@/components/card_museum_warm'
import CardMuseumWhite from '@/components/card_museum_white'
import CardMuseumWarmSearch from '@/components/card_museum_warm_search'


export default function Recomend() {
    return (
        <Layout>
            <Header tabActive={2} />
            <main className='w-full min-h-screen'>
                <p className=' text-18px lg:text-24px text-green-light font-semibold lg:pl-28 pl-8 bg-yellow-warm pt-10'>Rekomendasi Museum Untuk Kamu...</p>
                <div>
                    <CardMuseumWarm />
                    <CardMuseumWhite />
                </div>
            </main>
            <Footer />
        </Layout>
    )
}
