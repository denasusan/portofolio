import Head from 'next/head'
import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import SearchIcon from '@/public/svg/search_icon'
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import SkipNext from "@material-ui/icons/SkipNext";
import { Facebook, Instagram, Twitter, PanToolSharp } from '@material-ui/icons'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import CardMuseumWarm from '@/components/card_museum_warm'
import CardMuseumWhite from '@/components/card_museum_white'
import PathIconGreen from '@/public/svg/path_icon_green'
// import { PanToolSharp } from '@mui/icons-material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const swiperRef = useRef();
  const [images, setImages] = useState([
    "/images/lukisan_1.png",
    "/images/lukisan_2.png"
  ]);


  return (
    <Layout>
      <Header tabActive={1} />
      <main>
        <div className="flex justify-around lg:flex-row flex-col items-start pt-10 px-10 pb-10 bg-yellow-warm">
          <div className='lg:w-2/5 w-full'>
            <div style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "100%" }}>
              <Image
                src={images[0]}
                id="image"
                alt={"bg-1"}
                layout='fill'
                placeholder='blur'
                blurDataURL='/'
                loading='lazy'
                objectFit='cover'
                className="rounded-full pl-4 bg-green-light"
              />
            </div>
            <div className='flex gap-2 justify-center mt-10 text-green-light  pb-2 lg:visible invisible absolute lg:relative'>
              <Instagram className="cursor-pointer" onClick={() => alert("Open instagram")} fontSize="large" />
              <Facebook className="cursor-pointer" onClick={() => alert("Open Facebook")} fontSize="large" />
              <div className='w-32 h-1 mt-2 bg-orange-light-DEFAUL absolute bottom-0 rounded-full shadow-2xl'></div>
            </div>
          </div>
          <div className="text-green-light text-center flex flex-col justify-center items-center lg:w-auto w-full lg:mt-10 mt-2">
            <p className="font-bold" style={{ fontSize: "72px" }}>EXPLORE</p>
            <p className="font-bold" style={{ fontSize: "64px" }}>YOUR</p>
            <p className="font-bold text-red-light" style={{ fontSize: "64px" }}>ART<span className="text-green-light">(s)</span></p>
            <p className="font-bold" style={{ fontSize: "72px" }}>WORLD</p>
          </div>
          <div className='w-full lg:w-2/5'>
            <div style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "100%" }}>
              <Image
                src={images[1]}
                id="image"
                alt={"bg-1"}
                layout='fill'
                placeholder='blur'
                blurDataURL='/'
                loading='lazy'
                objectFit='cover'
                className="rounded-full pr-4 bg-red-light"
              />
            </div>
            <div className='flex gap-2 justify-center mt-10 text-green-light  pb-2 lg:visible invisible absolute lg:relative'>
              <Twitter className="cursor-pointer" onClick={() => alert("Open Twitter")} fontSize="large" />
              <div className="cursor-pointer" onClick={() => alert("Open Path")}>
                <PathIconGreen />
              </div>
              <div className='w-32 h-1 mt-2 bg-orange-light-DEFAUL absolute bottom-0 rounded-full shadow-2xl'></div>
            </div>
          </div>
        </div>
        <CardMuseumWhite />
        <div className="section-3 bg-yellow-warm h-screen lg:flex-row flex-col flex justify-evenly items-center lg:pt-0 pt-10 lg:pb-0 pb-10">
          <div className="lg:w-4/5 w-full flex items-center relative">
            <div className='w-3/5 flex justify-center items-center flex-col gap-7 lg:visible invisible absolute lg:relative'>
              <div style={{ width: '70%', height: '40%', position: 'relative', paddingBottom: "48%" }}>
                <Image
                  src={"/images/lukisan_4.png"}
                  id="image"
                  alt={"bg-3"}
                  layout='fill'
                  placeholder='blur'
                  blurDataURL='/'
                  loading='lazy'
                  objectFit='cover'
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div style={{ width: '70%', height: '40%', position: 'relative', paddingBottom: "48%" }}>
                <Image
                  src={"/images/lukisan_6.png"}
                  id="image"
                  layout='fill'
                  placeholder='blur'
                  blurDataURL='/'
                  loading='lazy'
                  objectFit='cover'
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className='lg:w-2/5 w-full flex lg:justify-start justify-center'>
              <div style={{ width: '80%', height: '80%', position: 'relative', paddingBottom: "100%" }}>
                <Image
                  src={"/images/lukisan_5.png"}
                  id="image"
                  alt={"bg-3"}
                  layout='fill'
                  placeholder='blur'
                  blurDataURL='/'
                  loading='lazy'
                  objectFit='cover'
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full h-full flex flex-col justify-center items-center lg:pl-0 pl-10 pr-10 relative lg:pb-0 pb-10">
            <p className="text-green-light text-center font-bold text-24px lg:text-30px ">Les Femmes d’ Alger (Version O) oleh Pablo Picasso</p>
            <p className="font-semibold lg:text-16px text-12px">Tahun ini menjadi kebanggaan sendiri bagi Pablo Picasso. Karena, lukisan 'Les Femmes d'Alger' atau berarti 'Perempuan Aljazair yang terjual April lalu menjadi lukisan termahal di 2015. Lukisannya terjual senilai US$ 179,3 juta atau setara dengan Rp 2,3 triliun.....
            </p>
            <Link href="/detail?slug=les-femmes" className="w-full flex items-center justify-end absolute  bottom-0 right-3 lg:right-10 lg:bottom-10">
              <p className="mr-2 lg:text-20px font-bold text-green-light text-16px">Selengkapnya</p>
              <div className="bg-red-light shadow-2xl rounded-full p-2 w-10 h-10 text-yellow-warm flex justify-center items-center">
                <SkipNext />
              </div>
            </Link>
          </div>
        </div>
        <div className="section-3 bg-white py-10 relative">
          <div className='flex justify-center pb-8 items-center gap-4'>
            <img src="/images/logo-icon.png" className='w-10 lg:w-14 h-auto' />
            <p className='text-20px lg:text-28px font-bold text-green-light'>Rekomendasi Museum</p>
            <img src="/images/logo-icon.png" className='w-10 lg:w-14 h-auto' />
          </div>
          <div className='flex justify-evenly items-center h-full '>
            <div className="w-11/12 flex lg:flex-row flex-col justify-between gap-5 items-center relative">
              <div className='w-full lg:w-1/3 flex justify-center items-center flex-col gap-7'>
                <div style={{ width: '80%', height: '80%', position: 'relative', paddingBottom: "60%" }}>
                  <Image
                    src={"/images/lukisan_7.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='cover'
                    className="rounded-3xl"
                  />
                </div>
              </div>
              <div className='w-full lg:w-1/3 flex justify-center items-center flex-col gap-7'>
                <div style={{ width: '80%', height: '80%', position: 'relative', paddingBottom: "60%" }}>
                  <Image
                    src={"/images/lukisan_8.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='cover'
                    className="rounded-3xl"
                  />
                </div>
              </div>
              <div className='w-full lg:w-1/3 flex justify-center items-center flex-col gap-7'>
                <div style={{ width: '80%', height: '80%', position: 'relative', paddingBottom: "60%" }}>
                  <Image
                    src={"/images/lukisan_9.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='cover'
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-1/12 lg:pr-0 pr-6 h-full'>
              <div className='w-4 h-4 bg-green-light rounded-full mb-2'></div>
              <div className='w-4 h-4 bg-red-light rounded-full mb-2'></div>
              <div className='w-4 h-4 bg-green-light rounded-full'></div>
            </div>
          </div>
          <Link href="/recomend" className="w-full flex items-center justify-end absolute bottom-10  right-4 cursor-pointer">
            <div className="text-yellow-warm shadow-2xl rounded-full p-2 w-10 h-10 bg-orange-light-DEFAUL flex justify-center items-center">
              <SkipNext />
            </div>
          </Link>
        </div>
        <CardMuseumWarm />
        {/* <Swiper
          slidesPerView={1}
          // ref={swiperRef}
          
          // pagination={true}
          modules={[Pagination]}
          autoplay={{ delay: 3000 }}
          speed={1300}
          loop={true}
          spaceBetween={30}>
          {
            images.map((item, index) => {
              const image = item
              return (
                <SwiperSlide key={index}
                >
                  {
                    // <Link href={item}>
                    //   <a>
                        <div className={`pb-10`}>
                          <div className={`relative w-full ${styles.container_image}`}>
                            <div className='' style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "51%" }}>
                              <Image
                                tabIndex="0"
                                src={`${image}`}
                                alt={`slide${index}`}
                                layout='fill'
                                placeholder='blur'
                                blurDataURL='/'
                                loading='lazy'
                                objectFit='cover'
                                className={`rounded-xl`}
                              />
                            </div>
                            <div className={`absolute text-black w-1/2 text-left px-4 flex flex-col justify-center h-full`}>
                              banner text
                            </div>
                          </div>
                        </div>
                    //   </a>
                    // </Link>
                  }
                </SwiperSlide>
              );
            })
          }
        </Swiper> */}
      </main>
      <Footer />
    </Layout>
  )
}
