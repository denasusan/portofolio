import { Inter } from '@next/font/google'
import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/layout'
import { ArrowBack, ArrowBackIos, Close, LinkedIn, Mail, Redo } from '@material-ui/icons'
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
    }, 1000)
  }, [])

  return (
    <Layout>
      {
        loading == true ?
          <div className='w-full min-h-screen flex justify-center items-center animate-bounce'>
            <img src="images/logo-small.png" className='w-32 h-auto' />
          </div> :
          <div>
            <main>
              <div className={` min-h-screen overflow-y-auto overflow-x-hidden w-full flex flex-col ${chooseTab == -1 ? "justify-center" : "justify-start"} items-center  bg-black`}>
                <div className={` ${openProfile == true && chooseTab  >= 0 ? " opacity-100 z-20 -translate-y-10 pt-20 visible relative" : "translate-y-0 opacity-0 invisible absolute"} duration-500  transition-all `}>
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
                        <div className='p-1 rounded-full bg-pink-300 w-full lg:w-1/3 transition-all duration-500'>
                          <img className='w-full h-auto rounded-full' src="https://media.licdn.com/dms/image/D5603AQGJkXGib29kUA/profile-displayphoto-shrink_800_800/0/1665710148806?e=1685577600&v=beta&t=bOM1E-LvIaDu57mKTalsuzYJ4Zh1ElxmG5YvFbUMBZc" />
                        </div>
                        <div className='flex w-full lg:w-2/3 flex-col justify-center items-center transition-all duration-500'>
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
                        <div className='flex relative transition-all duration-500 border-y-4 border-blue-400 mx-3 justify-center items-center z-20 gap-10 lg:flex-row flex-col bg-white rounded-xl p-4'>
                          <div className='p-1.5 rounded-full   w-full lg:w-1/3 transition-all duration-500'>
                            <img className='w-full h-auto py-1 rounded-full' src="/images/skill_icon.png" />
                          </div>
                          <div className='flex w-full lg:w-2/3 flex-col justify-center items-center transition-all duration-500'>
                            <p className='text-black font-bold'>
                              Sekolah Menengah Atas yang saya tempuh adalah &nbsp;
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
                          <div className='flex relative transition-all border-x-4 border-red-500 duration-500 mx-3 justify-center items-center z-20 gap-10 lg:flex-row flex-col bg-white rounded-xl p-4'>
                            <div className='p-2 rounded-full  w-full lg:w-1/3 transition-all duration-500'>
                              <img className='w-full h-auto rounded-full' src="/images/contact_icon.png" />
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
                            <div className='relative transition-all border-y-4 border-purple-400 mx-3 duration-500 z-20 gap-10 bg-white rounded-xl p-4'>
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
                                    PHP (dengan framework CodeIgnite)
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
                              <div className='flex relative transition-all border-x-4 border-yellow-300 mx-3 duration-500 justify-center items-center z-20 gap-5 lg:flex-row flex-col bg-white rounded-xl  p-4'>
                                <div className='p-1.5 rounded-full  w-full lg:w-1/3 transition-all duration-500'>
                                  <img className='w-full h-auto rounded-full' src="/images/work_expereience.png" />
                                </div>
                                <div className='flex lg:w-2/3 w-full flex-col justify-center items-start transition-all duration-500'>
                                  <div className=''>
                                    <p className='font-bold text-blue-primary'>2019-2020 (EasySoft Indonesia)</p>
                                    <span className='text-14px font-semibold'>sebagai Software Developer menggunakan teknologi Flutter pada bagian Front End (Aplikasi Indonesia Bisa), HTML, CSS, PHP, Javascript dan Java.</span>
                                  </div>
                                  <div className=''>
                                    <p className='font-bold text-blue-primary pt-4'>2020-Sekarang (Yayasan Berbagi Bahagia)</p>
                                    <span className='text-14px font-semibold'>sebagai Front End Developer menggunakan ReactJS dengan framework NextJS dan untuk CSS yang digunakan adalah framework TailwindCSS.
                                      Untuk merasakan  pengalaman langsung saat menggunakannya, dapat mengunjungi <strong className='text-blue-primary cursor-pointer' onClick={() => window.open("https://sharinghappiness.org")}>https://sharinghappiness.org</strong></span>
                                  </div>
                                </div>
                              </div>
                              :
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
                                  }} className='text-black mx-auto font-bold rounded-full my-4 px-4 py-2  shadow-inner flex' style={{ backgroundColor: "#61DAFB" }}>More Info <div className='rotate-180'><ArrowBack /></div> </button>
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
