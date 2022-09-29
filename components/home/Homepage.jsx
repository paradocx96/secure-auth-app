import React from 'react';
import Link from "next/link";

function Homepage(props) {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className='grid lg:grid-cols-5 gap-8'>

                    <div className='col-span-2 lg:col-span-3 w-full h-full p-4'>
                        <div className='lg:p-4 h-full'>
                            <h1 className='py-4 text-gray-700'>
                                <span className='text-[#5651e5]'>Secure Authentication</span> Application
                            </h1>
                        </div>
                    </div>

                    <div className='col-span-2 lg:col-span-2 w-full h-auto lg:p-4'>
                        <div>
                            <div>
                                <Link href='/login'>
                                    <button className='px-11 py-4 mt-4'>Login</button>
                                </Link>
                            </div>
                            <div>
                                <Link href='/registration'>
                                    <button className='px-10 py-4 mt-4'>Signup</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
