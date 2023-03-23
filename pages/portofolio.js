import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";

export default function Portofolio() {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([
        "images/pt-1.webp",
        "images/pt-2.webp",
        "images/pt-3.webp",
        "images/pt-4.webp",
        "images/pt-5.webp",
        "images/pt-6.webp",
        "images/pt-7.webp",
        "images/pt-8.webp",
        "images/pt-9.webp",
        "images/pt-10.webp",
        "images/pt-11.webp",
        "images/pt-12.webp",
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
                        <Header tabActive={"portofolio"} />
                        <main>
                            {
                                images.map((item) => {
                                    return <div key={`${item}`}>
                                        <img src={`${item}`} className="w-full h-auto" />
                                    </div>
                                })
                            }
                        </main>
                        <Footer />
                    </div>
            }
        </Layout>
    )
}
