// import React, {useEffect, useState} from 'react';
// import {useRouter} from "next/router";
// import Link from "next/link";
//
// import UserService from "../../services/UserService";
//
// function NavbarDefault(props) {
//     const router = useRouter()
//
//     const [nav, setNav] = useState(false);
//     const [shadow, setShadow] = useState(false);
//     const [navBg, setNavBg] = useState('#ecf0f3');
//     const [linkColor, setLinkColor] = useState('#1f2937');
//     const [menuIconColor, setMenuIconColor] = useState('#1f2937');
//
//     const [currentUser, setCurrentUser] = useState();
//     const [adminDashboard, setAdminDashboard] = useState();
//     const [defaultUser, setDefaultUser] = useState();
//
//     useEffect(() => {
//         async function dataFetch() {
//             const temp = UserService.getCurrentUser();
//             if (temp) {
//                 setCurrentUser(temp);
//                 setAdminDashboard(temp.roles.includes("ROLE_ADMIN"));
//                 setDefaultUser(temp.roles.includes("ROLE_DEFAULT"));
//             }
//         }
//
//         dataFetch();
//     }, []);
//
//     useEffect(() => {
//         if (
//             router.asPath === '/login' ||
//             router.asPath === '/registration' ||
//             router.asPath === '/number_authenticate' ||
//             router.asPath === '/password_reset'
//         ) {
//             setNavBg('transparent')
//             setLinkColor('#ecf0f3')
//             setMenuIconColor('#ecf0f3')
//         } else {
//             setNavBg('transparent')
//             setLinkColor('#ecf0f3')
//             setMenuIconColor('#ecf0f3')
//         }
//     }, [router]);
//
//     const logout = () => {
//         UserService.logout();
//     }
//
//     const handleNav = () => {
//         setNav(!nav)
//     }
//
//     useEffect(() => {
//         const handleShadow = () => {
//             if (window.scrollY >= 90) {
//                 setShadow(true)
//             } else {
//                 setShadow(false)
//             }
//         };
//         window.addEventListener('scroll', handleShadow);
//     }, []);
//
//
//     return (
//         <div style={{backgroundColor: `${navBg}`}}
//              className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
//             <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
//                 <Link href='/'>
//                     <img src='/assets/navbarlogo.png' alt='Navinda.me' width='150' height='50'/>
//                 </Link>
//             </div>
//         </div>);
// }
//
// export default NavbarDefault;
