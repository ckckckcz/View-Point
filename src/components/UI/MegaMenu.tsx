export default function MegaMenu() {
    return(
        <div id="mega-menu-full-dropdown" className="mt-1 bg-gray-50 border-gray-200 shadow-sm border-y">
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:grid-cols-3 md:px-6">
                    <ul aria-labelledby="mega-menu-full-dropdown-button">
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="hidden md:block">
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Audience Management</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Creative Tools</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Marketing Automation</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    );
}