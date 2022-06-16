import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

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
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/*import "@fontsource/mate-sc";*/
import "@fontsource/bebas-neue";
import "@fontsource/special-elite";
/*import "@fontsource/tourney";
import "@fontsource/dotgothic16";*/

const Navbar = () => {

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const [navElements, setNavElements] = useState({
    titles: [
      "Send Us A File",
      "All Products",
      "For the Trucking Industry",
      "About Pole Printing",
    ],
    secondaryTitles: [
      null,
      ["Product 1", "Product 2"],
      ["Product 1", "Product 2"],
      ["Company History", "Hours & Directions", "Contact Us"]
    ],
    postDivider: [
      true,
      false,
      false,
    ],
    links: [
      "/",
      "/",
      "/",
      "/",
    ],
    secondaryLinks: [
      null,
      ["/", "/"],
      ["/", "/"],
      ["/", "/", "/"]
    ],
    font: [
      "Bebas Neue",
      "Bebas Neue",
      "Special Elite",
      "Special Elite",
    ],
  });

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

  return (
    <div className={navbarStyles.root}>
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
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={Boolean(anchorEl)} onClose={handleClose}>
            <div
              className={navbarStyles.list}
              role="presentation"
              onClick={handleClose}
              onKeyDown={handleClose}
            >
              <Divider />
              <List style={{ color: "#888" }}>
                {navElements.titles.map((text, index) => (
                  <Link
                    passHref
                    href={navElements.links[index]}
                    key={index}
                  >
                    <ListItem button key={text}>
                      <ListItemText>
                        <span
                          style={{
                            fontFamily: navElements.font[index],
                          }}
                        >
                          {text}
                        </span>
                      </ListItemText>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </div>
          </Drawer>
          <Typography className={navbarStyles.title} variant="h6" noWrap>
            <span
                style={{
                  color: "white",
                  fontFamily: "Bebas Neue",
                  fontSize: "1.2rem",
                  textTransform: 'uppercase',
                }}
              >Page Title</span><span> </span>
            <Link passHref href="/">
              <span
                style={{
                  color: "white",
                  fontFamily: "Bebas Neue",
                  fontSize: "1.2rem",
                  textTransform: 'uppercase',
                }}
              >
                @ Pole Printing
              </span>
            </Link>
          </Typography>
          <div className={navbarStyles.search}>
            <div className={navbarStyles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              className={navbarStyles.searchInput}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
