import avatar from "../assets/img/avatar.png";
import Logo from "../assets/img/logo.png";
export default function Navbar() {
    return(
        <>
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:p-6 p-4">
                    <a href="javascript:void(0)" className="flex items-center space-x-3 rtl:space-x-reverse">   
                        <img src={Logo} className="h-12" alt="View Point Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap lg:block hidden">View Point</span>
                    </a>
                    <div className="flex items-center space-x-5 rtl:space-x-reverse">
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"/>
                                <path fill-rule="evenodd" d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z" clip-rule="evenodd"/>
                            </svg>
                            <div className="relative hover:bg-gray-100 cursor-pointer p-2 rounded-full">
                                <svg className="w-6 h-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                                </svg>
                                <span className="top-1 left-6 absolute  w-3.5 h-3.5 bg-[#00165b] border-2 border-whit rounded-full"></span>
                            </div>
                        </div>
                        <div className="border border-gray-200 h-7"></div>
                        <img className="w-10 h-10 rounded-full" src={avatar} alt="Rounded avatar" />
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50">
                <div className="max-w-screen-xl px-6 py-4 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 hover:underline text-lg font-semibold" aria-current="page">Beranda</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline text-lg font-semibold">Toko</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline text-lg font-semibold">Kontak</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}