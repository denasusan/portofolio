import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";

export default function Portofolio() {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([
        "images/pt-1.png",
        "images/pt-2.png",
        "images/pt-3.png",
        "images/pt-4.png",
        "images/pt-5.png",
        "images/pt-6.png",
        "images/pt-7.png",
        "images/pt-8.png",
        "images/pt-9.png",
        "images/pt-10.png",
        "images/pt-11.png",
        "images/pt-12.png",
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
