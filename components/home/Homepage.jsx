import React, {useEffect, useState} from 'react';
import Link from "next/link";
import UserService from "../../services/UserService";

function Homepage(props) {
    const [currentUser, setCurrentUser] = useState();
    const [adminUser, setAdminUser] = useState();
    const [defaultUser, setDefaultUser] = useState();
    const [buyerUser, setBuyerUser] = useState();
    const [sellerUser, setSellerUser] = useState();

    useEffect(() => {
        async function dataFetch() {
            const temp = UserService.getCurrentUser();

            if (temp) {
                setCurrentUser(temp);
                setAdminUser(temp.roles.includes("ROLE_ADMIN"));
                setDefaultUser(temp.roles.includes("ROLE_DEFAULT"));
                setBuyerUser(temp.roles.includes("ROLE_BUYER"));
                setSellerUser(temp.roles.includes("ROLE_SELLER"));
            }
            console.log(temp);
        }

        dataFetch();
    }, []);

    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className='grid lg:grid-cols-5 gap-8'>

                    <div className='col-span-2 lg:col-span-3 w-full h-full p-4'>
                        <div className='h-full'>
                            <h1 className='text-gray-700'>
                                <span className='text-[#5651e5]'>Secure Authentication</span> Application
                            </h1>
                        </div>
                    </div>

                    <div className='col-span-2 lg:col-span-2 w-full h-auto p-4'>
                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                {buyerUser && (
                                    <div>
                                        <Link href='/'>
                                            <button className='max-w-[200px] w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'>Documentation</button>
                                        </Link>
                                    </div>
                                )}
                                {sellerUser && (
                                    <div>
                                        <Link href='/'>
                                            <button className='max-w-[200px] w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'>Contact Us</button>
                                        </Link>
                                    </div>
                                )}
                                <h1></h1>
                            </div>
                        ) : (
                            <div>
                                <div>
                                    <Link href='/login'>
                                        <button className='max-w-[200px] w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'>Sign In</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href='/registration'>
                                        <button className='max-w-[200px] w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'>Sign Up</button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
