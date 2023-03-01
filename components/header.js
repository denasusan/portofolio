import MenuIcon from '@/public/svg/menu';
import { TextField } from '@material-ui/core';
import { Close, Search } from '@material-ui/icons';
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router';
import { useEffect, useState } from 'react'

export default function Header({ tabActive, isPageSearch, refSection }) {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    useEffect(() => {
        const url = window.location.href
        if(url.includes("tentang-kami"))  {
            refSection.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [])
    
    return (
        <header className='pb-14'>
            <div className="section-1 w-full mb-10 fixed z-10 bg-white pb-0 lg:pb-4">
                <div className='w-full flex justify-between'>
                    <div className='flex flex-col lg:flex-row  justify-around lg:w-1/3 w-full lg:pt-4 pt-4 lg:pl-10 pl-4 pr-4'>
                        <div className='lg:mb-0 mb-4'>
                            <img src="images/logo.png" onClick={() => Router.push("/")} className='lg:w-36 w-28  h-auto mr-2 cursor-pointer' />
                        </div>
                    </div>
                    <div className='w-1/3 pt-4 flex justify-center '>
                        <div className='flex lg:relative lg:visible invisible absolute mr-2'>
                            <TextField className='w-full ' placeholder='Search...' inputProps={{
                                style: { fontSize: "12px", fontWeight: "500" }
                            }} />
                            <Search className='mt-1 text-blue-primary' />
                        </div>

                        <div className='cursor-pointer' onClick={() => { setIsMenuOpened(!isMenuOpened) }}>
                            <MenuIcon />
                        </div>
                        {

                            <div className={`${isMenuOpened == false ? "scale-0" : "scale-100"} transition-all z-20 right-2 lg:right-32 sm:right-8 top-4 duration-200 absolute bg-white rounded-xl p-2 border shadow-xl border-blue-primary`}>
                                <div className='flex justify-end text-blue-primary' ><Close className=' cursor-pointer' fontSize='small' onClick={() => setIsMenuOpened(!isMenuOpened)} /></div>
                                <Link href={"/"} className={`${tabActive == "home" ? "text-blue-primary-light" : "text-black"} mb-2 hover:text-blue-primary-light cursor-pointer flex text-12px font-medium border-b border-blue-primary-light`}>
                                    Home
                                </Link>
                                <Link href={"/portofolio"} className={`${tabActive == "portofolio" ? "text-blue-primary-light" : "text-black"} flex mb-2 hover:text-blue-primary-light cursor-pointer text-12px font-medium border-b border-blue-primary-light`}>
                                    Portofolio
                                </Link>
                                <Link href="/contacts" className={`flex ${tabActive == "contacts" ? "text-blue-primary-light" : "text-black"} mb-2 hover:text-blue-primary-light cursor-pointer text-12px font-medium border-b border-blue-primary-light`}>
                                    Contact Us
                                </Link>
                                <p onClick={() => {
                                    if (tabActive == "home") {
                                        refSection.current?.scrollIntoView({ behavior: "smooth" });
                                        setIsMenuOpened(false);
                                    } else {
                                        Router.push("/#tentang-kami")
                                    }
                                }} className={`${tabActive == "tentang-kami" ? "text-blue-primary-light" : "text-black"} mb-2 hover:text-blue-primary-light cursor-pointer w-28 text-12px font-medium border-b border-blue-primary-light`}>
                                    About Us
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
