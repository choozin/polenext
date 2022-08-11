import { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PushPinIcon from '@mui/icons-material/PushPin';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

import Catalog from '../components/Catalog';
import Map from '../components/Map';

import "@fontsource/bebas-neue";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import "@fontsource/special-elite";
import { useEffect } from 'react';


const Home = () => {

    const cardVariants = {
        offscreen: {
            y: 400
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const [displayFullCatalog, setDisplayFullCatalog] = useState(false);

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>

            <motion.div
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 1.0,
                    delay: 1.0,
                }}
                style={{
                    width: "100%",
                    overflow: 'hidden',
                    backgroundColor: '#533928',
                    backgroundImage: "url('/img/textures/cardboard.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: 'column',
                    textAlign: 'center',
                    boxShadow: "0rem 0rem 0.5rem 0.5rem rgba(1,1,1,0.7)",
                    color: '#DDD',
                    textShadow: '-2px 2px black',
                    fontFamily: "Bebas Neue",
                    zIndex: '12',
                }}
            >
                <h2 style={{ lineHeight: '0' }}>Our Top Products
                </h2>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginTop: '-2rem',
                    marginBottom: '1rem',
                }}>
                    <div style={{
                        display: 'flex',
                        width: '46%',
                        minWidth: '420px',
                        justifyContent: 'space-around',
                        margin: '1rem',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '150px',
                            width: '200px',
                        }}>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}><CardMembershipIcon /><br />Business Cards</h4>
                            <span>Nothing makes a great first impression like an eye-catching business card.</span>
                            <Link href='/catalog/business-cards'><motion.button
                                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                                whileFocus={{ scale: 1.2 }}
                                style={{
                                    textAlign: 'center',
                                    width: '200px',
                                    height: '80px',
                                    border: 'solid 0.1rem white',
                                    borderRadius: '1rem',
                                    background: "url('/img/products/businesscards2thumb.jpg')",
                                    backgroundPosition: 'center',
                                    color: '#111',
                                    fontSize: '1.2rem',
                                    fontFamily: 'Bebas Neue',
                                    marginTop: '1rem',
                                }}>Learn More<br/>About Business Cards
                            </motion.button></Link>
                        </div>


                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '150px',
                            width: '200px',
                        }}>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}><CopyAllIcon /><br />Carbonless Forms</h4>
                            <span>For quick, on-the-go instant copies of any document the Carbonless Form is the perfect solution.</span>
                            <Link href='/catalog/carbonless-forms'><motion.button
                                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                                whileFocus={{ scale: 1.2 }}
                                style={{
                                    textAlign: 'center',
                                    width: '200px',
                                    height: '80px',
                                    border: 'solid 0.1rem white',
                                    borderRadius: '1rem',
                                    background: "url('/img/products/businesscards2thumb.jpg')",
                                    backgroundPosition: 'center',
                                    color: '#111',
                                    fontSize: '1.2rem',
                                    fontFamily: 'Bebas Neue',
                                    marginTop: '1rem',
                                }}>Learn More<br/>About Carbonless Forms
                            </motion.button></Link>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '48%',
                        minWidth: '420px',
                        justifyContent: 'space-around',
                        margin: '1rem',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '150px',
                            width: '200px',
                        }}>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}><MailOutlineIcon /><br />Envelopes</h4>
                            <span>Custom envelopes are a surefire way to represent your brand in a professional manner.</span>
                            <Link href='/catalog/envelopes'><motion.button
                                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                                whileFocus={{ scale: 1.2 }}
                                style={{
                                    textAlign: 'center',
                                    width: '200px',
                                    height: '80px',
                                    border: 'solid 0.1rem white',
                                    borderRadius: '1rem',
                                    background: "url('/img/products/businesscards2thumb.jpg')",
                                    backgroundPosition: 'center',
                                    color: '#111',
                                    fontSize: '1.2rem',
                                    fontFamily: 'Bebas Neue',
                                    marginTop: '1rem',
                                }}>Learn More<br/>About Envelopes
                            </motion.button></Link>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '150px',
                            width: '200px',
                        }}>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}><PriceCheckIcon sx={{ color: '#FFF' }} /><br />Cheques</h4>
                            <span>Personalized cheques are an essential tool for any business' purchasing needs.</span>
                            <Link href='/catalog/cheques'><motion.button
                                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                                whileFocus={{ scale: 1.2 }}
                                style={{
                                    textAlign: 'center',
                                    width: '200px',
                                    height: '80px',
                                    border: 'solid 0.1rem white',
                                    borderRadius: '1rem',
                                    background: "url('/img/products/businesscards2thumb.jpg')",
                                    backgroundPosition: 'center',
                                    color: '#111',
                                    fontSize: '1.2rem',
                                    fontFamily: 'Bebas Neue',
                                    marginTop: '1rem',
                                }}>Learn More<br/>About Cheques
                            </motion.button></Link>
                        </div>
                    </div>
                </div>
                <motion.span
                    whileHover={{ color: '#4BD' }}
                    style={{ border: 'solid 1px #4BD', borderRadius: '0.5rem', width: '140px', margin: '0 auto', }}
                    onClick={() => setDisplayFullCatalog(!displayFullCatalog)}>{displayFullCatalog ? 'Hide the Catalog' : 'View the Entire Catalog'}</motion.span>
                {displayFullCatalog && <Catalog />}
            </motion.div>

            <div id="hours"
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: "url('/img/textures/black-paper.png')",
                    backgroundAttachment: 'fixed',
                    backgroundColor: '#111',
                    minHeight: '100vh',
                    zIndex: '10',
                }}>
                <h2 style={{
                    color: '#EEE',
                    fontFamily: 'Bebas Neue',
                    fontSize: '1.5rem',
                    textShadow: '1px 1px black ',
                }}>Location &amp; Hours</h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    width: '100%',
                    maxWidth: '1200px',
                }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>
                        <Map />
                        <p style={{ padding: '0.5rem', paddingTop: '0.8rem', backgroundColor: '#EEE', borderRadius: '0.5rem', fontFamily: 'Special Elite' }}>89 King Street East<br />Forest, Ontario<br />N0N 1J0</p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            width: '420px',
                            maxWidth: '92vw',
                            fontSize: '1.2rem',
                            color: '#E0DFDF',
                            fontFamily: 'Special Elite',
                        }}>
                        <p>We are conveniently located in beautiful downtown Forest at the intersection of Highways 21 &amp; 12 on the south-eastern corner.</p>
                        <h4 style={{ marginBottom: '0.5rem', marginTop: '3rem', fontSize: '1.2rem', color: '#FFF', textShadow: '2px 2px black, -2px 2px black, 2px -2px black, -2px -2px black, ' }}>Hours</h4>
                        <p>Monday to Friday<br /><span style={{ fontSize: '1rem' }}>8am to 4pm</span></p><p>Saturday &amp; Sunday<br /><span style={{ fontSize: '1rem' }}>Closed</span></p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home;