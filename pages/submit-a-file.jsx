import Head from "next/head";
import { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import TextField from '@mui/material/TextField';

import { productList } from '../lib/productList';

import Navbar from '../components/Navbar';

const SendAFile = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [product, setProduct] = useState("Select One");
    const [notes, setNotes] = useState("");
    const [base64, setBase64] = useState("");
    const [fileName, setFileName] = useState();
    const [fileType, setFileType] = useState();
    const [fileSize, setFileSize] = useState();

    const [maxFileSize, setMaxFileSize] = useState(10000); // may be able to raise if email server allows


    const [emailMessage, setEmailMessage] = useState("Default message")

    const [sendButtonState, setSendButtonState] = useState('unsent');

    useEffect(() => {
        generateEmailMessage();
    },[name, company, email, phone, product, notes])

    const generateEmailMessage = () => {
        setEmailMessage(
            "New File Submission from " + name + " of " + company + ". <br/> " +
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
        file && setFileType(file.type)
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
                from: { name: "File Submitted from " + name, address: 'collegeprocam@gmail.com' }, //process.env.SENDEMAILRECIPIENT },
                to: 'ctaylor17@outlook.com', //process.env.SENDEMAILRECIPIENT,
                message: emailMessage,
                base64Data: base64,
                date: new Date(),
                fileName: fileName,
            })
        }).then(() => {
            setSendButtonState('sent')
        })
    }

    const validateEmail = (email) => {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    return (
        <div className="App">
            <Head>
                <title>Send Us A File | Pole Printing Inc.</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div
                style={{
                    width: '100vw',
                    minHeight: '100vh',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#222",
                    backgroundImage: "url('/img/textures/purty-wood.png')",
                    backgroundAttachment: "fixed",
                    overflow: 'hidden',
                    paddingTop: '60px',
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
                    borderRadius: '0.4rem',
                    boxShadow: 'inset -0.1rem -0.1rem 0.1rem 0.1rem #110, 0.25rem 0.1rem 1rem #110',
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

                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', float: 'left', position: 'absolute' }}>Send Us A File</h2>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        minHeight: '440px',
                        margin: '0 auto',
                        marginTop: '-0.5rem',
                        backgroundColor: "darkblue",
                        backgroundImage: "url('/img/textures/project-paper.png')",
                        border: 'solid white 0.5rem',
                        transform: 'rotate(-10deg)',
                        boxShadow: '0.1rem 0.1rem 0.25rem #444',
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
                                        onChange={(e) => setName(e.target.value)}
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
                                        onChange={(e) => setCompany(e.target.value)}
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <span>Notes:<br /></span>
                                    <textarea
                                        style={{
                                            width: '100%',
                                        }}
                                        rows="8"
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </div>
                            </div>



                            <div>
                                <div style={{
                                    border: 'solid 1px white',
                                    borderRadius: '1rem',
                                    width: '64vw',
                                    color: 'white',
                                    fontSize: '4rem',
                                    maxWidth: '280px',
                                    maxHeight: '280px',
                                    height: '64vw',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                }}>
                                    <div>
                                        <span>
                                            {
                                                fileName ?
                                                    fileName.split(".").length - 1 === 1 ?
                                                        fileType.substring(fileType.indexOf("/") + 1) === 'jpeg' || fileType.substring(fileType.indexOf("/") + 1) === 'pdf' || fileType.substring(fileType.indexOf("/") + 1) === 'png' ?
                                                            fileType.substring(fileType.indexOf("/") + 1) //fileName.substring(fileName.indexOf(".") + 1)
                                                            :
                                                            'Invalid File Type: '+fileType.substring(fileType.indexOf("/") + 1)
                                                        :
                                                        'Invalid File'
                                                    :
                                                    'Empty'
                                            }
                                        </span>
                                        <br />
                                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <span style={{ color: fileSize ? Math.ceil(fileSize / 1024) < maxFileSize ? '#4D4' : 'red' : 'white', opacity: '1', fontSize: '1rem', }}>
                                                {fileName ? fileName : 'No File Currently Uploaded'}<br />
                                                {fileSize ? Math.ceil(fileSize / 1024) + ' KB' : ''}<br />
                                                {fileSize ? Math.ceil(fileSize / 1024) < maxFileSize ? '' : 'File must be less than ' + maxFileSize + 'KB' : 'Max File Size of ' + maxFileSize/1000 + 'MB'}<br />
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                <div>
                                    <motion.label
                                        whileHover={{ scale: 1.05 }}
                                        whiteTap={{ scale: 0.95 }}
                                        style={{
                                            display: 'inline-block',
                                            border: 'solid 4px white',
                                            backgroundColor: '#EEF',
                                            color: '#88A',
                                            width: '5rem',
                                            cursor: 'pointer',
                                            padding: '1rem',
                                            marginBottom: '1rem',
                                            boxShadow: '0 0.1rem 0.75rem 0.1rem #EEF',
                                        }}>
                                        <input type="file" accept="pdf|image/*"
                                            style={{
                                                visibility: 'hidden',
                                            }}
                                            onChange={onChange}
                                        />
                                        <span style={{ position: 'absolute', marginTop: '-1.25rem', marginLeft: '-1.9rem' }}>Upload File</span>
                                    </motion.label>
                                </div>
                                <div style={{ paddingTop: '2rem', paddingBottom: '1rem', }}>
                                    <span style={{ fontFamily: 'Courier New', fontSize: '1.2rem' }}>Product: </span>
                                    <select
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            borderBottom: 'solid 1px white',
                                            fontSize: '1.2rem',
                                            fontFamily: 'Courier New',
                                            color: 'white',
                                            width: '180px',
                                        }}
                                        onChange={(e) => setProduct(e.target.value)}
                                    >
                                        <option value="Select One"
                                            style={{
                                                border: 'none',
                                                borderBottom: 'solid 1px white',
                                                fontSize: '1.2rem',
                                                fontFamily: 'Courier New',
                                                color: 'white',
                                                backgroundColor: 'rgba(0,0,0,1)',
                                                width: '180px',
                                                textAlign: 'center',
                                            }}>
                                            --Select One--
                                        </option>
                                        {productList && productList.map((product) =>
                                            <option value={product.title}
                                                style={{
                                                    border: 'none',
                                                    borderBottom: 'solid 1px white',
                                                    fontSize: '1.2rem',
                                                    fontFamily: 'Courier New',
                                                    color: '#333',
                                                    backgroundColor: '#EEE',
                                                    width: '180px',
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    marginBottom: '0.2rem',
                                                }}>
                                                {product.title}
                                            </option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '100%', }}>
                            {
                                sendButtonState === 'unsent' ?
                                    name.length > 1 && validateEmail(email) && Math.ceil(fileSize / 1024) < maxFileSize && product !== "Select One" ?
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
                                            }} onClick={handleSubmit}>Send File</motion.button>
                                        :
                                        <div>
                                            <span>Please complete the required fields.</span><br />
                                            <span style={{ fontSize: '70%', marginTop: '0' }}>(Your Name, Email, File Upload &amp; Product Type)</span>
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

export default SendAFile;