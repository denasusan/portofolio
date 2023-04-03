import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import { ArrowBack, ArrowBackIos, LinkedIn, Mail, Redo } from '@material-ui/icons'
import SwiperCore, { Autoplay } from 'swiper'
import WhatsAppIcon from '@/public/svg/whatsapp_icon'
SwiperCore.use([Autoplay]);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const aboutUsRef = useRef();
  const swiperRef = useRef();
  const swiperRefOurCulture = useRef();
  const [loading, setLoading] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [chooseTab, setChooseTab] = useState(-1);

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
            {/* <Header tabActive={"home"} refSection={aboutUsRef} /> */}
            <main>
              <div className=' h-screen w-full flex flex-col bg-black justify-center items-center'>
                <div className={`${openProfile == true ? " opacity-100 z-20 -translate-y-10" : "translate-y-0 opacity-0"} duration-500 relative transition-all `}>
                  <div className='flex justify-center flex-wrap gap-2 mx-4'>
                    <button onClick={() => setChooseTab(0)} className={`${chooseTab == 0 ? "bg-gray-400 scale-125 mx-2" : "mx-0 bg-pink-500"} transition-all duration-700 text-black mx-auto font-bold rounded-full px-4 py-2`}>Biodata</button>
                    <button onClick={() => setChooseTab(1)} className={`${chooseTab == 1 ? "bg-gray-400 scale-125 mx-2" : "mx-0 bg-blue-400"} transition-all duration-700 text-black mx-auto font-bold rounded-full px-4 py-2`}>Education</button>
                    <button onClick={() => setChooseTab(2)} className={`${chooseTab == 2 ? "bg-gray-400 scale-125 mx-2" : "mx-0 bg-red-500"} transition-all duration-700 text-black mx-auto font-bold rounded-full px-4 py-2 `}>Contact</button>
                  </div>
                  <div className='flex justify-center flex-wrap gap-2 mx-4 mt-4 mb-4'>
                    <button onClick={() => setChooseTab(3)} className={`${chooseTab == 3 ? "bg-gray-400 scale-125 mx-2" : "mx-0 bg-purple-400"} transition-all duration-700 text-black mx-auto font-bold rounded-full px-4 py-2 `}>Skills</button>
                    <button onClick={() => setChooseTab(4)} className={`${chooseTab == 4 ? "bg-gray-400 scale-125 mx-4" : "mx-0 bg-yellow-300"} transition-all duration-700 text-black mx-auto font-bold rounded-full px-4 py-2 `}>Work Experience</button>
                  </div>
                </div>
                <div className='w-full h-80 max-w-lg relative bg-opacity-80 filter blur-0'>
                  {
                    chooseTab == 0 ?
                      <div className='flex relative transition-all duration-500 border-x-4 border-pink-300 justify-center items-center z-20 gap-10 lg:flex-row flex-col bg-gray-300 rounded-xl p-4'>
                        <div className='p-1 rounded-full bg-pink-300 w-1/3 transition-all duration-500'>
                          <img className='w-full h-auto rounded-full' src="https://media.licdn.com/dms/image/D5603AQGJkXGib29kUA/profile-displayphoto-shrink_800_800/0/1665710148806?e=1685577600&v=beta&t=bOM1E-LvIaDu57mKTalsuzYJ4Zh1ElxmG5YvFbUMBZc" />
                        </div>
                        <div className='flex w-2/3 flex-col justify-center items-center transition-all duration-500'>
                          <p className='text-black font-bold'>
                            saya lahir di &nbsp;
                            <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              Bandung
                            </span> pada tanggal <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              17 Juni 2000.
                            </span>
                            &nbsp;Agama saya <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              Islam.
                            </span>
                            &nbsp;Berdomisili di <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              Jl. Rancaloa 02/02, Cipamokolan,
                              Kec. Rancasari, Kota Bandung, Jawa Barat
                            </span>
                          </p>
                        </div>
                      </div> :
                      chooseTab == 1 ? 
                      <div className='flex relative transition-all duration-500 border-y-4 border-blue-400 justify-center items-center z-20 gap-10 lg:flex-row flex-col bg-gray-300 rounded-xl p-4'>
                        <div className='p-1.5 rounded-full bg-blue-400 w-1/3 transition-all duration-500'>
                          <img className='w-full h-auto rounded-full' src="https://media.licdn.com/dms/image/D5603AQGJkXGib29kUA/profile-displayphoto-shrink_800_800/0/1665710148806?e=1685577600&v=beta&t=bOM1E-LvIaDu57mKTalsuzYJ4Zh1ElxmG5YvFbUMBZc" />
                        </div>
                        <div className='flex w-2/3 flex-col justify-center items-center transition-all duration-500'>
                          <p className='text-black font-bold'>
                            Sekolah Menengah atas yang saya tempuh adalah &nbsp;
                            <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              SMAN 1 Pangalengan
                            </span> kemudian saya menempuh Pendidikan Kejuruan di <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              LPKV Budi Karya Mandiri
                            </span>jurusan <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              Teknik Informatika 
                            </span>
                            &nbsp; dan sekarang sedang menempuh kuliah S1 di <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              Universitas Bisnis dan Informatika Indonesia
                            </span>
                            &nbsp; jurusan <span className=' text-purple-800 font-bold bg-yellow-400 px-2 rounded-lg'>
                              Sistem Informasi
                            </span>
                          </p>
                        </div>
                      </div> : 
                      chooseTab == 2 ? 
                      <div className='flex relative transition-all border-x-4 border-red-500 duration-500 justify-center items-center z-20 gap-10 lg:flex-row flex-col bg-gray-300 rounded-xl p-4'>
                        <div className='p-1.5 rounded-full bg-red-500 w-1/3 transition-all duration-500'>
                          <img className='w-full h-auto rounded-full' src="https://media.licdn.com/dms/image/D5603AQGJkXGib29kUA/profile-displayphoto-shrink_800_800/0/1665710148806?e=1685577600&v=beta&t=bOM1E-LvIaDu57mKTalsuzYJ4Zh1ElxmG5YvFbUMBZc" />
                        </div>
                        <div className='flex w-2/3 flex-col justify-center items-start transition-all duration-500'>
                          <div className='flex gap-2 justify-start items-center'>
                            <WhatsAppIcon />
                            <span className='text-14px font-semibold'>+62 8965 5636 478</span>
                          </div>
                          <div className='flex gap-2 justify-start items-center mt-2'>
                            <LinkedIn />
                            <span className='text-14px font-semibold'>https://www.linkedin.com/in/dena-susanti-3395111a0/</span>
                          </div>
                          <div className='flex gap-2 justify-start items-center mt-2'>
                            <Mail />
                            <span className='text-14px font-semibold'>denasusan67@gmail.com</span>
                          </div>
                        </div>
                      </div> : 
                      <div className='flex relative justify-center items-center z-20 gap-10 lg:flex-row flex-col'>
                        <div className='p-2 rounded-full bg-white  w-52 transition-all duration-500'>
                          <img className='w-full h-auto rounded-full' src="https://media.licdn.com/dms/image/D5603AQGJkXGib29kUA/profile-displayphoto-shrink_800_800/0/1665710148806?e=1685577600&v=beta&t=bOM1E-LvIaDu57mKTalsuzYJ4Zh1ElxmG5YvFbUMBZc" />
                        </div>
                        <div className='flex flex-col justify-center items-center transition-all duration-500'>
                          <p><span className='text-white font-bold'> Hai, saya </span> <span className='bg-black text-purple-400 rounded-xl px-2' >Dena Susanti</span></p>
                          <p><span className='text-white font-bold'> seorang </span> <span className='bg-black  whitespace-nowrap rounded-xl px-2' style={{ color: "#61DAFB" }}>Full stack developer</span></p>
                          <p><span className='text-white font-bold'> di </span> <span className='bg-black text-yellow-300 rounded-xl px-2' >sharinghappiness.org</span></p>
                          <button onClick={() => {
                            setOpenProfile(true);
                            setChooseTab(0);
                          }} className='text-black mx-auto font-bold rounded-full my-4 px-4 py-2  shadow-inner flex'  style={{ backgroundColor: "#61DAFB" }}>More Info <div className='rotate-180'><ArrowBack/></div> </button>
                        </div>
                      </div>
                  }
                  <div class="absolute z-10 top-0 -left-4 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply   filter blur-xl opacity-70 animate-blob"></div>
                  <div class="absolute z-10 top-0 -right-4 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div class="absolute z-10 -bottom-8 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>
              </div>
            </main>
            {/* <Footer /> */}
          </div>
      }
    </Layout>
  )
}
