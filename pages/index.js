import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState } from "react";

import Navbar from "../components/Navbar";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#383838",
          backgroundImage: "url('/img/textures/light-aluminum.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        <Contact />
        <div
          style={{
            width: "96vw",
            maxWidth: "1000px",
            height: "400px",
            backgroundColor: "beige",
            backgroundImage: "url('/img/textures/beige-paper.png')",
            borderBottomLeftRadius: "0.1rem",
            borderBottomRightRadius: "0.1rem",
            margin: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
          }}
        >
          <h3>Beige Paper</h3>
        </div>

        <div
          style={{
            width: "96vw",
            maxWidth: "1000px",
            height: "400px",
            backgroundColor: "#181818",
            backgroundImage: "url('/img/textures/black-paper.png')",
            borderBottomLeftRadius: "0.1rem",
            borderBottomRightRadius: "0.1rem",
            margin: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
            fontFamily: "Permanent Marker",
            color: '#CCC',
          }}
        >
          <h3>Black Paper</h3>
        </div>

        <div
          style={{
            width: "96vw",
            maxWidth: "1000px",
            height: "400px",
            backgroundColor: "#634938",
            backgroundImage: "url('/img/textures/cardboard-flat.png')",
            borderBottomLeftRadius: "0.1rem",
            borderBottomRightRadius: "0.1rem",
            margin: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
            fontFamily: "Special Elite",
            color: '#333',
          }}
        >
          <h3>Cardboard Flat</h3>
        </div>

        <div
          style={{
            width: "96vw",
            maxWidth: "1000px",
            height: "400px",
            backgroundColor: "#634938",
            backgroundImage: "url('/img/textures/cardboard.png')",
            borderBottomLeftRadius: "0.1rem",
            borderBottomRightRadius: "0.1rem",
            margin: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
          }}
        >
          <h3>Cardboard</h3>
        </div>

        <div
          style={{
            width: "96vw",
            maxWidth: "1000px",
            height: "400px",
            backgroundColor: "#FFF",
            backgroundImage: "url('/img/textures/exclusive-paper.png')",
            borderBottomLeftRadius: "0.1rem",
            borderBottomRightRadius: "0.1rem",
            margin: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
          }}
        >
          <h3>Exclusive Paper</h3>
        </div>

        <div
          style={{
            width: "96vw",
            maxWidth: "1000px",
            height: "400px",
            backgroundColor: "#DFD",
            backgroundImage: "url('/img/textures/graphy.png')",
            borderBottomLeftRadius: "0.1rem",
            borderBottomRightRadius: "0.1rem",
            margin: "1rem",
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
            margin: "1rem",
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
            margin: "1rem",
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
            margin: "1rem",
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
            margin: "1rem",
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
            margin: "1rem",
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
            margin: "1rem",
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
            margin: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0rem 0rem 0.5rem 0.5rem #333",
          }}
        >
          <h3>Textured Paper</h3>
        </div>
      </div>
    </div>
  );
}
