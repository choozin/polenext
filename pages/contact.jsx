import Head from "next/head";
import { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import TextField from '@mui/material/TextField';

import Navbar from '../components/Navbar';

const Contact = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [product, setProduct] = useState("");
    const [notes, setNotes] = useState("");
    const [base64, setBase64] = useState("");
    const [fileName, setFileName] = useState();
    const [fileSize, setFileSize] = useState();

    const [maxFileSize, setMaxFileSize] = useState(600); // may be able to raise if email server allows


    const [emailMessage, setEmailMessage] = useState("Default message")

    const [sendButtonState, setSendButtonState] = useState('unsent');

    const generateEmailMessage = () => {
        setEmailMessage(
            "New Message from " + name + " of " + company + ". <br/> " +
            "Email: " + email + " <br/> " +
            "Phone: " + phone + " <br/> " +
            "Product: " + product + " <br/> " +
            "Notes: " + notes + ""
        )
    }


    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        file && setFileName(file.name)
        file && getBase64(file)
        file && setFileSize(file.size)
    }

    const onLoad = (fileString) => {
        setBase64(fileString)
    }

    const getBase64 = (file) => {
        let reader = new FileReader(0)
        reader.readAsDataURL(file)
        reader.onload = () => {
            onLoad(reader.result)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setSendButtonState('sending')
        fetch(process.env.SENDEMAILPATH, {
            mode: "no-cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            //
            body: JSON.stringify({
                from: { name: name, address: process.env.SENDEMAILRECIPIENT },
                to: 'poles@xcelco.on.ca', //process.env.SENDEMAILRECIPIENT,
                message: emailMessage,
                base64Data: base64,
                subject: "Message from " + name,
                date: new Date(),
                fileName: fileName,
            })
        }).then(() => {
            setSendButtonState('sent')
        })
    }

    return (
        <div className="App">
            <Head>
                <title>Contact Us | Pole Printing Inc.</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content="Contact Pole Printing today to save on all of your custom printing needs!"
                    key="desc"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <div
                style={{
                    width: '100vw',
                    minHeight: '100vh',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#242",
                    backgroundImage: "url('/img/textures/pool-table.png')",
                    backgroundAttachment: "fixed",
                    overflow: 'hidden',
                }}
            >
                <Navbar showLogo='true' />

                <div style={{
                    width: '80vw',
                    minHeight: '400px',
                    backgroundColor: "#EEE",
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

                    <h2 style={{ fontSize: '2rem', marginTop: '1rem', }}>Contact Pole Printing</h2>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        minHeight: '440px',
                        margin: '0 auto',
                        backgroundColor: "#222",
                        backgroundImage: "url('/img/textures/notebook-dark.png')",
                        transform: 'rotate(-10deg)',
                        boxShadow: '0.1rem 0.5rem 0.25rem #444',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        color: 'white',
                    }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '2rem', }}>
                            <div style={{ maxWidth: '100%', marginBottom: '1rem' }}>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span>Your Name:&nbsp;&nbsp;</span>
                                    <input type='text'
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }}
                                        onChange={(e) => { setName(e.target.value); generateEmailMessage() }}
                                    />
                                </div>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span>Company:&nbsp;&nbsp;</span>
                                    <input type='text'
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }}
                                        onChange={(e) => { setCompany(e.target.value); generateEmailMessage() }}
                                    />
                                </div>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span>Email:&nbsp;&nbsp;</span>
                                    <input type='text'
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }}
                                        onChange={(e) => { setEmail(e.target.value); generateEmailMessage() }}
                                    />
                                </div>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span>Phone:&nbsp;&nbsp;</span>
                                    <input type='text'
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }}
                                        onChange={(e) => { setPhone(e.target.value); generateEmailMessage() }}
                                    />
                                </div>
                            </div>
                            <div style={{ width: '100%' }}>
                                <span>The Message:<br /></span>
                                <textarea
                                    style={{
                                        width: '100%',
                                    }}
                                    rows="8"
                                    onChange={(e) => { setNotes(e.target.value); generateEmailMessage() }}
                                />
                            </div>
                        </div>
                        <div style={{ width: '100%', }}>
                            {
                                sendButtonState === 'unsent' ?
                                    name.length > 1 && email.length > 4 && notes.length > 1 ?
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whiteTap={{ scale: 0.95 }}
                                            style={{
                                                border: 'ridge 4px gold',
                                                backgroundColor: '#FFB',
                                                color: 'white',
                                                width: '7rem',
                                                cursor: 'pointer',
                                                padding: '0.5rem',
                                                marginBottom: '1rem',
                                                boxShadow: '0 0.1rem 1.5rem 0.2rem #FFD',
                                                fontFamily: 'Bebas Neue',
                                                fontSize: '1.5rem',
                                                textShadow: '1px 1px gold, -1px 1px gold, 1px -1px gold, -1px -1px gold'
                                            }}
                                            onClick={handleSubmit}>Send Email</motion.button>
                                        :
                                        <div>
                                            <span>Please complete the required fields.</span><br />
                                            <span style={{ fontSize: '70%', marginTop: '0' }}>(Your Name, Email, and The Message)</span>
                                        </div>
                                    :
                                    sendButtonState === 'sending' ?
                                        <span>Sending...</span>
                                        :
                                        sendButtonState === 'sent' ?
                                            <span>Sent</span>
                                            :
                                            <span>Error</span>
                            }
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default Contact;