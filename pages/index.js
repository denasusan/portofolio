import Head from 'next/head'
import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import { NavigateNext, Redo, WhatsApp } from '@material-ui/icons'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
SwiperCore.use([Autoplay]);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const aboutUsRef = useRef();
  const swiperRef = useRef();
  const swiperRefOurCulture = useRef();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([
    "/images/1.png",
    "/images/2.png"
  ]);

  const [imageCulture, setImageCulture] = [
    "/images/1-culture.jpg",
    "/images/2-culture.jpg",
    "/images/3-culture.jpg",
    "/images/4-culture.jpg",
    "/images/5-culture.jpg",
    "/images/6-culture.jpg",

  ]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200)
  }, [])

  return (
    <Layout>
      {
        loading == true ?
          <div className='w-full min-h-screen flex justify-center items-center'>
            <p>Loading...</p>
          </div> :
          <div>
            <Header tabActive={"home"} refSection={aboutUsRef} />
            <main>
              <div>
                <Swiper
                  slidesPerView={1}
                  ref={swiperRef}
                  // breakpoints={SliderComponent}
                  // pagination={true}
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 3500 }}
                  speed={2000}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  loop={true}>
                  <div className='w-full text-white flex absolute z-10 lg:bottom-16 bottom-10 justify-between lg:px-12 px-2'>
                    <button className='transform rotate-180' onClick={() => swiperRef.current?.slidePrev()}><Redo fontSize='' /></button>
                    <button className='' onClick={() => swiperRef.current?.slideNext()}><Redo fontSize='' /></button>
                  </div>
                  {
                    images.map((item, index) => {
                      const image = item
                      return (
                        <SwiperSlide key={index}>
                          {
                            <div className={`pb-10 w-full`}>
                              <div className={`relative w-full`}>

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
                                  />
                                </div>

                              </div>
                            </div>
                          }
                        </SwiperSlide>
                      );
                    })
                  }
                </Swiper>

                <div className='w-9/12 mx-auto lg:py-10 md:pt-10 pt-0 pb-0' ref={aboutUsRef} id="tentang-kami">
                  <p className='lg:text-24px text-20px font-bold py-2 text-blue-primary '>About Us</p>
                  <p className='bg-blue-light rounded-xl p-4 text-14px lg:text-16px font-medium'><strong>Gaya Properti</strong> didirikan pada tahun 2013 yang bermula sebagai pengembang perumahan khususnya di wilayah Kota Bandung, Jawa Barat. Seiring berkembangnya waktu, Gaya Properti bertransformasi menjadi perusahaan yang bergerak di bidang Kontraktor, Arsitektur, Desain Interior dan Custom Furniture.
                    <br /> <br />
                    <strong>Gaya Properti</strong> bertujuan menjadi perusahaan konglomerasi properti yang dapat besaing di kancah Nasional Maupun Internasional dengan memberikan pelayanan yang terbaik untuk mitra dan klien, membangun sumber daya manusia yang berintegritas dan berkompetensi internasional serta membangun manajemen yang transparan dan profesional.
                  </p>
                </div>

                <div className='w-9/12 mx-auto mt-10'>
                  <p className='lg:text-24px text-20px font-bold py-2 text-blue-primary'>Our Culture</p>
                  <Swiper
                    slidesPerView={1}
                    ref={swiperRefOurCulture}
                    // breakpoints={SliderComponent}
                    // pagination={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3500 }}
                    speed={2000}
                    onBeforeInit={(swiper) => {
                      swiperRefOurCulture.current = swiper;
                    }}
                    loop={true}>
                    <div className='w-full text-white flex absolute z-10 lg:bottom-16 bottom-10 justify-between lg:px-12 px-2'>
                      <button className='transform rotate-180 ' onClick={() => swiperRefOurCulture.current?.slidePrev()}><Redo fontSize='' /></button>
                      <button className='' onClick={() => swiperRefOurCulture.current?.slideNext()}><Redo fontSize='' /></button>
                    </div>
                    {
                      imageCulture.map((item, index) => {
                        const image = item
                        return (
                          <SwiperSlide key={index}>
                            {
                              <div className={`pb-10 w-full`}>
                                <div className={`relative w-full`}>

                                  <div style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: "51%" }}>
                                    <Image
                                      tabIndex="0"
                                      src={`${image}`}
                                      alt={`slide${index}`}
                                      layout='fill'
                                      placeholder='blur'
                                      blurDataURL='/'
                                      loading='lazy'
                                      objectFit='cover'
                                      className='rounded-xl'
                                    />
                                  </div>

                                </div>
                              </div>
                            }
                          </SwiperSlide>
                        );
                      })
                    }
                  </Swiper>
                </div>
              </div>
            </main>
            <Footer />
          </div>
      }
    </Layout>
  )
}
