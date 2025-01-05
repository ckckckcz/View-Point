import { useState, useEffect } from 'react';

const images = [
    "https://cdn.forumcomm.com/dims4/default/c201f80/2147483647/strip/true/crop/3332x2221+272+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F61%2F50%2F6df444424c7cb8796a56beed81c3%2F071622.S.FF.HorseRacing.04.jpg",
    "https://c0.wallpaperflare.com/preview/385/322/533/horse-snow-race-action.jpg",
    "https://www.monmouthpark.com/wp-content/uploads/2023/07/07-22-23-12-Geaux-Rocket-Ride-FIN_25.jpg"
];

export default function AboutUs() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Ganti gambar setiap 3 detik

        return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
    }, []);

    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:text-center text-left lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Our Story</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl lg:px-48">
                    We’re a company that creates timeless merchandise for horse racing fans. With a strong, loyal fanbase, we take pride in delivering products that not only capture the excitement of the sport but also connect deeply with the heart of our community. Our main audience? College students who share a passion for racing and want to show off their love for the sport. We're all about spreading joy with a touch of finesse, offering pieces that evoke both excitement and elegance. Whether you're a seasoned fan or just discovering the thrill of the track, we’ve got something just for you!
                </p>
                <div className="mt-20 grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 lg:gap-10 md:gap-5 lg:block hidden">
                    <img src="https://cdn.forumcomm.com/dims4/default/c201f80/2147483647/strip/true/crop/3332x2221+272+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F61%2F50%2F6df444424c7cb8796a56beed81c3%2F071622.S.FF.HorseRacing.04.jpg" alt="" className="w-full h-64 object-cover rounded-2xl -rotate-6" />
                    <img src="https://c0.wallpaperflare.com/preview/385/322/533/horse-snow-race-action.jpg" alt="" className="w-full h-64 object-cover rounded-2xl rotate-6" />
                    <img src="https://www.monmouthpark.com/wp-content/uploads/2023/07/07-22-23-12-Geaux-Rocket-Ride-FIN_25.jpg" alt="" className="w-full h-64 object-cover rounded-2xl -rotate-6" />
                </div>
                <div id="default-carousel" className="relative w-full lg:hidden block" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-2xl md:h-96">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
                                data-carousel-item
                            >
                                <img
                                    src={src}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt={`Slide ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}