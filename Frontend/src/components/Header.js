import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../redux/features/UserSlice'

const Header = () => {
    const [dropdown, setDropdown] = useState(false)
    const [menu, setMenu] = useState(false)
    const dispatch = useDispatch()
    const {user} = useSelector((state) => ({...state.user}))
    return (
        <>
            <nav className="bg-gray-800 fixed-top">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        {
                            user && (
                                <button onClick={() => setMenu(!menu)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>

                                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )
                        }
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to={'/'}>
                                <img className="block h-8 w-auto lg:hidden" src="/new-logo.svg" alt="Your Company" />
                                <img className="hidden h-8 w-auto lg:block" src="/new-logo.svg" alt="Your Company" />
                            </Link>
                        </div>
                        {
                            !user && (
                                <div className="flex ml-6 space-x-4">
                                    <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Land & Homes Consult</Link>
                                </div>
                            )
                        }
                        <div className="hidden sm:ml-6 sm:block">
                            
                            {
                                user && (
                                    <div className="flex space-x-4">
                                        <Link to={'/'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Plots</Link>
                                        <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Potential Clients</Link>
                                        <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">
                            {
                                user && (
                                    <div>
                                        <button onClick={() => setDropdown(!dropdown)} type="button" className="flex items-center text-white rounded-full bg-gray-800 border border-gray-100 p-1 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            {user.name.split(' ')[0]}  <i className="fas fa-caret-down ml-2"></i>
                                        </button>
                                    </div>
                                )
                            }
                            {
                                dropdown && (
                                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                        <Link className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</Link>
                                        <Link className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</Link>
                                        <Link onClick={() => dispatch(logout())} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    </div>
                </div>

                {
                    menu && (
                        <div className="sm:hidden transition ease-out duration-100" id="mobile-menu">
                            <div class="space-y-1 px-2 pt-2 pb-3">

                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Potential Clients</Link>

                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Plots</Link>

                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Users</Link>
                            </div>
                        </div>
                    )
                }
            </nav>

            <div className="fancy-breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url("/25.jpg")'}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-content text-center">
                                <h2>Kwaso Plots</h2>
                                <p>Get in touch with us </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
   
    )
}

export default Header