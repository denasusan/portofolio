import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import { Facebook, Instagram, MusicNoteRounded, Twitter, PanToolSharp, Copyright, DraftsOutlined, LocationCity, LocationCityOutlined, Call, Mail, LocationOn } from '@material-ui/icons'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="section-1 w-full mb-8">
                <div className='w-full flex justify-between  text-gray-600 text-12px font-medium'>
                    <div className='flex lg:ml-0 ml-2 lg:flex-row flex-col justify-evenly w-2/4 pt-6 pr-4  '>
                        <div>
                            <div className='flex items-start cursor-pointer'>
                                <LocationOn fontSize='small' className='mr-1' />
                                <p>Bandung, Bandung Selatan Jawa Barat, Indonesia</p>
                            </div>
                            <div className='flex mt-6 cursor-pointer'>
                                <Call fontSize='small' className='mr-1' />
                                <p>+62 811-2347-615</p>
                            </div>
                            <div className='flex mt-1 cursor-pointer'>
                                <Mail fontSize='small' className='mr-1' />
                                <p className=''>gayaproperti.co@gmail.com</p>
                            </div>
                        </div>
                        <div className='lg:ml-10 ml-0 lg:mt-0 mt-6'>
                            <p>
                                Network
                            </p>
                            <div className='flex lg:mt-6 mt-0'>
                                <Facebook className='cursor-pointer'/>
                                <Instagram className='ml-1 cursor-pointer'/>
                                <MusicNoteRounded className='ml-1 cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 pt-6 flex justify-center lg:items-start items-end relative'>
                       Copyright &copy;2023 gayaproperti.com
                       <br/>All Right Reserved
                       <br/>PT. Gaya Properti
                    </div>
                </div>
            </div>
        </footer>
    )
}
