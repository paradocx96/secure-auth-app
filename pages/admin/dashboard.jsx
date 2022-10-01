import React from 'react';
import Head from "next/head";

import Navbar from "../../components/navigation/Navbar";
import UserList from "../../components/dashboard/UserList";

function Dashboard(props) {
    return (
        <div>
            <Head>
                <title>Secure App - Dashboard</title>
                <meta name="description" content="Secure Authentication App"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <div className='w-full h-screen text-center'>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <UserList/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
