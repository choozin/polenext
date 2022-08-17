import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { useState } from "react";

import { motion } from 'framer-motion';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PushPinIcon from '@mui/icons-material/PushPin';

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

//import lightAluminum from "/img/textures/light-aluminum.png";
/*import beigePaper from "/img/textures/beige-paper.png";
import blackPaper from "/img/textures/black-paper.png";
import cardboardFlat from "/img/textures/cardboard-flat.png";
import cardboard from "/img/textures/cardboard.png";
import cleanGrayPaper from "/img/textures/clean-gray-paper.png";
import creamPaper from "/img/textures/cream-paper.png";
import exclusivePaper from "/img/textures/exclusive-paper.png";
import graphy from "/img/textures/graphy.png";
import groovePaper from "/img/textures/groovepaper.png";
import lightPaperFibers from "/img/textures/light-paper-fibers.png";
import naturalPaper from "/img/textures/natural-paper.png";
import notebookDark from "/img/textures/notebook-dark.png";
import notebook from "/img/textures/notebook.png";
import paper1 from "/img/textures/paper-1.png";
import paper2 from "/img/textures/paper-2.png";
import paper3 from "/img/textures/paper-3.png";
import paperFibers from "/img/textures/paper-fibers.png";
import paper from "/img/textures/paper.png";
import projectPaper from "/img/textures/project-paper.png";
import sandpaper from "/img/textures/beige-paper.png";
import texturedPaper from "/img/textures/textured-paper.png";*/

import "@fontsource/bebas-neue";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import "@fontsource/special-elite";

import WorkInProgress from "../components/WorkInProgress";

export default function Index() {


  const [blockWithWIP, setBlockWithWIP] = useState(false);

  return (
    <div className="App">
      <Head>
        <title>Pole Printing Inc. | Custom Printing Serving Forest &amp; South-Western Ontario</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Pole Printing offers professional custom print jobs for everything ranging from business cards to carbonless forms. We've been proudly serving South-Western Ontario for over 45 years."
          key="desc"
        />
      </Head>

      {blockWithWIP && <WorkInProgress unsetWIP={() => setBlockWithWIP(false)} />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#DDD",//"#634938",
          backgroundImage: "url('/img/textures/paper-2.png')",//"url('/img/textures/cardboard.png')",
          backgroundAttachment: "fixed",
          overflowX: 'hidden',
        }}
      >
        <Navbar />

        <div style={{
          width: '100vw',
          height: '400px',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

          <div style={{
            minHeight: '64%',
            position: 'fixed',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            zIndex: '1',
            fontFamily: 'Special Elite',
          }}>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '0vh',
              }}>
              <div
                style={{
                  width: '320px',
                  maxWidth: '88vw',
                  maxHeight: '50vh',
                  padding: '10px',
                }}>
                <Image src='/img/common/polelogo.png' width='300px' height='225px' layout='responsive' />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 1.8
              }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2vh',
                color: '#444',
                fontSize: '1.5rem',
                textAlign: 'center',
              }}>
              <span>Proudly serving South-Western Ontario for over 45 years.</span>
            </motion.div>

            <motion.div
              initial={{ y: 700 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 1.2,
                delay: 0.1,
              }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '4vh',
                color: '#444',
              }}>
              <PhoneIcon /><a href='tel:5197865112' style={{ paddingTop: '0.35rem', cursor: 'pointer', }}>519 786 5112</a><br />
            </motion.div>

            <Link href='/contact'><motion.div
              initial={{ y: 700 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 1.0,
                delay: 0.3,
              }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '0.5rem',
                color: '#444',
              }}>
              <EmailIcon /><span style={{ paddingTop: '0.35rem', cursor: 'pointer', }}>Send Us An Email</span><br />
            </motion.div></Link>

            <motion.div
              initial={{ y: 700 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.8,
                delay: 0.5,
              }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '0.5rem',
                color: '#444',
              }}>
              <PushPinIcon /><span style={{ paddingTop: '0.35rem' }}>89 King St East, Forest, ON N0N 1J0</span>
            </motion.div>

          </div>
        </div>

        <Home />
        <Footer />
      </div>
    </div>
  );
}
