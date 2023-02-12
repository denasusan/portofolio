import { TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header({ tabActive, isPageSearch }) {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <header>
            <div className="section-1 w-full mb-10">
                <div className='w-full flex justify-between'>
                    <div className='flex flex-col lg:flex-row  justify-around lg:w-1/3 w-full lg:pt-6 pt-4 lg:pl-10 pl-4 pr-4'>
                        <div className='lg:mb-0 mb-4'>
                            <img src="/images/logo.png" className='lg:w-36 w-44  h-auto mr-2' />
                        </div>
                        <div>
                            <p onClick={() => { }} className='text-black cursor-pointer w-28 text-12px font-medium border-b border-blue-primary-light'>
                                About
                            </p>
                            <p onClick={() => { }} className='text-black pt-2 cursor-pointer w-28 text-12px font-medium border-b border-blue-primary-light'>
                                Project
                            </p>
                            <p onClick={() => { }} className='text-black pt-2 cursor-pointer w-28 text-12px font-medium border-b border-blue-primary-light'>
                                Portfolio
                            </p>
                            <p onClick={() => { }} className='text-black pt-2 cursor-pointer w-28 text-12px font-medium border-b border-blue-primary-light'>
                                Portfolio
                            </p>
                        </div>
                    </div>
                    <div className='w-1/3 pt-6 flex justify-center lg:relative lg:visible invisible absolute'>
                        <TextField className='w-1/3' placeholder='Search...' inputProps={{
                            style: {fontSize: "12px", fontWeight:"500"}
                        }} />
                        <Search className='mt-1 text-blue-primary'/>
                    </div>
                </div>
            </div>
        </header>
    )
}
