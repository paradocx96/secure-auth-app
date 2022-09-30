import React from 'react';
import Head from "next/head";

import LoginForm from "../components/login/LoginForm";

function Login(props) {
    return (
        <div>
            <Head>
                <title>Secure App - Sign In</title>
                <meta name="description" content="Secure Authentication App"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <LoginForm/>
        </div>
    );
}

export default Login;
