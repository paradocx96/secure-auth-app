import React from 'react';
import Head from "next/head";

import NumberAuthenticateForm from "../components/multifactor_auth/NumberAuthenticateForm";

function NumberAuthenticate(props) {
    return (
        <div>
            <Head>
                <title>Secure App - Authenticate</title>
                <meta name="description" content="Secure Authentication App"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <NumberAuthenticateForm/>
        </div>
    );
}

export default NumberAuthenticate;
