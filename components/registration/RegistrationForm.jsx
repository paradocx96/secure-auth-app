import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

import UserService from "../../services/UserService";


function RegistrationForm(props) {

    const router = useRouter();

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault()

        setLoading(true)
        setMessage("")

        const data = {
            username: username,
            contactNo: number,
            email: email,
            password: password1,
            userType: 'default',
        }

        if (password1 === password2) {
            await UserService.register(data)
                .then(() => {
                        redirect();
                    }, error => {
                        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                        setMessage(resMessage);
                        setLoading(false);
                    }
                );
        } else {
            setLoading(false);
        }
    }

    function redirect() {
        router.push('/login')
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">

                <form onSubmit={handleSubmit}
                      className="p-10 rounded-lg shadow-lg min-w-full">

                    <h1 className="text-center text-2xl mb-6 font-bold font-sans uppercase">Sign Up</h1>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="username">Username</label>

                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none"
                               type="text"
                               name="username"
                               id="username"
                               placeholder="username"
                               onChange={e => setUserName(e.target.value)} required/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="email">Email</label>

                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none"
                               type="text"
                               name="email"
                               id="email"
                               placeholder="@email"
                               onChange={e => setEmail(e.target.value)} required/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="username">Mobile Number</label>

                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none"
                               type="number"
                               name="number"
                               id="number"
                               placeholder="07x-xxx-xxxx"
                               onChange={e => setNumber(e.target.value)} required/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="password">Password</label>

                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none"
                               type="password"
                               name="password1"
                               id="password1"
                               placeholder="password"
                               onChange={e => setPassword1(e.target.value)} required/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="confirm">Confirm password</label>

                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none"
                               type="password"
                               name="password2"
                               id="password2"
                               placeholder="confirm password"
                               onChange={e => setPassword2(e.target.value)} required/>
                    </div>

                    <button type="submit"
                            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans uppercase">Sign
                        Up
                    </button>

                    {message && (
                        <div>
                            <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                <p>{message}</p>
                            </div>
                        </div>
                    )}

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
