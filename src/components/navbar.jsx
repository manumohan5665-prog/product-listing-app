function Navbar({ cartCount }) {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">

                    <h1 className="text-2xl font-bold text-blue-600">
                        E
                        <span className="text-gray-800">
                            Kart
                        </span>
                    </h1>

                    <button className="relative text-2xl">
                        🛒

                        <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {cartCount}
                        </span>
                    </button>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;