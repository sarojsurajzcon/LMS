import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Redux/commonReducer";

const useStyles = makeStyles((theme) => ({
  customIcon: {
    margin: "0rem !important",
    "&:hover": {
      background: "none !important", // Remove hover effect
    },
    "&:focus": {
      background: "none !important", // Remove hover effect
    },
    "&:active": {
      background: "none !important", // Remove active/click effect
    },
  },
  hambergurIcon: {
    background: "#5473e3 !important",
    padding: "0.25rem !important",
    color: "white !important",
    margin: "0.6rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      background: "#5473e3 !important", // Remove hover effect
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isSidebarOpen = useSelector((state) => state.common.isSidebarOpen);
  const pathname =
    location?.pathname == "/"
      ? "home"
      : location?.pathname.replace(/[^a-zA-Z0-9]+/g, " ");

  const uniqueTitle = pathname
    .split(" ")
    .map((word, index, arr) => {
      if (arr.indexOf(word) === index) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return "";
    })
    .join(" ")
    .trim();

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
      position: "inherit",
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

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <AppBar position="fixed" style={styles.appBar}>
      <Toolbar style={styles.appBarContent}>
        {!isSidebarOpen && (
          <IconButton
            edge="start"
            color="inherit"
            className={classes.hambergurIcon}
            onClick={handleToggleSidebar}
          >
            <MenuIcon />
          </IconButton>
        )}
        {isSidebarOpen && (
          <span
            onClick={handleToggleSidebar}
            style={{
              backgroundColor: "#5473e3",
              padding: "0.05rem 0.35rem",
              color: "white",
              position: "absolute",
              zIndex: 10000,
              marginLeft: "-2.5rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <ArrowBackIosNewOutlinedIcon
              style={{ fontSize: "1.2rem", marginTop: "5px" }}
            />
          </span>
        )}
        <Typography
          variant="h6"
          style={{
            flexGrow: 1,
            fontSize: "1rem",
            color: "rgba(23,30,37)",
            fontWeight: 400,
          }}
        >
          {uniqueTitle}
        </Typography>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              margin: "0 0.65rem",
            }}
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
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                fontSize: "0.6rem !important",
                padding: "1.2rem",
                opacity: "0.5",
              }}
            >
              Sigh! You cannot 'Quick Link' this page
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "0.8rem !important",
                paddingTop: "0.7rem",
              }}
            >
              <a
                href="https://ess-help.greythr.com/employee-portal"
                target="_blank"
              >
                Getting Started with greytHR
              </a>
            </MenuItem>
          </Menu>
        </div>
        <IconButton edge="start" className={classes.customIcon} color="inherit">
          <NotificationsNoneIcon sx={{ fontSize: "1.4rem !important" }} />
        </IconButton>
        <IconButton
          edge="start"
          onClick={() => navigate("/login")}
          color="inherit"
          className={classes.customIcon}
        >
          <PowerSettingsNewIcon sx={{ fontSize: "1.4rem !important" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
