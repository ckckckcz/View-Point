export default function Promotion() {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16">
            <div className="relative w-full lg:px-10 lg:py-32 py-16 px-7 text-left bg-[url('https://www.bursa.ro/_img/articole/mare/473168.jpg')] bg-center bg-cover bg-no-repeat lg:rounded-[40px] rounded-3xl dark:bg-gray-800 dark:border-gray-700">
                    <div className="absolute inset-0 lg:rounded-[40px] rounded-3xl bg-black opacity-60 bg-blend-multiply"></div>
                    <div className="relative z-10">
                        <h5 className="mb-1 lg:text-5xl md:text-4xl text-3xl font-bold text-white">Become part of our <span className="text-yellow-300">View Point</span></h5>
                        <p className="mb-5 lg:text-xl text-gray-400">A community that keeps the horse racing spirit alive, sharing the hype and pride in every race. We vibe together, root for the jockeys and their strong steeds, and celebrate every epic moment like a family.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0">
                            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-xl bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Join Community
                            </a> 
                        </div>
                    </div>
                </div>            
            </div>
        </section>
    );
}