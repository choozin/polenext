import { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import TextField from '@mui/material/TextField';

import Navbar from '../components/Navbar';

const SendAFile = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [product, setProduct] = useState("");
    const [notes, setNotes] = useState("");

    const [emailMessage, setEmailMessage] = useState("Default message")

    const generateEmailMessage = () => {
        setEmailMessage(
            "New File Submission from " + name + " from " + company + ". <br/> " +
            "Email: " + email + " <br/> " +
            "Phone: " + phone + " <br/> " +
            "Product: " + product + " <br/> " +
            "Notes: " + notes + ""
        )
    }

    const [base64, setBase64] = useState("");
    const [fileName, setFileName] = useState();

    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        setFileName(file.name)
        getBase64(file)
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


        fetch(process.env.SENDEMAILPATH, {
            mode: "no-cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            //
            body: JSON.stringify({
                from: { name: "File Submitted from " + name, address: process.env.SENDEMAILRECIPIENT },
                to: process.env.SENDEMAILRECIPIENT,
                message: emailMessage,
                base64Data: base64,
                date: new Date(),
                fileName: fileName,
            })
        }).then(() => {
            alert('sent, but need to refresh development server to send again')
        })
    }

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
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', flexWrap: 'flex', marginBottom: '2rem', }}>
                            <table style={{ width: '340px' }}>
                                <tr style={{
                                    color: 'white',
                                    width: '340px',
                                    maxWidth: '100%',
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
                                            }}
                                            onChange={(e) => { setName(e.target.value); generateEmailMessage() }}
                                        />
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
                                            }}
                                            onChange={(e) => { setCompany(e.target.value); generateEmailMessage() }}
                                        />
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
                                        <span>Email:&nbsp;&nbsp;</span>
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
                                            }}
                                            onChange={(e) => { setEmail(e.target.value); generateEmailMessage() }}
                                        />
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
                                        <span>Phone (Optional):&nbsp;&nbsp;</span>
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
                                            }}
                                            onChange={(e) => { setPhone(e.target.value); generateEmailMessage() }}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <span>&nbsp;</span>
                                </tr>
                                <tr style={{ height: '0px', color: 'white', }}>
                                    <td colSpan={2}>
                                        <span>Notes:</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ height: '0px', marginTop: '-1rem', }}>
                                        <textarea
                                            style={{

                                            }}
                                            cols="40"
                                            rows="8"
                                            onChange={(e) => { setNotes(e.target.value); generateEmailMessage() }}
                                        />
                                    </td>
                                </tr>
                            </table>
                            <table>
                                <tr>
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
                                    }}>
                                        <div>
                                            <span>
                                                {
                                                    fileName ?
                                                        fileName.split(".").length - 1 === 1 ?
                                                            fileName.substring(fileName.indexOf(".") + 1) === ('jpg' || 'jpeg' || 'pdf') ?
                                                                fileName.substring(fileName.indexOf(".") + 1)
                                                                :
                                                                'Invalid File Type'
                                                            :
                                                            'Invalid File'
                                                        :
                                                        'Empty'
                                                }
                                            </span>
                                            <span>

                                            </span>
                                        </div>

                                    </div>
                                </tr>

                                <tr>

                                    <div>
                                        <span style={{ color: 'white', opacity: '1', }}>{fileName ? fileName : 'Select a File'}</span>
                                    </div>
                                </tr>
                                <tr>
                                    <div>
                                        <label style={{
                                            display: 'inline-block',
                                            border: 'solid 1px white',
                                            color: 'white',
                                            width: '5rem',
                                            cursor: 'pointer',
                                            padding: '1rem',
                                        }}>
                                            <input type="file" accept="image/jpeg"
                                                style={{
                                                    visibility: 'hidden',
                                                }}
                                                onChange={onChange}
                                            />
                                            <span style={{ position: 'absolute', marginTop: '-1.25rem', marginLeft: '-1.9rem' }}>Upload File</span>
                                        </label>
                                    </div>
                                </tr>
                                <tr>
                                    <span>&nbsp;</span>
                                </tr>
                                <tr style={{
                                    color: 'white',
                                    width: '100%',
                                }}>
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
                                        <option value="Business Card"
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                borderBottom: 'solid 1px white',
                                                fontSize: '1.2rem',
                                                fontFamily: 'Courier New',
                                                color: 'white',
                                                width: '180px',
                                            }}>
                                            Business Card
                                        </option>
                                        <option value="Log Book"
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                borderBottom: 'solid 1px white',
                                                fontSize: '1.2rem',
                                                fontFamily: 'Courier New',
                                                color: 'white',
                                                width: '180px',
                                            }}>
                                            Log Book
                                        </option>
                                    </select>
                                </tr>
                            </table>
                        </div>
                        <div style={{ width: '100%', }}>
                            <button
                                onClick={handleSubmit}>Send Email</button>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default SendAFile;