import React from 'react';
import Head from "next/head";

import RegistrationForm from "../components/registration/RegistrationForm";

function Registration(props) {
    return (
        <div>
            <Head>
                <title>Secure App - Sign Up</title>
                <meta name="description" content="Secure Authentication App"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <RegistrationForm/>
        </div>
    );
}

export default Registration;
