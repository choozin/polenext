import { motion } from "framer-motion";

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
                    delay: 3.0,
                }}
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat nec ex quis ultrices. Pellentesque euismod id quam sit amet facilisis. In hac habitasse platea dictumst. Etiam feugiat dolor eget lacinia hendrerit. Donec nec magna pulvinar, mattis tellus viverra, dapibus quam. Ut euismod lacus nulla, sit amet pulvinar risus mollis non. Morbi dapibus eget dolor non tempus. Sed in auctor diam. Proin diam nunc, commodo eget posuere eu, sodales sit amet velit. Pellentesque imperdiet, ante et imperdiet dictum, orci augue accumsan libero, nec tincidunt diam nibh vel neque. Nullam blandit sed velit sit amet mollis. Praesent euismod blandit velit, ac facilisis risus semper vitae. Integer euismod, ipsum eu bibendum iaculis, nunc justo auctor nibh, et consectetur mauris ligula eget risus. Quisque pharetra urna vitae magna eleifend, id commodo leo finibus. Suspendisse tincidunt augue eu diam maximus, cursus vehicula augue mollis. Nullam laoreet diam in lacinia rutrum.</p>
                <p>Etiam id justo semper, lacinia mi ut, volutpat dolor. Morbi aliquam sit amet eros quis laoreet. Sed varius elit a ligula maximus mattis. Mauris at lacus nunc. Mauris nec nisi ut odio condimentum congue a eget nisl. Duis mattis ex id magna dignissim elementum. Sed blandit interdum dui. Vivamus id purus risus.</p>
                <p>Suspendisse eleifend, purus vel sagittis condimentum, justo mi efficitur ante, eu condimentum nunc risus ac nisl. Vivamus sit amet posuere quam, eu condimentum erat. Aliquam ultricies hendrerit mauris, eu interdum massa sollicitudin quis. Nulla facilisi. Cras faucibus mauris sit amet turpis maximus, eget facilisis tellus porttitor. In hac habitasse platea dictumst. Fusce nec felis ultricies, pellentesque odio sit amet, ornare diam. Cras at suscipit ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean libero velit, sollicitudin sit amet est vitae, ornare consequat libero. Duis euismod leo velit, luctus imperdiet nunc pharetra consequat. Nulla mauris ex, ullamcorper sed sollicitudin quis, semper ac leo. Sed quis porta tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In facilisis iaculis imperdiet. Fusce posuere suscipit mauris, vel aliquet augue tempus a.</p>
            </motion.div>

            <motion.div
            >
                <motion.div
                    style={{
                        width: "100%",
                        height: "400px",
                        backgroundColor: "#181818",
                        backgroundImage: "url('/img/textures/black-paper.png')",
                        borderBottomLeftRadius: "0.1rem",
                        borderBottomRightRadius: "0.1rem",
                        margin: "0 auto", marginBottom: "2rem", marginBottom: "2rem",
                        padding: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Permanent Marker",
                        color: '#CCC',
                    }}
                >
                    <h3>Black Paper</h3>
                </motion.div>
            </motion.div>
            
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
                    backgroundImage: "url('/img/textures/paper-2.png')",
                    borderBottomLeftRadius: "0.1rem",
                    borderBottomRightRadius: "0.1rem",
                    margin: "0 auto", marginBottom: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
                    fontFamily: "Bebas Neue",
                }}
            >
                <h3>Paper 2</h3>
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
        </div>
    )
}

export default Home;