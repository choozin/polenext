import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

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
/*import "@fontsource/tourney";
import "@fontsource/dotgothic16";*/


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
          height: props.height ? props.height : '64px',
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
        height: props.height ? props.height : '64px',
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
        <span>{props.title}</span>
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
          height: props.height ? props.height : '40px',
          fontFamily: props.font ? props.font : "Bebas Neue",
          fontSize: props.fontSize ? props.fontSize : "1rem",
          backgroundColor: props.backgroundColor ? props.backgroundColor : "#CCC",
          color: props.color ? props.color : '#333',
          paddingLeft: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        >
          <span>{props.title}</span>
        </div>
      </Link >
    )
  )
}

const Navbar = () => {

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
              zIndex: '99',
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
          background: "rgba(32, 32, 32, " + scrollY / 400 + ")",
          boxShadow: "none",
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
            <MenuIcon />
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
              zIndex: '100',
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
              title="Send Us A File"
              font="Bebas Neue"
              fontSize="1rem"
              height="80px"
              backgroundColor="#222"
              color="#EEE"
              clickType="link"
              link="/SendAFile"
              close={() => setMenuOpen(false)}
            />

            <Divider />

            <NavItem
              title="Browse Our Catalog"
              clickType="dropdown"
              toggleMenu={() => setCatalogOpen(!catalogOpen)}
              close={() => setMenuOpen(false)}
            />

            {catalogOpen && (
              <div>

                <NavItem
                  title="Business Cards"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Carbonless Forms"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Envelopes"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Log Sheets"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Personalized Cheques"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Security Envelopes"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

              </div>
            )}

            <Divider />

            <NavItem
              title="Trucking Products"
              clickType="dropdown"
              toggleMenu={() => setTruckingOpen(!truckingOpen)}
              close={() => setMenuOpen(false)}
            />

            {truckingOpen && (
              <div>

                <NavItem
                  title="Log Sheets"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Security Envelopes"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

                <NavItem
                  title="Business Cards"
                  clickType="subItem"
                  link="/product1"
                  close={() => setMenuOpen(false)}
                />

              </div>
            )}

            <Divider />

            <NavItem
              title="Contact Us"
              clickType="link"
              link="/sendAFile"
              close={() => setMenuOpen(false)}
            />

            <NavItem
              title="Location &amp; Hours"
              clickType="link"
              link="/sendAFile"
              close={() => setMenuOpen(false)}
            />

            <NavItem
              title="Company History"
              clickType="link"
              link="/sendAFile"
              close={() => setMenuOpen(false)}
            />

            <NavItem
              title="Careers"
              clickType="link"
              link="/sendAFile"
              close={() => setMenuOpen(false)}
            />


          </motion.div>
          <Typography className={navbarStyles.title} variant="h6" noWrap>
            <span
              style={{
                color: "white",
                fontFamily: "Bebas Neue",
                fontSize: "1.2rem",
                textTransform: 'uppercase',
                float: 'right',
              }}
            >Pole Printing</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div >
  );
};

export default Navbar;
