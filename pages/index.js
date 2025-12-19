import { Inter } from '@next/font/google'
import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/layout'
import { ArrowBack, ArrowBackIos, Business, Cake, CastForEducation, Close, House, LinkedIn, Mail, PinDrop, RecentActors, Room } from '@mui/icons-material'
import SwiperCore, { Autoplay } from 'swiper'
import WhatsAppIcon from '@/public/svg/whatsapp_icon'
SwiperCore.use([Autoplay]);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [chooseTab, setChooseTab] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <Layout>
      {
        loading == true ?
          <div className='w-full min-h-screen flex justify-center gap-2 items-center animate-bounce'>
            <div className='h-8 w-8 rounded-full bg-pink-600'></div>
            <div className='h-10 w-10 rounded-full bg-pink-600'></div>
            <img src="images/pp-2.jpg" className='w-32 h-auto rounded-full border-pink-600 border-4' />
            <div className='h-10 w-10 rounded-full bg-pink-600'></div>
            <div className='h-8 w-8 rounded-full bg-pink-600'></div>
          </div> :
          <div>
            <main>
              <div className={` min-h-screen overflow-y-auto overflow-x-hidden w-full flex flex-col ${chooseTab == -1 ? "justify-center" : "justify-start"} items-center  bg-black`}>
                <div className={` ${openProfile == true && chooseTab >= 0 ? " opacity-100 z-20 -translate-y-10 pt-20 visible relative" : "translate-y-0 opacity-0 invisible absolute"} duration-500  transition-all `}>
                  <div className='w-full flex justify-center gap-2 px-4'>
                    <button onClick={() => setChooseTab(0)} className={`${chooseTab == 0 ? "bg-gray-400 scale-105 mx-5" : "mx-0 scale-100 bg-pink-500"} transition-all duration-500 text-black mx-auto font-bold rounded-full px-4 py-2`}>Biodata</button>
                    <button onClick={() => setChooseTab(1)} className={`${chooseTab == 1 ? "bg-gray-400 scale-105 mx-5" : "mx-0 scale-100 bg-blue-400"} transition-all duration-500 text-black mx-auto font-bold rounded-full px-4 py-2`}>Education</button>
                    <button onClick={() => setChooseTab(2)} className={`${chooseTab == 2 ? "bg-gray-400 scale-105 mx-5" : "mx-0 scale-100 bg-red-500"} transition-all duration-500 text-black mx-auto font-bold rounded-full px-4 py-2 `}>Contact</button>
                  </div>
                  <div className='flex justify-center gap-2 p-4'>
                    <button onClick={() => setChooseTab(3)} className={`${chooseTab == 3 ? "bg-gray-400 scale-105 mx-2" : "mx-0 scale-100 bg-purple-400"} transition-all duration-500 text-black mx-auto font-bold rounded-full px-4 py-2 `}>Skill</button>
                    <button onClick={() => setChooseTab(4)} className={`${chooseTab == 4 ? "bg-gray-400 scale-105 mx-2" : "mx-0 scale-100 bg-yellow-300"} transition-all duration-500 text-black mx-auto font-bold rounded-full px-4 py-2 `}>Work Experience</button>
                  </div>
                </div>
                <div className='w-full max-w-lg relative bg-opacity-80 filter blur-0'>
                  {
                    chooseTab == 0 ?
                      <div className='flex relative transition-all duration-500 border-x-4 border-pink-300 mx-3 justify-center items-center z-20 gap-10 lg:flex-row flex-col bg-white rounded-xl p-4'>
                        <div className='p-1 rounded-b-full rounded-t-3xl bg-pink-300 w-1/3 transition-all duration-500'>
                          <p className='text-center font-bold'>Biodata</p>

                          <img className='w-full h-auto rounded-full' src="images/pp-2.jpg" />
                        </div>
                        <div className='flex w-full lg:w-2/3 flex-col  transition-all duration-500'>
                          <p className='font-semibold'><Cake className='text-pink-500' /> 17 Juni 2000</p>
                          <p className='font-semibold'><House className='text-pink-500' />  Islam</p>
                          <p className='font-semibold'><PinDrop className='text-pink-500' />Jl. Babakan Jati I No.67, Binong, Kec. Batununggal, Kota Bandung, Jawa Barat 40275</p>

                        </div>
                      </div> :
                      chooseTab == 1 ?
                        <div className='flex relative transition-all duration-500 border-y-4 border-blue-400 mx-3 justify-center items-center z-20 gap-5 lg:gap-10 lg:flex-row flex-col bg-white rounded-xl p-4'>
                          <div className='p-1.5 rounded-full   flex items-center justify-center flex-col w-full lg:w-1/3 transition-all duration-500'>
                            {/* <img className='w-full h-auto py-1 rounded-full' src="/images/skill_icon.png" /> */}
                            <p className='text-center font-bold'>Education</p>
                            <CastForEducation style={{ fontSize: "120px" }} className='text-green-700' />
                          </div>
                          <div className='flex w-full lg:w-2/3 flex-col justify-center items-center transition-all duration-500'>
                            <p className='text-black font-bold'>
                              <p className=' text-purple-800 font-bold bg-yellow-400 px-2 border-l-2 border-blue-400 mb-4'>
                                SMAN 1 Pangalengan
                              </p>
                              <p className=' text-purple-800 font-bold bg-yellow-400 px-2 border-l-2 border-blue-400 mb-4'>
                                LPKV Budi Karya Mandiri, Jurusan Teknik Informatika
                              </p>
                              <p className=' text-purple-800 font-bold bg-yellow-400 px-2 border-l-2 border-blue-400 mb-4'>
                                Universitas Informatika dan Bisnis Indonesia, Jurusan Sistem Informasi
                              </p>

                            </p>
                          </div>
                        </div> :
                        chooseTab == 2 ?
                          <div className='flex relative transition-all border-x-4 border-red-500 duration-500 mx-3 justify-center items-center z-20 gap-5 lg:gap-10 lg:flex-row flex-col bg-white rounded-xl p-4'>
                            <div className='p-2 rounded-full flex items-center justify-center flex-col  w-full lg:w-1/3 transition-all duration-500'>
                              <p className='text-center font-bold'>Contact</p>

                              <RecentActors style={{ fontSize: "120px" }} className='text-green-700' />
                            </div>
                            <div className='flex w-full lg:w-2/3 flex-col justify-center  ml-3 lg:ml-0 items-start transition-all duration-500'>
                              <div className='flex gap-2 justify-start items-center cursor-pointer' onClick={() => window.open("https://api.whatsapp.com/send/?phone=6289655636478&text=Hai Dena, saya tertarik dengan Cv Anda, boleh saya tanyakan sesuatu..")}>
                                <div className=''>
                                  <WhatsAppIcon />
                                </div>
                                <span className='text-14px font-semibold'>+62 8965 5636 478</span>
                              </div>
                              <div className='flex gap-2 justify-start items-center mt-2  cursor-pointer' onClick={() => window.open("https://www.linkedin.com/in/dena-susanti-3395111a0/")}>
                                <div className='text-blue-700'>
                                  <LinkedIn />
                                </div>
                                <span className='text-14px font-semibold'>https://www.linkedin.com/in/dena-susanti-3395111a0/</span>
                              </div>
                              <div className='flex gap-2 justify-start items-center mt-2  cursor-pointer' onClick={() => window.open("https://mail.google.com/mail/u/0/?fs=1&to=denasusan67@gmail.com&tf=cm")}>
                                <div className='text-red-500'>
                                  <Mail />
                                </div>
                                <span className='text-14px font-semibold'>denasusan67@gmail.com</span>
                              </div>
                            </div>
                          </div> :
                          chooseTab == 3 ?
                            <div className='relative transition-all border-y-4 border-purple-400 mx-3 duration-500 z-20 gap-5 lg:gap-10 bg-white rounded-xl p-4'>
                              <div className=' mt-4 ml-3'>
                                <p className='font-bold text-blue-800'>Front End</p>
                                <ul className='list-disc px-4'>
                                  <li>
                                    Flutter
                                  </li>
                                  <li>
                                    ReactJS (dengan framework NextJS)
                                  </li>
                                  <li>
                                    CSS (dengan framework TailwindCSS)
                                  </li>
                                  <li>
                                    PHP (dengan framework Code Igniter)
                                  </li>
                                </ul>
                              </div>
                              <div className=' mt-4 ml-3'>
                                <p className='font-bold text-blue-800'>Basic</p>
                                <ul className='list-disc px-4'>
                                  <li>
                                    HTML
                                  </li>
                                  <li>
                                    Javascript
                                  </li>
                                  <li>
                                    Java
                                  </li>
                                </ul>
                              </div>
                              <div className=' mt-4 ml-3 mb-4'>
                                <p className='font-bold text-blue-800'>Database</p>
                                <ul className='list-disc px-4'>
                                  <li>
                                    PostgreSQL
                                  </li>
                                  <li>
                                    MySQL
                                  </li>
                                </ul>
                              </div>
                            </div>
                            :
                            chooseTab == 4 ?
                              <div className='flex flex-col relative transition-all border-x-4 border-yellow-300 mx-3 duration-500 justify-center items-center z-20 gap-5  bg-white rounded-xl  p-4'>
                                <div className='p-1.5 rounded-full  w-full flex  flex-col items-center justify-center lg:w-1/3 transition-all duration-500'>
                                  <p className='text-center font-bold'>Work Experience</p>
                                  <Business style={{ fontSize: "124px" }} className='text-blue-900' />
                                </div>
                                <div className='flex text-justify w-full flex-col justify-center items-start transition-all duration-500'>
                                  <div className='mb-4'>
                                    <p className='bg-yellow-100 font-bold text-blue-primary border-l-2 border-blue-500 pl-4'>2019-2020 (EasySoft Indonesia)</p>
                                    <span className='text-14px'>Sebagai Software Developer menggunakan teknologi Flutter pada bagian Front End (Aplikasi Indonesia Bisa), HTML, CSS, PHP, Javascript dan Java.</span>
                                  </div>
                                  <div className='mb-4'>
                                    <p className='bg-yellow-100 font-bold text-blue-primary mt-4 border-l-2 border-blue-500 pl-4'>2020-Sekarang (Yayasan Berbagi Bahagia)</p>
                                    <span className='text-14px'>Sebagai Front End Developer menggunakan ReactJS dengan framework NextJS dan untuk CSS yang digunakan adalah framework TailwindCSS.
                                      Untuk merasakan  pengalaman langsung saat menggunakannya, dapat mengunjungi <strong className='text-blue-primary cursor-pointer' onClick={() => window.open("https://sharinghappiness.org")}>https://sharinghappiness.org</strong></span>
                                  </div>
                                  <div className='mb-4'>
                                    <p className='bg-yellow-100 font-bold text-blue-primary mt-4 border-l-2 border-blue-500 pl-4'>2023 (Pembuatan Website GayaProperti)</p>
                                    <span className='text-14px'>Pembuatan website <strong className='text-blue-primary cursor-pointer' onClick={() => window.open("https://gayaproperti.vercel.app")}>GayaProperti</strong></span>
                                  </div>
                                  <div className='mb-4'>
                                    <p className='bg-yellow-100 font-bold text-blue-primary mt-4 border-l-2 border-blue-500 pl-4'>2024 (Aplikasi Mobile Sharing Happiness)</p>
                                    <span className='text-14px'>Pembuatan aplikasi mobile SharingHappiness berbasis mobile Android menggunakan bahasa Flutter untuk kebutuhan skripsi pribadi.</span>
                                  </div>
                                  <div className='mb-4'>
                                    <p className='bg-yellow-100 font-bold text-blue-primary mt-4 border-l-2 border-blue-500 pl-4'>2025 (Pembuatan Landing Page Guruverse.id)</p>
                                    <span className='text-14px'>Pembuatan landing page website <strong className='text-blue-primary cursor-pointer' onClick={() => window.open("https://guruverse.id")}>guruverse.id</strong></span>
                                  </div>
                                </div>
                              </div>
                              :
                              <div className='flex relative justify-center items-center z-20 gap-10 lg:flex-row flex-col'>
                                <div className='p-1 rounded-full bg-white lg:w-72 w-52 transition-all duration-500'>
                                  <img className='w-full h-auto rounded-full' src="images/pp-2.jpg" />
                                </div>
                                <div className='flex flex-col transition-all duration-500 mx-4 text-center lg:text-left lg:mt-10 mt-0 justify-center lg:justify-start'>
                                  <p><span className='text-white font-semibold'> Hai, saya </span> <span className='bg-black text-purple-400  px-2' >Dena Susanti</span></p>
                                  <p><span className='text-white font-semibold'> seorang </span> <span className='bg-black  px-2' style={{ color: "#61DAFB" }}>Full stack developer</span></p>
                                  <p><span className='text-white font-semibold'> dapat mengerjakan </span> <span className='bg-black text-yellow-300 px-2' >Aplikasi berbasis website, mobile android maupun iOS.</span></p>
                                  <button onClick={() => {
                                    setOpenProfile(true);
                                    setChooseTab(0);
                                  }} className='text-black mx-auto font-bold rounded-full my-4 px-4 py-2  shadow-inner flex' style={{ backgroundColor: "#61DAFB" }}>Learn More <div className='rotate-180'><ArrowBack /></div> </button>
                                </div>
                              </div>
                  }
                  <div class="absolute z-10 top-0 -left-4 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply   filter blur-xl opacity-70 animate-blob"></div>
                  <div class="absolute z-10 top-0 -right-4 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div class="absolute z-10 -bottom-8 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>
                {
                  chooseTab >= 0 ?
                    <button onClick={() => setChooseTab(-1)} className={`bg-red-300 mb-10 relative transition-all duration-500 text-black mx-auto font-bold rounded-full px-2 py-2 mt-10`}>
                      <Close />
                    </button> : ""
                }
              </div>
            </main>
            {/* <Footer /> */}
          </div>
      }
    </Layout>
  )
}
