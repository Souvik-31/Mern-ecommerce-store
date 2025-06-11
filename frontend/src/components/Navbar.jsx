import React, { useState } from "react";
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Package, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useUserStore();
    const isAdmin = user?.role === "admin";
    const { cart } = useCartStore();

    return (
        <header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-cyan-800'>
            <div className='container mx-auto px-4 py-3'>
                <div className='flex flex-wrap justify-between items-center'>
                    <Link to='/' className='text-2xl font-bold text-cyan-400 items-center space-x-2 flex'>
                        StyleHatch
                    </Link>

                    {/* Hamburger menu for mobile */}
                    <button
                        className='sm:hidden text-cyan-400 focus:outline-none'
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label='Toggle menu'
                    >
                        <Menu size={28} />
                    </button>

                    {/* Desktop Nav */}
                    <nav className='hidden sm:flex flex-wrap items-center gap-4'>
                        <Link
                            to={"/"}
                            className='text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out'
                        >
                            Home
                        </Link>
                        {user && (
                            <Link
                                to={"/cart"}
                                className='relative group text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out'
                            >
                                <ShoppingCart className='inline-block mr-1 group-hover:text-cyan-400' size={20} />
                                <span className='hidden sm:inline'>Cart</span>
                                {cart.length > 0 && (
                                    <span
                                        className='absolute -top-2 -left-2 bg-cyan-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-cyan-400 transition duration-300 ease-in-out'
                                    >
                                        {cart.length}
                                    </span>
                                )}
                            </Link>
                        )}
                        {user && (
                            <Link
                                to={"/orders"}
                                className='relative group text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out flex items-center'
                            >
                                <Package className='inline-block mr-1 group-hover:text-cyan-400' size={20} />
                                <span className='hidden sm:inline'>Orders</span>
                            </Link>
                        )}
                        {isAdmin && (
                            <Link
                                className='bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center'
                                to={"/secret-dashboard"}
                            >
                                <Lock className='inline-block mr-1' size={18} />
                                <span className='hidden sm:inline'>Dashboard</span>
                            </Link>
                        )}
                        {user ? (
                            <button
                                className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                                onClick={logout}
                            >
                                <LogOut size={18} />
                                <span className='hidden sm:inline ml-2'>Log Out</span>
                            </button>
                        ) : (
                            <>
                                <Link
                                    to={"/signup"}
                                    className='bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                                >
                                    <UserPlus className='mr-2' size={18} />
                                    Sign Up
                                </Link>
                                <Link
                                    to={"/login"}
                                    className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                                >
                                    <LogIn className='mr-2' size={18} />
                                    Login
                                </Link>
                            </>
                        )}
                    </nav>

                    {/* Mobile Nav Dropdown */}
                    {menuOpen && (
                        <div className='absolute top-full right-4 mt-2 w-56 bg-gray-900 rounded-lg shadow-lg border border-cyan-800 flex flex-col p-4 sm:hidden z-50'>
                            <Link
                                to={"/"}
                                className='mb-2 text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out'
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>
                            {user && (
                                <Link
                                    to={"/cart"}
                                    className='mb-2 relative group text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <ShoppingCart className='inline-block mr-1 group-hover:text-cyan-400' size={20} />
                                    Cart
                                    {cart.length > 0 && (
                                        <span className='absolute -top-2 -left-2 bg-cyan-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-cyan-400 transition duration-300 ease-in-out'>
                                            {cart.length}
                                        </span>
                                    )}
                                </Link>
                            )}
                            {user && (
                                <Link
                                    to={"/orders"}
                                    className='mb-2 relative group text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out flex items-center'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Package className='inline-block mr-1 group-hover:text-cyan-400' size={20} />
                                    Orders
                                </Link>
                            )}
                            {isAdmin && (
                                <Link
                                    className='mb-2 bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center'
                                    to={"/secret-dashboard"}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Lock className='inline-block mr-1' size={18} />
                                    Dashboard
                                </Link>
                            )}
                            {user ? (
                                <button
                                    className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                                    onClick={() => {
                                        logout();
                                        setMenuOpen(false);
                                    }}
                                >
                                    <LogOut size={18} />
                                    <span className='ml-2'>Log Out</span>
                                </button>
                            ) : (
                                <>
                                    <Link
                                        to={"/signup"}
                                        className='mb-2 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <UserPlus className='mr-2' size={18} />
                                        Sign Up
                                    </Link>
                                    <Link
                                        to={"/login"}
                                        className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <LogIn className='mr-2' size={18} />
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;