import React from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        googleLogout();
        navigate('/login');
    }

    return (
        <div className="absolute top-0 p-2 bg-cOrange text-white font-bold text-xl w-full flex justify-around items-center font-inter z-10">
            <div>
                Tracking Page
            </div>

            <button onClick={handleLogout} className="text-cOrange bg-white px-3 py-1.5 rounded-lg text-[18px] hover:bg-gray-300">
                Logout
            </button>
        </div>
    );
}

export default Navbar;
