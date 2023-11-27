import React from "react";
import 'tailwindcss/tailwind.css';

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4  shadow-md">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                    Reading Is Fun...
                </h1>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Home
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Login
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Signup
                    </button>
                </div>
            </div>
            <hr className="mt-2"/>
        </div>
    )
}

export default Header;
