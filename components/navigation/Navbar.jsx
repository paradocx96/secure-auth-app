import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import UserService from "../../services/UserService";

function Navbar(props) {
    const router = useRouter()

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('transparent');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const [menuIconColor, setMenuIconColor] = useState('#1f2937');

    const [currentUser, setCurrentUser] = useState();
    const [username, setUsername] = useState();
    const [adminUser, setAdminUser] = useState();

    useEffect(() => {
        async function dataFetch() {
            const temp = UserService.getCurrentUser();
            if (temp) {
                setCurrentUser(temp);
                setUsername(temp.username);
                setAdminUser(temp.roles.includes("ROLE_ADMIN"));
            }
        }

        dataFetch();
    }, []);

    useEffect(() => {
        if (
            router.asPath === '/login' ||
            router.asPath === '/registration' ||
            router.asPath === '/number_authenticate' ||
            router.asPath === '/password_reset'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
            setMenuIconColor('#ecf0f3')
        } else {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
            setMenuIconColor('#ecf0f3')
        }
    }, [router]);

    const logout = () => {
        UserService.logout();
    }

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);


    return (
        <div style={{backgroundColor: `${navBg}`}}
             className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <img src='/assets/navbarlogo.png' alt='Navinda.me' width='150' height='50'/>
                </Link>

                <div>
                    {currentUser ? (
                        <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                            {adminUser && (
                                <Link href='/admin/dashboard'>
                                    <li className='ml-10 text-sm uppercase hover:border-b'>Dashboard</li>
                                </Link>
                            )}

                            <li className='ml-10 text-sm uppercase hover:border-b'>{username}</li>
                            <li onClick={() => logout()}
                                className='ml-10 text-sm uppercase hover:border-b'>
                                Logout
                            </li>

                        </ul>
                    ) : (
                        <ul>
                        </ul>
                    )}
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu color={menuIconColor} size={25}/>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Bar*/}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#263238] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <img src='/assets/navbarlogo.png' alt='Navinda.me' width='150' height='50'/>
                            </Link>

                            <div onClick={handleNav}
                                 className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        {currentUser ? (
                            <ul className='uppercase'>
                                {adminUser && (
                                    <Link href='/admin/dashboard'>
                                        <li onClick={() => setNav(false)} className='py-4 text-sm'>Dashboard</li>
                                    </Link>
                                )}

                                <li onClick={() => setNav(false)} className='py-4 text-sm'>{username}</li>
                                <li onClick={() => {
                                    logout();
                                    setNav(false)
                                }} className='py-4 text-sm'>
                                    Logout
                                </li>
                            </ul>
                        ) : (
                            <ul>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>);
}

export default Navbar;
