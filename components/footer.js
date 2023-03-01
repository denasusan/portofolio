import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import { Facebook, Instagram, MusicNoteRounded, Call, Mail, LocationOn } from '@material-ui/icons'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='footer bg-opacity-10' style={{backgroundColor: '#283b77'}}>
            <div className="section-1 w-full pb-8">
                <div className='w-full flex justify-between  text-white text-12px font-medium'>
                    <div className='flex lg:ml-0 ml-2 lg:flex-row flex-col justify-evenly w-2/4 pt-6 pr-4  '>
                        <div>
                            <div className='flex items-start cursor-pointer' onClick={() => {
                                window.open("https://www.google.com/maps/place/Jl.+Arcamanik+No.107,+Sindang+Jaya,+Kec.+Mandalajati,+Kota+Bandung,+Jawa+Barat+40293/@-6.8981754,107.6791901,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68dd6f65c2e639:0xfaa927429ec14f4c!8m2!3d-6.8981754!4d107.6813788")
                            }}> 
                                <LocationOn fontSize='small' className='mr-1' />
                                <p>Jalan baitussalam Jl. Arcamanik No.107, <br />Sindanglaya, Cimenyan, Bandung City, West Java 40195</p>
                            </div>
                            <div className='flex mt-6 cursor-pointer' onClick={() =>
                                window.open(
                                    `http://wa.me/628112347615?text=Hai Admin Gaya Properti, saya ingin bertanya...`
                                )
                            }>
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
                                {/* <Facebook className='cursor-pointer' onClick={() => window.open("")}/> */}
                                <Instagram className='ml-1 cursor-pointer' onClick={() => window.open("https://www.instagram.com/gayaproperti/")} />
                                <MusicNoteRounded className='ml-1 cursor-pointer' onClick={() => window.open("https://www.tiktok.com/@gayaproperti")} />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 pt-6 flex justify-center lg:items-start items-end relative'>
                        Copyright &copy;2023 gayaproperti.id
                        <br />All Right Reserved
                        <br />Gaya Properti Sarana
                    </div>
                </div>
            </div>
        </footer>
    )
}
