import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { Instagram, MusicNoteRounded, WhatsApp } from "@material-ui/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Contacts() {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([
        {
            "name": "Gaya Properti",
            "image": "/images/logo-small.png",
            "link": "http://wa.me/628112347615?text=Hai Admin Gaya Properti, saya ingin bertanya..."
        },
    ]);
    const [socialMedia, setSocialMedia] = useState([
        {
            "name": "Instagram",
            "image": <Instagram fontSize="large" />,
            "link": "http://wa.me/628112347615?text=Hai Admin Gaya Properti, saya ingin bertanya..."
        },
        {
            "name": "TikTok",
            "image": <MusicNoteRounded fontSize="large" />,
            "link": "http://wa.me/628112347615?text=Hai Admin Gaya Properti, saya ingin bertanya..."
        },
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
                            <p className="text-blue-primary text-30px font-semibold pt-10">Contact Us</p>
                            <div class="flex items-center mx-auto ">
                                {
                                    contacts.map((item) => {
                                        return <div className="flex cursor-pointer px-10 pt-10 flex-col justify-center items-center shadow-xl rounded-3xl mx-4">
                                            <div className="rounded-full w-24 h-24 shadow-xl flex justify-center items-center">
                                                <img src={`${item.image}`} className="w-auto h-12" />
                                            </div>
                                            <div className="flex justify-center items-center pb-4" onClick={() =>
                                                window.open(
                                                    `${item.no}`
                                                )
                                            }>
                                                <p className="text-14px font-semibold text-blue-primary pt-4 pb-2 mr-1">{item.name}</p>
                                                <WhatsApp className=" text-green-700" />
                                            </div>

                                        </div>
                                    })
                                }
                            </div>
                            <p className="text-blue-primary text-30px font-semibold pt-16">Our Social Media</p>

                            <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 w-auto lg:w-4/12 mx-auto">
                                {
                                    socialMedia.map((item) => {
                                        return <div className="flex cursor-pointer flex-col px-10 pt-10 justify-center items-center shadow-xl rounded-3xl m-4">
                                            <div className="rounded-full w-24 h-24 text-white shadow-xl flex justify-center items-center">
                                                <div className="w-14 h-14 rounded-full flex justify-center items-center bg-blue-primary">
                                                    {item.image}
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center pb-4" onClick={() =>
                                                window.open(
                                                    `${item.no}`
                                                )
                                            }>
                                                <p className="text-14px font-semibold text-blue-primary pt-4 pb-2 mr-1">{item.name}</p>

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
