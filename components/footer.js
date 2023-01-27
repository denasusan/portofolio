import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import { Facebook, Instagram, Twitter, PanToolSharp, Copyright, DraftsOutlined } from '@material-ui/icons'
import Link from 'next/link'
import PathIcon from '@/public/svg/path_icon'

export default function Footer() {
    return (
        <footer className='w-full bg-yellow-warm pt-16'>
            <div className='w-full rounded-tl-full  bg-green-light'>
                <div className='flex lg:justify-between lg:flex-row flex-col justify-end'>
                    <div className='flex w-full lg:w-2/3 p-10 lg:justify-evenly lg:items-center items-end lg:flex-row flex-col justify-end'>
                        <Link href="/">
                            <img src="/images/logo-text-white.png" className='lg:h-24 h-10 w-auto' />
                        </Link>
                        <div className='text-white text-24px font-semibold flex lg:flex-col flex-row gap-2 '>
                            <div className='flex gap-2 mb-2 cursor-pointer  justify-start items-center text-16px font-semibold' onClick={() => alert("Open Instagram")}>
                                <Instagram />
                                <span className='lg:visible invisible absolute lg:relative'>Our Instagram</span>
                            </div>
                            <div className='flex gap-2 mb-2 cursor-pointer  justify-start items-center text-16px font-semibold' onClick={() => alert("Open Facebook")}>
                                <Facebook />
                                <span className='lg:visible invisible absolute lg:relative'>Our Facebook</span>
                            </div>
                            <div className='flex gap-2 mb-2 cursor-pointer  justify-start items-center text-16px font-semibold' onClick={() => alert("Open Twitter")}>
                                <Twitter />
                                <span className='lg:visible invisible absolute lg:relative'>Our Twitter</span>
                            </div>
                            <div className='flex gap-2  mb-2 cursor-pointer justify-start items-center text-16px font-semibold' onClick={() => alert("Open Path")}>
                                <PathIcon />
                                <span className='lg:visible invisible absolute lg:relative'>Our Path</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-white text-24px font-semibold lg:w-1/4 w-full flex flex-col justify-center lg:items-start items-end pr-4 lg:pr-0'>
                        <div className='flex gap-2 mb-2  justify-start items-center text-16px font-semibold'>
                            <Link href="/about">Tentang Kami</Link>
                        </div>
                        <div className='flex gap-2 mb-2 cursor-pointer justify-start items-center text-16px font-semibold' onClick={() => alert("Open Location Office")}>
                            <div>Location office  at Jl.Supratman</div>
                        </div>
                        <div className='flex mb-2  justify-start items-center text-16px font-semibold'>
                            <Copyright />
                            <div>2023</div>
                        </div>
                        <div onClick={() => alert("Open Email to send email")} className='cursor-pointer flex gap-2 pb-2 lg:self-end mr-4  mb-2 justify-end items-center text-16px font-semibold'>
                            <div>Kirim saran untuk kami</div>
                            <div className='bg-orange-light-DEFAUL p-3 rounded-full'>
                                <DraftsOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
