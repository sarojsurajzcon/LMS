import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsDropdownOpen(false);
  };

  const styles = {
    appBar: {
      background: "transparent",
      boxShadow: "none",
    },
    appBarContent: {
      color: "rgba(103,122,142)",
    },
    arrowIcon: {
      marginLeft: "4px",
      transition: "transform 0.2s",
      transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
    },
  };

  return (
    <AppBar position="fixed" style={styles.appBar}>
      <Toolbar style={styles.appBarContent}>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Home
        </Typography>
        <div>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleMenuOpen}
          >
            <Typography
              style={{ fontSize: "0.87rem", opacity: "0.9" }}
              variant="body1"
            >
              Quick Links
            </Typography>
            <ArrowDropDownIcon style={styles.arrowIcon} />
          </div>
          <Menu
            anchorEl={anchorEl}
            open={isDropdownOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          </Menu>

        </div>
        <IconButton edge="start" color="inherit">
          <NotificationsNoneIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
