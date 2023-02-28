import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { WhatsApp } from "@material-ui/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Contacts() {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([
        {
            "name": "Muhammad Dzikri Imanullah",
            "image": "images/person-1.png",
            "no": "628112347615"
        },
        {
            "name": "Muhammad Dzikri Imanullah",
            "image": "images/person-1.png",
            "no": "628112347615"
        },
        {
            "name": "Muhammad Dzikri Imanullah",
            "image": "images/person-1.png",
            "no": "628112347615"
        },
        {
            "name": "Muhammad Dzikri Imanullah",
            "image": "images/person-1.png",
            "no": "628112347615"
        },
        {
            "name": "Muhammad Dzikri Imanullah",
            "image": "images/person-1.png",
            "no": "628112347615"
        },
        {
            "name": "Muhammad Dzikri Imanullah",
            "image": "images/person-1.png",
            "no": "628112347615"
        },
        {
            "name": "Muhammad Dzikri Imanullah",
            "image": "images/person-1.png",
            "no": "628112347615"
        }
    ]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])

    return (
        <Layout>
            {
                loading == true ?
                    <div className='w-full min-h-screen flex justify-center items-center animate-bounce'>
                        <img src="images/logo-small.png" />
                    </div> :
                    <div>
                        <Header tabActive={"contacts"} />
                        <main className="w-full min-h-screen flex flex-col items-center">
                            <p className="text-blue-primary text-30px font-semibold py-10">Contact Us</p>
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-10/12 mx-auto">
                                {
                                    contacts.map((item) => {
                                        return <div className="flex cursor-pointer flex-col justify-center items-center shadow-xl rounded-3xl m-4">
                                            <div key={item} className=' mt-2' style={{ width: '40%', height: '100%', position: 'relative', paddingBottom: "40%" }}>
                                                <Image
                                                    tabIndex="0"
                                                    src={`${item.image}`}
                                                    alt={`slide`}
                                                    layout='fill'
                                                    placeholder='blur'
                                                    blurDataURL='/'
                                                    loading='lazy'
                                                    objectFit='cover '
                                                    className="rounded-full shadow-xl"
                                                />
                                            </div>
                                            <div className="flex justify-center items-center pb-4" onClick={() =>
                                                window.open(
                                                    `http://wa.me/${item.no}?text=Hai Admin Gaya Properti, saya ingin bertanya...`
                                                )
                                            }>
                                                <p className="text-14px font-semibold text-blue-primary pt-4 pb-2">{item.name}</p>
                                                <WhatsApp className=" text-green-700" />
                                            </div>

                                        </div>
                                    })
                                }
                            </div>
                        </main>
                        <Footer />
                    </div>
            }
        </Layout>
    )
}
