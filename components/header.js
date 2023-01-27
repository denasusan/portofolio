import Image from 'next/image'
import Link from 'next/link'
import SearchIcon from '@/public/svg/search_icon'
import { useState } from 'react'

export default function Header({ tabActive, isPageSearch }) {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <header>
            <div className="section-1">
                <div className={`header  bg-yellow-warm w-full flex items-center 
                ${isPageSearch == true ? "justify-start pl-16 lg:pl-10" : "justify-around"} `}>
                    {
                        isPageSearch == true ? "" :
                            <div className='border-2 border-green-light p-1 rounded-lg cursor-pointer lg:absolute relative lg:invisible visible' onClick={() => setIsMenuOpened(!isMenuOpened)}>
                                <div className='w-5 rounded-full h-0.5 mb-0.5 bg-orange-light-DEFAUL'></div>
                                <div className='w-5 rounded-full h-0.5 mb-0.5 bg-orange-light-DEFAUL'></div>
                                <div className='w-5 rounded-full h-0.5 mb-0.5 bg-orange-light-DEFAUL'></div>
                                {
                                    <div className={`left-10 flex flex-col z-10 px-4 py-3 top-0 rounded-lg transition-all absolute bg-white  ${isMenuOpened == true ? "scale-100" : "scale-0"}`}>
                                        <Link href="/">
                                            <span className={`${tabActive == 1 ? "text-orange-light-DEFAUL  border-orange-light-DEFAUL border-b-2 shadow-xl " : "text-green-light"} font-bold`}>Home</span>
                                        </Link>
                                        <Link href="/recomend">
                                            <span className={`${tabActive == 2 ? "text-orange-light-DEFAUL  border-orange-light-DEFAUL border-b-2 shadow-xl " : "text-green-light"} font-bold`}>Rekomendasi</span>
                                        </Link>
                                        <Link href="about">
                                            <span className={`${tabActive == 3 ? "text-orange-light-DEFAUL  border-orange-light-DEFAUL border-b-2 shadow-xl " : "text-green-light"} font-bold`}>Tentang</span>
                                        </Link>
                                    </div>
                                }
                            </div>
                    }
                    {
                        isPageSearch == true ? "" :
                            <div className="flex gap-5 -ml-10 lg:visible invisible absolute lg:relative">
                                <Link href="/">
                                    <span className={`${tabActive == 1 ? "text-orange-light-DEFAUL  border-orange-light-DEFAUL border-b-2 shadow-xl pb-1" : "text-green-light"} font-bold`}>Home</span>
                                </Link>
                                <Link href="/recomend">
                                    <span className={`${tabActive == 2 ? "text-orange-light-DEFAUL  border-orange-light-DEFAUL border-b-2 shadow-xl pb-1" : "text-green-light"} font-bold`}>Rekomendasi</span>
                                </Link>
                                <Link href="about">
                                    <span className={`${tabActive == 3 ? "text-orange-light-DEFAUL  border-orange-light-DEFAUL border-b-2 shadow-xl pb-1" : "text-green-light"} font-bold`}>Tentang</span>
                                </Link>
                            </div>
                    }

                    <Link href="/">
                        <img src="/images/logo-text.png" className="w-auto lg:h-24 h-12  mt-2" />
                    </Link>
                    {
                        isPageSearch == true ? "" :
                            <Link href="/search" className=" pb-1 flex lg:border-b-2 border-green-light">
                                <span className="lg:pr-10 pr-0 lg:scale-100 scale-0 text-14px text-green-light font-semibold lg:visible invisible absolute lg:relative">Cari Museum...</span>
                                <SearchIcon />
                            </Link>
                    }
                </div>
            </div>
        </header>
    )
}
