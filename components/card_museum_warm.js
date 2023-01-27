import { SkipNext } from "@material-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function CardMuseumWarm() {
    return <div className="section-5 bg-yellow-warm lg:h-screen h-auto lg:py-0 py-10 flex justify-evenly pt-4 lg:flex-row flex-col items-center relative">
        <div className="w-4/5 flex items-end justify-center relative">
            <div style={{ width: '75%', height: '75%', position: 'relative', paddingBottom: "48%" }}>
                <Image
                    src={"/images/lukisan_10.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='cover'
                    className="pl-8 rounded-3xl bg-white"
                />

                <div className='absolute left-3 flex flex-col justify-center h-full'>
                    <div className='w-3 h-3 bg-green-light rounded-full mb-2'></div>
                    <div className='w-3 h-3 bg-red-light rounded-full mb-2'></div>
                    <div className='w-3 h-3 bg-green-light rounded-full'></div>
                </div>
            </div>
            <div style={{ width: '54px', height: '54px', position: 'relative' }}>
                <Image
                    src={"/images/logo-icon.png"}
                    id="image"
                    alt={"bg-3"}
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/'
                    loading='lazy'
                    objectFit='contain'
                />
            </div>
        </div>
        <div className="lg:w-1/3 w-full h-full lg:pl-0 px-8 flex flex-col justify-center lg:pr-10 relative lg:pb-0 pb-10">
            <p className="text-green-light text-center font-bold lg:text-30px text-24px">Museum Geologi Bandung</p>
            <p className="font-semibold text-10px lg:text-16px">Museum Geologi berlokasi di Jalan Diponegoro Nomor 57, Cihaur Geulis, Cibeunying Kaler, Kota Bandung. Di museum ini, kamu bisa melihat koleksi fosil, bebatuan, mineral, dan berbagai macam peta, seperti peta geologi, geofisika, dan gunung api.

                Selain itu, Museum Geologi juga menyajikan replika binatang purba yang epik. Kamu cukup menyiapkan uang sekitar Rp3.000 untuk tiket masuknya.....</p>
            <Link href="/detail?slug=geologi-bandung" className="w-full flex items-center justify-end absolute lg:bottom-10 lg:right-10 bottom-0 right-3">
                <p className="mr-2 lg:text-20px text-16px font-bold text-green-light">Selengkapnya</p>
                <div className="bg-orange-light-DEFAUL shadow-2xl rounded-full p-2 w-10 h-10 text-yellow-warm flex justify-center items-center">
                    <SkipNext />
                </div>
            </Link>
        </div>
    </div>
}