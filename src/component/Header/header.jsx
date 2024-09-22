import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 mx-auto px-1 py mb-4">
            {/* Container for logo and links */}
            <div className="container mx-auto flex justify-between items-center py-1">
                
                {/* Logo Section */}
                <div className="text-white text-2xl font-bold">
                    {/* Ensure the correct path to the image based on your project structure */}
                    <img
                        src="assets/sparktune white logo.png"
                        alt="Sparktune Logo"
                        className="h-16 w-auto" // Correct height and width for logo
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-white hover:text-gray-400">Home</a>
                    <a href="#" className="text-white hover:text-gray-400">About</a>
                    <a href="#" className="text-white hover:text-gray-400">Services</a>
                    <a href="#" className="text-white hover:text-gray-400">Contact</a>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Visible on smaller screens) */}
            <div className={`${isMenuOpen ? '' : 'hidden'} md:hidden bg-gray-800`}>
                <a href="#" className="block text-white py-2 px-4 hover:bg-gray-700">Home</a>
                <a href="#" className="block text-white py-2 px-4 hover:bg-gray-700">About</a>
                <a href="#" className="block text-white py-2 px-4 hover:bg-gray-700">Services</a>
                <a href="#" className="block text-white py-2 px-4 hover:bg-gray-700">Contact</a>
            </div>
        </nav>
    );
};

export default Header;
