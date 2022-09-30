import React from 'react';
import Head from "next/head";

import PasswordResetForm from "../components/password_reset/PasswordResetForm";

function PasswordReset(props) {
    return (
        <div>
            <Head>
                <title>Secure App - Password Reset</title>
                <meta name="description" content="Secure Authentication App"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <PasswordResetForm/>
        </div>
    );
}

export default PasswordReset;
