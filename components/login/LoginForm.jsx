import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

import UserService from "../../services/UserService";

function LoginForm(props) {
    const router = useRouter();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    function redirect() {
        router.push('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        const data = {
            username: username,
            password: password
        }

        if (password != null) {
            UserService.login(data)
                .then(() => {
                        redirect()
                    },
                    error => {
                        const userMessage = "Username or Password Incorrect!";
                        const resMessage = (error.response && error.response.data.message && error.response.data) || userMessage || error.message || error.toString();

                        setLoading(false);
                        setMessage(resMessage);
                    }
                );
        } else {
            setLoading(false);
        }
    };


    return (
        <div className="h-screen flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form onSubmit={handleSubmit}
                      className="p-10 rounded-lg shadow-lg min-w-full">

                    <h1 className="text-center text-2xl mb-6 font-bold font-sans uppercase">Sign In</h1>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="username">Username</label>

                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none"
                               type="text"
                               name="username"
                               id="username"
                               placeholder="username"
                               onChange={onChangeUsername} required/>
                    </div>

                    <div>
                        <label className="text-gray-500 font-semibold block my-3 text-md uppercase"
                               htmlFor="password">Password</label>

                        <input className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none"
                               type="password"
                               name="password"
                               id="password"
                               placeholder="password"
                               onChange={onChangePassword} required/>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <div className="flex flex-row items-center">
                            <input className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                   type="checkbox"
                                   name="remember" id="remember"/>
                            <label htmlFor="comments" className="ml-2 text-sm font-normal text-gray-400">Remember
                                me</label>
                        </div>
                        <div>
                            <Link href="/password_reset">
                                <button className="text-sm text-blue-600 hover:underline">Forgot password?</button>
                            </Link>
                        </div>
                    </div>

                    <button type="submit"
                            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans uppercase">Sign
                        In
                    </button>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger text-center" role="alert">
                                {message}
                            </div>
                        </div>
                    )}

                    <Link href='/registration'>
                        <button
                            className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans uppercase">Sign
                            Up
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
