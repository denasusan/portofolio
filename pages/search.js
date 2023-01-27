import Image from 'next/image'
import Link from 'next/link'
import SearchIcon from '@/public/svg/search_icon'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import { useEffect, useState } from 'react'
import CardMuseumWarm from '@/components/card_museum_warm'
import CardMuseumWarmSearch from '@/components/card_museum_warm_search'

export default function Search() {
    const [keyword, setKeyword] = useState("");
    const [finding, setFinding] = useState([]);
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
            "description": `Sebuah lukisan telanjang karya seorang pelukis Italia, Modigliani berhasil terjual dengan harga Rp 2,2 triliun (157 juta dolar AS) dalam lelang hari Senin kemarin.

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
            "description": `Tahun ini menjadi kebanggaan sendiri bagi Pablo Picasso. Karena, lukisan 'Les Femmes d'Alger' atau berarti 'Perempuan Aljazair yang terjual April lalu menjadi lukisan termahal di 2015. Lukisannya terjual senilai US$ 179,3 juta atau setara dengan Rp 2,3 triliun.

                                        Lukisan cat minyak tersebut dilukis pada 1954-1955. Dilelang hanya selama 11 menit di Balai Lelang Christie's New York, Amerika Serikat. Awalnya harga yang ditawarkan senilai US$ 121 juta dan angka naik lagi melewati US$ 130 juta lalu ke US$ 160 juta dan naik satu kali lipat lagi.
                                        Saat itu, penawaran di telepon terjadi dengan ahli Christie. Ada yang menawar sampai angka US$ 179,3 juta. "Dia bilang kenapa tidak membeli karya Picasso dengan harga tinggi," ucap perwakilan balai lelang.

                            Wakil Ketua untuk karya seni Amerika di Christie's John Hays mengatakan pelelangan akan benar-benar sukses jika banyak orang merasa perlu ingin memiliki karya seniman tersebut. "Akan ada kolektor yang berani menawar, yang lainnya merasa tertantang dan menawar lebih tinggi, kolektor satunya lagi tidak mau ketinggalan. Hingga mencapai angka yang tertinggi," ucapnya, dilansir dari BBC, Rabu (23/12/2015).

                            "Dan untuk membuat mereka mau menawar tinggi adalah ketertarikan. Mereka harus tertarik untuk membelinya," lanjutnya.
                            Pihak Christie's pun melakukan promosi ke berbagai negara seperti London, New York, Hong Kong, dan Timur Tengah. Serta menyebarkan katalog karya seni lewat online, televisi, dan berbagai kolektor dunia.

                            Dengan begitu, lukisan 'Perempuan Aljazair' karya Pablo Picasso meraih predikat lukisan termahal di tahun 2015. Pembelinya pun masih belum diketahui sampai sekarang.
            `,
            "slug": "les-femmes",
            "thumbnail": "/images/lukisan_5.png",
            "location": "Jl. Supratman no. 49"
        },
    ]

    useEffect(() => {
        setFinding([])
        let searching = []
        listContent.find(element => {
            const title = (element.title + "").toLowerCase()
            const key = (keyword + "").toLowerCase()
            const data = title.includes(key) ? element : ""
            if (data)
                searching.push(element)
        });
        if (searching && keyword != "") {
            setFinding(searching ? searching : [])
        } else {
            setFinding([])
        }
        // console.log("ASDSAD", finding, keyword)
    }, [keyword])

    return (
        <Layout>
            <Header isPageSearch={true} />
            <main>
                <div className='min-h-screen bg-yellow-warm'>
                    <div className=" pb-1 pt-16 flex justify-center">
                        <input type="text" value={keyword} onChange={(val) => setKeyword(val.target.value)} className='w-80 bg-yellow-warm border-b-2 focus:outline-none border-green-light pr-4 -mr-4 text-green-light placeholder:text-green-light' placeholder='Type something... (geologi bandung)' />
                        <SearchIcon />
                    </div>
                    {
                        finding.length > 0 ?
                            finding.map((item, index) => {
                                return <div key={index}>
                                    <CardMuseumWarmSearch 
                                    title={item.title}
                                    description={item.description}
                                    slug={item.slug}
                                    image={item.thumbnail}
                                    />
                                </div>
                            })
                            : keyword != "" ?
                                <div className='flex justify-center lg:flex-row flex-col pt-16'>
                                    <div className='lg:w-1/3 w-full flex justify-center items-center'>
                                        <div style={{ width: "100%", height: "50%", position: "relative", paddingBottom: "50%" }}>
                                            <Image
                                                src={"/images/search_not_found.png"}
                                                id="image"
                                                alt={"bg-1"}
                                                layout='fill'
                                                placeholder='blur'
                                                blurDataURL='/'
                                                loading='lazy'
                                                objectFit='contain'
                                            />
                                        </div>
                                    </div>
                                    <div className='lg:w-1/2 w-full px-10 flex justify-center items-center lg:mt-0 mt-4'>
                                        <p className='lg:text-24px max-w-lg text-14px lg:text-start text-center font-bold text-green-light'>
                                            Museum "{keyword}" yang kamu cari tidak ditemukan.
                                        </p>
                                    </div>
                                </div> : ""
                    }
                </div>
            </main>
            <Footer />
        </Layout>
    )
}
