import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import { Redo } from '@material-ui/icons'
import SwiperCore, { Autoplay } from 'swiper'
import WhatsAppIcon from '@/public/svg/whatsapp_icon'
SwiperCore.use([Autoplay]);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const aboutUsRef = useRef();
  const swiperRef = useRef();
  const swiperRefOurCulture = useRef();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([
    "images/1.webp",
    "images/2.webp"
  ]);

  const imageCulture = [
    "images/1-culture.webp",
    "images/2-culture.webp",
    "images/3-culture.webp",
    "images/4-culture.webp",
    "images/5-culture.webp",
    "images/6-culture.webp",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, [])

  return (
    <Layout>
      {
        loading == true ?
          <div className='w-full min-h-screen flex justify-center items-center animate-bounce'>
            <img src="images/logo-small.png" />
          </div> :
          <div>
            <Header tabActive={"home"} refSection={aboutUsRef} />
            <main>
              <div>
                <Swiper
                  slidesPerView={1}
                  ref={swiperRef}
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
                  <p className='bg-blue-light rounded-xl p-4 text-14px lg:text-16px font-medium'><strong className='text-blue-primary'>Gaya Properti</strong> didirikan pada tahun 2013 yang bermula sebagai pengembang perumahan khususnya di wilayah Kota Bandung, Jawa Barat. Seiring berkembangnya waktu, Gaya Properti bertransformasi menjadi perusahaan yang bergerak di bidang Kontraktor, Arsitektur, Desain Interior dan Custom Furniture.
                    <br /> <br />
                    <strong className='text-blue-primary'>Gaya Properti</strong> bertujuan menjadi perusahaan konglomerasi properti yang dapat besaing di kancah Nasional Maupun Internasional dengan memberikan pelayanan yang terbaik untuk mitra dan klien, membangun sumber daya manusia yang berintegritas dan berkompetensi internasional serta membangun manajemen yang transparan dan profesional.
                  </p>
                </div>

                <div className='w-9/12 mx-auto mt-10 rounded-xl'>
                  <p className='lg:text-24px text-20px font-bold py-2 text-blue-primary'>Our Culture</p>
                  <Swiper
                    slidesPerView={1}
                    ref={swiperRefOurCulture}
                    modules={[Autoplay, Pagination]}
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
                <div className='fixed cursor-pointer lg:bottom-8 bottom-4 lg:right-8 right-5 z-30 rounded-full' onClick={() =>
                    window.open(
                      `http://wa.me/628112347615?text=Hai Admin Gaya Properti, saya ingin bertanya...`
                    )
                  }>
                  <WhatsAppIcon />
                </div>
              </div>

            </main>
            <Footer />
          </div>
      }
    </Layout>
  )
}
