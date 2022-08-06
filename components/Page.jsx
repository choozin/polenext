import { useEffect, useState } from 'react';
import Head from 'next/head'

import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Page = (props) => {

    return (
        <div>
            <Head>
                <title>{props.title} | Pole Printing Inc.</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div style={{
                width: '100%',
                minHeight: '100vh',
                overflow: 'hidden',
                backgroundColor: props.backgroundColor ? props.backgroundColor : '#634938',
                backgroundImage: props.backgroundImage ? props.backgroundImage : "url('/img/textures/cardboard.png')",
                margin: '0',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Bebas Neue', 
            }}>
                <Navbar />
                <div style={{
                    marginTop: '3rem',
                    marginBottom: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}>

                    <div style={{
                        marginTop: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '75vh',
                    }}>
                        <h1 style={{ color: '#ddd', margin: '0 auto', marginBottom: '2rem', fontSize: '3rem',
                            textShadow: '2px 2px black, -2px 2px black, 2px -2px black, -2px -2px black' }}>{props.title}</h1>

                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )

}

export default Page;