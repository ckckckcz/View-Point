import About from "../components/UI/home/aboutUs"; 
import Merchant from "../components/UI/home/merchant";
import Promotion from "../components/UI/promotion";
const Home = () => {
    return(
        <>
            <section className="bg-center bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/09/12/20/44/horse-race-1665688_960_720.jpg')] bg-gray-700 bg-blend-multiply lg:h-screen lg:w-screen h-[650px] flex items-center justify-center">
                <div className="lg:text-center text-left px-4 mx-auto max-w-screen-xl">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">The Track Is Calling – Saddle Up!</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Step into the world of champions – where every stride counts and every second matters.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-xl border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Order Now
                        </a>  
                    </div>
                </div>
            </section>
            <About />
            <Merchant />
            <Promotion />  
        </>
    );
};
export default Home;  