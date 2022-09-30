import React from 'react';
import Link from "next/link";

function RegistrationForm(props) {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">

                <form className="p-10 rounded-lg shadow-lg min-w-full">

                    <h1 className="text-center text-2xl mb-6 font-bold font-sans uppercase">Sign Up</h1>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="username">Username</label>

                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                               type="text"
                               name="username" id="username" placeholder="username"/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="email">Email</label>

                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                               type="text"
                               name="email" id="email" placeholder="@email"/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="username">Mobile Number</label>

                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                               type="number"
                               name="number" id="number" placeholder="07x-xxx-xxxx"/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="password">Password</label>

                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                               type="text"
                               name="password" id="password" placeholder="password"/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="confirm">Confirm password</label>

                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                               type="text"
                               name="confirm" id="confirm" placeholder="confirm password"/>
                    </div>

                    <button type="submit"
                            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans uppercase">Sign
                        Up
                    </button>

                    <Link href='/login'>
                        <button
                            className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans uppercase">Sign
                            In
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
