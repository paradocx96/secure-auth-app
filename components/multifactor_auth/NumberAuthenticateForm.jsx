import React from 'react';
import Link from "next/link";

function NumberAuthenticateForm(props) {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">

                <form className="p-10 rounded-lg shadow-lg min-w-full">

                    <h1 className="text-center text-2xl mb-6 font-bold font-sans uppercase">Authenticate Your
                        Account</h1>

                    <p className='text-center'>Protecting your account is our top priority. Please confirm your account
                        by entering the last
                        four digit of your mobile number.</p>

                    <div className='flex items-center justify-between py-4'>
                        <div className='mr-8'>
                            <input className="w-full bg-gray-100 text-black px-2 py-2 rounded-lg focus:outline-none"
                                   type="text"
                                   name="number1" id="number1"/>
                        </div>
                        <div className='mr-8'>
                            <input className="w-full bg-gray-100 text-black px-2 py-2 rounded-lg focus:outline-none"
                                   type="text"
                                   name="number2" id="number2"/>
                        </div>
                        <div className='mr-8'>
                            <input className="w-full bg-gray-100 text-black px-2 py-2 rounded-lg focus:outline-none"
                                   type="text"
                                   name="number3" id="number3"/>
                        </div>
                        <div>
                            <input className="w-full bg-gray-100 text-black px-2 py-2 rounded-lg focus:outline-none"
                                   type="text"
                                   name="number4" id="number4"/>
                        </div>
                    </div>

                    <Link href='/admin/dashboard'>
                        <button
                            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans uppercase"
                            type="submit">Submit
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default NumberAuthenticateForm;
