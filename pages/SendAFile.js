import { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import TextField from '@mui/material/TextField';

import Navbar from '../components/Navbar';

const SendAFile = () => {


    return (
        <div className="App">
            <div
                style={{
                    width: '100vw',
                    minHeight: '100vh',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",
                    backgroundImage: "url('/img/textures/light-aluminum.png')",
                    backgroundAttachment: "fixed",
                    overflow: 'hidden',
                }}
            >
                <Navbar />

                <div style={{
                    width: '80vw',
                    minHeight: '400px',
                    backgroundColor: "#634938",
                    backgroundImage: "url('/img/textures/cardboard-flat.png')",
                    padding: '1rem',
                    fontFamily: 'Bebas Neue',
                    textAlign: 'center',
                    color: '#333',
                    transform: 'rotate(10deg)',
                    boxShadow: '0.5rem 0.5rem 1rem black',
                }}>
                    <div style={{
                        border: 'dotted 4px white',
                        backgroundColor: '#D00',
                        width: '80px',
                        height: '80px',
                        float: 'right',
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        fontSize: '32px',
                        color: '#DDD',
                    }}>
                        <span>10&cent;</span>
                    </div>

                    <h2 style={{ fontSize: '2rem', marginTop: '1rem', }}>Send Us A File</h2>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        minHeight: '440px',
                        margin: '0 auto',
                        backgroundColor: "darkblue",
                        backgroundImage: "url('/img/textures/project-paper.png')",
                        border: 'solid white 0.5rem',
                        transform: 'rotate(-10deg)',
                        boxShadow: '0.1rem 0.5rem 0.25rem #444',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <table style={{ width: '100%', maxWidth: '340px' }}>
                            <tr style={{
                                color: 'white',
                                width: '340px',
                            }}>
                                <td style={{ textAlign: 'left' }}>
                                    <span>Your Name:&nbsp;&nbsp;</span>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <input type='text'
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }} />
                                </td>
                            </tr>
                            <tr>
                                <span>&nbsp;</span>
                            </tr>
                            <tr style={{
                                color: 'white',
                                width: '300px',
                            }}>
                                <td style={{ textAlign: 'left' }}>
                                    <span>Company:&nbsp;&nbsp;</span>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <input type='text'
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }} />
                                </td>
                            </tr>
                            <tr>
                                <span>&nbsp;</span>
                            </tr>
                            <tr style={{
                                color: 'white',
                                width: '300px',
                            }}>
                                <td style={{ textAlign: 'left' }}>
                                    <span>Intended Product:&nbsp;&nbsp;</span>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <input type='text'
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }} />
                                </td>
                            </tr>
                            <tr>
                                <span>&nbsp;</span>
                            </tr>
                            <tr style={{
                                color: 'white',
                                width: '300px',
                            }}>
                                <td style={{ textAlign: 'left' }}>
                                    <span>Contact Information:&nbsp;&nbsp;</span>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <input type='text'
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }} />
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default SendAFile;