import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion, AnimatePresence } from 'framer-motion';

import navbarStyles from "./navbar.module.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import MenuBook from "@mui/icons-material/MenuBook";
import Face from "@mui/icons-material/MenuBook";
import AssignmentInd from "@mui/icons-material/MenuBook";
import ImportantDevices from "@mui/icons-material/MenuBook";
import Memory from "@mui/icons-material/MenuBook";
import Brightness4 from "@mui/icons-material/MenuBook";
import FormatPaint from "@mui/icons-material/MenuBook";
import FlightLand from "@mui/icons-material/MenuBook";
import AssignmentTurnedIn from "@mui/icons-material/MenuBook";
import GitHub from "@mui/icons-material/MenuBook";
import Create from "@mui/icons-material/MenuBook";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

/*import "@fontsource/mate-sc";*/
import "@fontsource/bebas-neue";
import "@fontsource/special-elite";
import "@fontsource/stardos-stencil";
/*import "@fontsource/tourney";
import "@fontsource/dotgothic16";*/

import productList from '../lib/productList';


const NavItem = (props) => {

  return (
    props.clickType === 'link' && (
      <Link
        passHref
        href={props.link ? props.link : '/'}
        key={props.title}
      >
        <div style={{
          width: '100%',
          height: props.height ? props.height : '48px',
          fontFamily: props.font ? props.font : "Bebas Neue",
          fontSize: props.fontSize ? props.fontSize : "1rem",
          backgroundColor: props.backgroundColor ? props.backgroundColor : "#EEE",
          color: props.color ? props.color : '#222',
          paddingLeft: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <span>{props.title}</span>
        </div>
      </Link>
    ) ||
    props.clickType === 'dropdown' && (
      <div style={{
        width: '100%',
        height: props.height ? props.height : '48px',
        fontFamily: props.font ? props.font : "Bebas Neue",
        fontSize: props.fontSize ? props.fontSize : "1rem",
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#EEE",
        color: props.color ? props.color : '#222',
        paddingLeft: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
        onClick={props.toggleMenu ? props.toggleMenu : null}
      >
        <span>{props.title}&nbsp;{props.catalogOpen ? '⇯' : '⇩'}</span>
      </div>
    ) ||
    props.clickType === 'subItem' && (
      <Link
        passHref
        href={props.link ? props.link : '/'}
        key={props.title}
      >
        <div style={{
          width: '100%',
          height: props.height ? props.height : '38px',
          fontFamily: props.font ? props.font : "Bebas Neue",
          fontSize: props.fontSize ? props.fontSize : "1rem",
          backgroundColor: props.backgroundColor ? props.backgroundColor : "#CCC",
          color: props.color ? props.color : '#333',
          paddingLeft: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
          onClick={props.close}
        >
          <span>{props.title}</span>
        </div>
      </Link >
    )
  )
}

const Navbar = ( props ) => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [truckingOpen, setTruckingOpen] = useState(false);

  return (
    <div className={navbarStyles.root}>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              zIndex: '98',
              display: 'absolute',
              width: '100vw',
              height: '100vh',
              top: '0',
              left: '0',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
            onClick={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
      <AppBar
        position="static"
        style={{
          background: "rgba(240, 240, 240, " + scrollY / 400 + ")",
          boxShadow: "none",
          color: '#222',
          fontFamily: 'Special Elite',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={navbarStyles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setMenuOpen(true)}
          >
            <span style={{ fontSize: '1.2rem', fontFamily: 'Special Elite', paddingTop: '0.25rem', textShadow: '1px 1px white, -1px 1px white, 1px -1px white, -1px -1px white' }}>Menu</span>
          </IconButton>

          <motion.div
            initial={{ x: -400 }}
            animate={{ x: menuOpen ? 0 : -400 }}
            transition={{
              type: "spring",
              bounce: 0.0,
              duration: 1.2
            }}
            style={{
              zIndex: '99',
              position: 'fixed',
              top: '0',
              left: '0',
              display: 'flex',
              flexDirection: 'column',
              width: '300px',
              maxWidth: '90vw',
              minHeight: '100vh',
              backgroundColor: '#EEE',
            }}>

            <NavItem
              title="Pole Printing Inc"
              font="Bebas Neue"
              fontSize="2rem"
              height="60px"
              backgroundColor="#CCC"
              color="#777"
              clickType="link"
              link="/"
              close={() => setMenuOpen(false)}
            />

            <Divider />

            <NavItem
              title="Send Us A File"
              font="Bebas Neue"
              fontSize="1rem"
              height="60px"
              backgroundColor="#222"
              color="#EEE"
              clickType="link"
              link="/submit-a-file"
              close={() => setMenuOpen(false)}
            />

            <Divider />

            <NavItem
              title="Printing Products"
              clickType="dropdown"
              toggleMenu={() => setCatalogOpen(!catalogOpen)}
              catalogOpen={catalogOpen}
              close={() => setMenuOpen(false)}
            />

            {catalogOpen && (
              <div style={{ overflowY: 'scroll', height: '40vh', width: '100%', border: 'solid 1px #777' }}>

                <NavItem
                  title="View the Entire Catalog"
                  backgroundColor="#AAA"
                  color="#333"
                  clickType="subItem"
                  link="/catalog"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Business Cards"
                  clickType="subItem"
                  link="/catalog/business-cards"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Brochures"
                  clickType="subItem"
                  link="/catalog/brochures"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Carbonless Forms"
                  clickType="subItem"
                  link="/catalog/carbonless-forms"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Door Hangers"
                  clickType="subItem"
                  link="/catalog/door-hangers"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Envelopes"
                  clickType="subItem"
                  link="/catalog/envelopes"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Labels & Stickers"
                  clickType="subItem"
                  link="/catalog/labels-stickers"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Letterheads"
                  clickType="subItem"
                  link="/catalog/letterheads"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Note Sheets/Graph Paper"
                  clickType="subItem"
                  link="/catalog/note-sheets"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Personalized Cheques"
                  clickType="subItem"
                  link="/catalog/personalized-cheques"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Postcards"
                  clickType="subItem"
                  link="/catalog/postcards"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Posters"
                  clickType="subItem"
                  link="/catalog/posters"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Presentation Folders"
                  clickType="subItem"
                  link="/catalog/presentation-folders"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Tickets"
                  clickType="subItem"
                  link="/catalog/tickets"
                  close={() => setMenuOpen(false)}
                />

              </div>
            )}

            <Divider />

            <NavItem
              title="Contact Us"
              clickType="link"
              link="/contact"
              close={() => setMenuOpen(false)}
            />

            <NavItem
              title="Location &amp; Hours"
              clickType="link"
              link="/location-and-hours"
              close={() => setMenuOpen(false)}
            />

            <NavItem
              title="Company History"
              clickType="link"
              link="/about-us"
              close={() => setMenuOpen(false)}
            />

          </motion.div>
          <div style={{
            width: '100%',
          }}>
            <div style={{
              float: 'right',
              opacity: props.showLogo ? 1 : scrollY / 400,
              background: props.showLogo && 'rgba(255,255,255,0.7)',
              borderRadius: '16px',
              padding: '3px'
            }}>
              <Link
                passHref
                href='/'
                key='homepage'
              >
                <Image src='/img/common/logo.png' width='56px' height='32px' />
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div >
  );
};

export default Navbar;
