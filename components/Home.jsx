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
                    backgroundColor: "#111",
                    backgroundImage: "url('/img/textures/black-paper.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: 'column',
                    textAlign: 'center',
                    boxShadow: "0rem 0rem 0.5rem 0.5rem rgba(1,1,1,0.7)",
                    color: '#CCC',
                    fontFamily: "Bebas Neue",
                    zIndex: '12',
                }}
            >
                <h2>Our Top Products
                </h2>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
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
                                }}><CardMembershipIcon /><br />Business Cards
                            </motion.button></Link>
                        </div>


                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '150px',
                            width: '200px',
                        }}>
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
                                }}><CopyAllIcon /><br />Carbonless Forms
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
                            <span>Custom envelopes are a surefire way to represent your brand in a professional manner.</span>
                            <Link href='/catalog/envelopes'><button
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
                                }}><MailOutlineIcon /><br />Envelopes
                            </button></Link>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '150px',
                            width: '200px',
                        }}>
                            <span>Personalized cheques are an essential tool for any business' purchasing needs.</span>
                            <Link href='/catalog/cheques'><button
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
                                }}><PriceCheckIcon /><br />Cheques
                            </button></Link>
                        </div>
                    </div>
                </div>
                <span onClick={() => setDisplayFullCatalog(!displayFullCatalog)}>{displayFullCatalog ? 'Hide the Catalog' : 'View the Entire Catalog'}</span>
                {displayFullCatalog && <Catalog />}
            </motion.div>

            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                background: "url('/img/textures/cardboard.png')",
                backgroundAttachment: 'fixed',
                backgroundColor: '#634938',
                minHeight: '100vh',
                zIndex: '10',
            }}>
                <h3>Location &amp; Hours</h3>
                <Map />
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '2rem',
                flexWrap: 'wrap',
            }}>
                <motion.div
                >
                    <motion.div
                        style={{
                            maxWidth: "92vw",
                            width: "300px",
                            height: "400px",
                            backgroundColor: "beige",
                            backgroundImage: "url('/img/textures/beige-paper.png')",
                            borderBottomLeftRadius: "0.1rem",
                            borderBottomRightRadius: "0.1rem",
                            marginBottom: "2rem",
                            padding: "1rem",
                            display: "flex",
                            justifyContent: "center",
                            boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                        }}
                    >
                        <h3>Beige Paper</h3>
                    </motion.div>
                </motion.div>
                <div
                    style={{
                        maxWidth: "92vw",
                        width: "700px",
                        height: "400px",
                        backgroundColor: "#634938",
                        backgroundImage: "url('/img/textures/cardboard.png')",
                        borderBottomLeftRadius: "0.1rem",
                        borderBottomRightRadius: "0.1rem",
                        marginBottom: "2rem",
                        padding: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                    }}
                >
                    <h3>Cardboard</h3>
                </div>
            </div>

            <motion.div
                style={{
                    width: "80vw",
                    maxWidth: "700px",
                    backgroundColor: "#FFF",
                    backgroundImage: "url('/img/textures/exclusive-paper.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                    fontFamily: "Bebas Neue",
                }}
            >
                <h2>Welcome to Pole Printing!</h2>
                <p>We offer high-quality printing services to customers throughout Southwestern Ontario.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat nec ex quis ultrices. Pellentesque euismod id quam sit amet facilisis. In hac habitasse platea dictumst. Etiam feugiat dolor eget lacinia hendrerit. Donec nec magna pulvinar, mattis tellus viverra, dapibus quam. Ut euismod lacus nulla, sit amet pulvinar risus mollis non. Morbi dapibus eget dolor non tempus. Sed in auctor diam. Proin diam nunc, commodo eget posuere eu, sodales sit amet velit. Pellentesque imperdiet, ante et imperdiet dictum, orci augue accumsan libero, nec tincidunt diam nibh vel neque. Nullam blandit sed velit sit amet mollis. Praesent euismod blandit velit, ac facilisis risus semper vitae. Integer euismod, ipsum eu bibendum iaculis, nunc justo auctor nibh, et consectetur mauris ligula eget risus. Quisque pharetra urna vitae magna eleifend, id commodo leo finibus. Suspendisse tincidunt augue eu diam maximus, cursus vehicula augue mollis. Nullam laoreet diam in lacinia rutrum.</p>
                <p>Etiam id justo semper, lacinia mi ut, volutpat dolor. Morbi aliquam sit amet eros quis laoreet. Sed varius elit a ligula maximus mattis. Mauris at lacus nunc. Mauris nec nisi ut odio condimentum congue a eget nisl. Duis mattis ex id magna dignissim elementum. Sed blandit interdum dui. Vivamus id purus risus.</p>
            </motion.div>


            <motion.div
            >
                <motion.div
                    style={{
                        width: "100%",
                        backgroundColor: "#181818",
                        backgroundImage: "url('/img/textures/black-paper.png')",
                        borderBottomLeftRadius: "0.1rem",
                        borderBottomRightRadius: "0.1rem",
                        margin: "0 auto", marginBottom: "2rem", marginBottom: "2rem",
                        padding: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        color: '#444',
                    }}
                >
                    <h3>Black Paper</h3>
                    <Catalog />
                </motion.div>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div
                    variants={cardVariants}
                    style={{
                        width: "96vw",
                        maxWidth: "1000px",
                        height: "400px",
                        backgroundColor: "#634938",
                        backgroundImage: "url('/img/textures/cardboard-flat.png')",
                        borderBottomLeftRadius: "0.1rem",
                        borderBottomRightRadius: "0.1rem",
                        margin: "0 auto", marginBottom: "2rem", marginBottom: "2rem",
                        padding: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                        fontFamily: "Special Elite",
                        color: '#333',
                    }}
                >
                    <h3>Cardboard Flat</h3>
                </motion.div>
            </motion.div>
            <div
                style={{
                    width: "96vw",
                    maxWidth: "600px",
                    height: "400px",
                    backgroundColor: "#DFD",
                    backgroundImage: "url('/img/textures/graphy.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                }}
            >
                <h3>Graphy</h3>
            </div>

            <div
                style={{
                    width: "96vw",
                    maxWidth: "1000px",
                    height: "400px",
                    backgroundColor: "#FFF",
                    backgroundImage: "url('/img/textures/groovepaper.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                }}
            >
                <h3>Groove Paper</h3>
            </div>

            <div
                style={{
                    width: "96vw",
                    maxWidth: "1000px",
                    height: "400px",
                    backgroundColor: "#FFF",
                    backgroundImage: "url('/img/textures/notebook-dark.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                }}
            >
                <h3>Notebook Dark</h3>
            </div>

            <div
                style={{
                    width: "96vw",
                    maxWidth: "1000px",
                    height: "400px",
                    backgroundColor: "#FFF",
                    backgroundImage: "url('/img/textures/paper.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                }}
            >
                <h3>Paper</h3>
            </div>

            <div
                style={{
                    width: "96vw",
                    maxWidth: "1000px",
                    height: "400px",
                    backgroundColor: "darkblue",
                    backgroundImage: "url('/img/textures/project-paper.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                }}
            >
                <h3>Project Paper</h3>
            </div>

            <div
                style={{
                    width: "96vw",
                    maxWidth: "1000px",
                    height: "400px",
                    backgroundColor: "#FFF",
                    backgroundImage: "url('/img/textures/sandpaper.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                }}
            >
                <h3>Sandpaper</h3>
            </div>

            <div
                style={{
                    width: "96vw",
                    maxWidth: "1000px",
                    height: "400px",
                    backgroundColor: "#FFF",
                    backgroundImage: "url('/img/textures/textured-paper.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                }}
            >
                <h3>Textured Paper</h3>
            </div>
        </div >
    )
}

export default Home;