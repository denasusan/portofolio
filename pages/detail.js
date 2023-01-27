import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import LocationLove from '@/public/svg/location_love'
import { useEffect, useState } from 'react'
import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url'


export default function Detail() {
    const [content, setContent] = useState()
    const [loading, setLoading] = useState(true)
    const listContent = [
        {
            "title": "Museum Geologi Bandung",
            "description": `Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                            Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929.         Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.
                        Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                        Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929. Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.`,
            "slug": "geologi-bandung",
            "thumbnail": "/images/lukisan_10.png",
            "location": "Jl. Supratman no. 50"
        },
        {
            "title": "Nu Couché",
            "description": ` Sebuah lukisan telanjang karya seorang pelukis Italia, Modigliani berhasil terjual dengan harga Rp 2,2 triliun (157 juta dolar AS) dalam lelang hari Senin kemarin.

            Lukisan berjudul Nu Couche (Sur Le Cote Gauche) menurut balai lelang Sotheby merupakan lukisan terbesar dari pelukis kelahiran Italia ini yang memiliki nama lengkap Amedeo Clemente, yang diselesaikannya tahun 1917.
            Lukisan ini merupakan salah satu dari 22 lukisan telanjang yang dihasilkan oleh sang Pelukis di antara tahun 1916 sampai 1919, juga merupakan lukisan paling besar yang dihasilkannya. Dilansir dari Telegraph UK, Sang Pelukis mengguncang jagat seni Eropa dengan serangkaian lukisan telanjang dimana pameran di sebuah galeri Paris harus ditutup oleh polisi di hari pembukaannya.

Jelang pembukaan lelang hari Senin malam, lukisan tersebut dibandrol dengan harga 150 juta dolar AS, yang menjadikannya lukisan dengan estimasi harga terbesar dalam sebuah lelang karya seni di balai lelang tersebut.
Lukisan ini merupakan salah satu dari 22 lukisan telanjang yang dihasilkan oleh sang Pelukis di antara tahun 1916 sampai 1919, juga merupakan lukisan paling besar yang dihasilkannya. Dilansir dari Telegraph UK, Sang Pelukis mengguncang jagat seni Eropa dengan serangkaian lukisan telanjang dimana pameran di sebuah galeri Paris harus ditutup oleh polisi di hari pembukaannya.

Jelang pembukaan lelang hari Senin malam, lukisan tersebut dibandrol dengan harga 150 juta dolar AS, yang menjadikannya lukisan dengan estimasi harga terbesar dalam sebuah lelang karya seni di balai lelang tersebut.
Menurut seorang kepala departemen impresionis dan seni modern di Balai Lelang Sotheby's, Simon Shaw lukisan ini 'memunculkan kembali imajinasi mengenai telanjang di zaman modern.

Menurutnya Modigliani berhasil menggambarkan modelnya sebagai sosok yang percaya diri dan dan penuh keyakinan dalam seksualitas mereka, sekaligus mengubah status wanita selama Perang Dunia I.

"Nu Couche merupakan sebuah lukisan yang sangat sensual, dengan pandangan modelnya sejajar dengan penontonnya dengan cara yang sangat mengagumkan."

Dilansir dari RTE, lukisan ini sebelumnya dimiliki oleh seorang peternak kuda asal Irlandia, John Magnier yang membeli lukisan ini pada tahun 2002 dengan harga 26,9 juta dolar AS. Pembeli lukisan ini tidak diungkapkan seperti layaknya lelang lukisan berharga tinggi.`,
            "slug": "nu-couche",
            "thumbnail": "/images/lukisan_3.png",
            "location": "Jl. Supratman no. 48"

        },
        {
            "title": "Les Femmes d’ Alger (Version O) oleh Pablo Picasso",
            "description": `Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                            Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929.         Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.
                        Di masa penjajahan Belanda, keberadaan Museum Geologi berkaitan erat dengan sejarah penyelidikan geologi dan tambang di wilayah Nusantara yang dimulai sejak pertengahan abad ke-17 oleh para ahli Eropa. Setelah Eropa mengalami revolusi industri pada pertengahan abad ke-18, Eropa sangat membutuhkan bahan tambang sebagai bahan dasar industri. Pemerintah Belanda sadar akan pentingnya penguasaan bahan galian di wilayah Nusantara. Dengan demikian, diharapkan dapat menunjang perkembangan industri di Negeri Belanda.
                        Pada tahun 1850 terbentuk Dienst van het Mijnwezen dan berganti nama menjadi Dienst van den Mijnbouw pada 1922, yang bertugas melakukan penyelidikan geologi serta sumber daya mineral. Hasil penyelidikan berupa contoh-contoh batuan, mineral, fosil, laporan, dan peta memerlukan tempat untuk penganalisisan dan penyimpanan, sehingga pada 1928 Dienst van den Mijnbouw membangun gedung di Rembrandt Straat Bandung.
                        Gedung tersebut semula bernama Geologisch Laboratorium kemudian disebut Geologisch Museum. Gedung Geologisch Laboratorium dirancang dengan gaya Art Deco oleh arsitek Ir. Menalda van Schouwenburg, dan dibangun selama 11 bulan dengan 300 pekerja serta menghabiskan dana sebesar 400 Gulden. Pembangunannya dimulai pada pertengahan 1928 dan diresmikan pada 16 Mei 1929. Peresmian tersebut bertepatan dengan penyelenggaraan Kongres Ilmu Pengetahuan Pasifik ke-4 (Fourth Pacific Science Congress) yang diselenggarakan di Bandung pada 18 - 24 Mei 1929.`,
            "slug": "les-femmes",
            "thumbnail": "/images/lukisan_5.png",
            "location": "Jl. Supratman no. 49"
        },
    ]

    useEffect(() => {
        const urlString = window.location.href
        const url = new URL(urlString);
        const slugHref = url.searchParams.get('slug');

        for (let i = 0; i < listContent.length; i++) {
            if (slugHref == listContent[i].slug) {
                setContent(listContent[i])
                setLoading(false)
            }
        }
    }, [])

    return (
        <Layout>
            <Header />
            <main>
                {
                    loading == true ?
                        <div className='w-full h-screen flex justify-center items-center bg-yellow-warm'>
                            <span className='animate-bounce text-green-light'>PROCESSING...</span>
                        </div> :
                        <div className='px-4 lg:px-16 pt-16 bg-yellow-warm'>
                            <div className='flex gap-2 lg:gap-4 items-end'>
                                <img src="/images/logo-icon.png" className='h-10 lg:h-20 w-auto' />
                                <p className='text-20px lg:text-24px text-green-light font-semibold'>{content?.title}</p>
                            </div>
                            <img src={content?.thumbnail} className='py-10 mx-auto' />
                            <div className='flex gap-4 items-end'>
                                <div className='w-auto h-8 lg:h-10'>
                                    <LocationLove />
                                </div>
                                <p className='text-18px lg:text-24px text-green-light font-semibold'>{content?.location}</p>
                            </div>
                            <p className='text-green-light mt-10 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold  first-letter:mr-2 first-letter:float-left'>
                                {
                                    content?.description
                                }
                            </p>
                        </div>
                }
            </main>
            <Footer />
        </Layout>
    )
}
