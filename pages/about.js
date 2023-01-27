import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'


export default function About() {

    return (
        <Layout>
            <Header tabActive={3} />
            <main>
                <div className='w-full flex min-h-screen lg:items-start items-center lg:justify-center justify-start lg:py-32 py-10  lg:flex-row flex-col bg-yellow-warm'>
                    <div className='w-1/3 flex justify-center items-center lg:mb-0 mb-10'>
                        <div style={{ width: "100%", height: "50%", position: "relative", paddingBottom:"50%"}}>
                            <Image
                                src={"/images/tentang-jelajah-museum.png"}
                                id="image"
                                alt={"bg-1"}
                                layout='fill'
                                placeholder='blur'
                                blurDataURL='/'
                                loading='lazy'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full flex justify-center items-center'>
                        <p className='lg:text-24px text-14px lg:px-10 px-4 font-bold text-green-light'>Jelajah Museum adalah website tentang kumpulan dokumentasi, lokasi dan informasi lainnya dari museum di seluruh dunia.
                            <br /><br />
                            Dibuat untuk berbagi informasi kepada teman-teman yang
                            ingin mengetahui tentang
                            museum - museum yang ada di dunia.</p>
                    </div>

                </div>
            </main>
            <Footer />
        </Layout>
    )
}
