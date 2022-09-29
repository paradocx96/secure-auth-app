import Head from 'next/head'

import Homepage from "../components/home/Homepage";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Secure App</title>
                <meta name="description" content="Secure Authentication App"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Homepage/>
        </div>
    )
}
