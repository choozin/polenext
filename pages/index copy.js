import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState } from "react";

import { motion } from 'framer-motion';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PushPinIcon from '@mui/icons-material/PushPin';

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Contact from "../components/Contact";

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

export default function Index() {
  return (
    <div className="App">
      <Head>
        <title>Pole Printing Inc.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#222",//"#634938",
          backgroundImage: "url('/img/textures/purty-wood.png')",//"url('/img/textures/cardboard.png')",
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
            minHeight: '64%'
          }}>

            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '0vh',
            }}>
              <motion.div
                initial={{ y: -400 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 1.2
                }}
                style={{
                  width: '300px',
                  height: '183px',
                  maxWidth: '88vw',
                  maxHeight: '50vh',
                  border: 'dashed 2px #304',
                  borderBottom: 'solid 8px #304',
                  backgroundImage: "url('/img/common/polelogo.png')",
                }}>Pole Printing Logo</motion.div>
            </div>

            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 1.2
              }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Times New Roman',
                fontSize: '29px',
                color: '#304',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}>
              <span>Pole Printing Inc.</span>
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
                color: '#A08',
                textShadow: '1px 1px 0 #304, 1px -1px 0 #304, -1px 1px 0 #304, -1px -1px 0 #304',
              }}>
              <span>Over 35 Years in Service</span>
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
              }}>
              <PhoneIcon /><span>519 786 5112</span><br />
            </motion.div>

            <motion.div
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
              }}>
              <EmailIcon /><span>contact@pole.ca</span><br />
            </motion.div>

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
              }}>
              <PushPinIcon /><span>89 King St E, Forest, ON N0N 1J0</span>
            </motion.div>

          </div>
        </div>

        <Home />
      </div>
    </div>
  );
}
