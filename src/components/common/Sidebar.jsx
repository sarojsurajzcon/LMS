import React from "react";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink } from "react-router-dom"; // If you're using React Router
import home from "../../assets/home.svg";
import feeds from "../../assets/feeds.svg";
import todo from "../../assets/todo.svg";
import salary from "../../assets/salary.svg";
import leave from "../../assets/leave.svg";
import document from "../../assets/document.svg";
import people from "../../assets/people.svg";
import info from "../../assets/info.svg";
import flow from "../../assets/flow.svg";
import zcon from "../../assets/zcon.png";
import "./Sidebar.css";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
    // overflow:'hidden'
  },
  //   toolbar: theme.mixins.toolbar,
  profileSection: {
    display: "flex",
    padding: "0 0 0 1rem",
    alignItems: "center",
    // padding: theme.spacing(2),
  },
  avatar: {
    // width: theme.spacing(10),
    // height: theme.spacing(10),
    fontSize: "2.5rem !important",
    borderRadius: "100% !important",
  },
  settingsButton: {
    marginLeft: "auto",
  },
  nested: {
    // paddingLeft: theme.spacing(4),
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [leaveOpen, setLeaveOpen] = React.useState(false);
  const [todoOpen, setTodoOpen] = React.useState(false);
  const [salaryOpen, setSalaryOpen] = React.useState(false);

  const handleClick = () => {
    setLeaveOpen(!leaveOpen);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        <img src={zcon} alt="zcon" width="65%" />
      </div>
      <div className={classes.profileSection}>
        <PersonIcon className={classes.avatar} />
        <div
          style={{
            margin: "0.5rem",
            marginRight: "0.9rem",
          }}
        >
          <Typography
            style={{
              fontSize: "0.9rem",
              fontFamily: "'Open Sans', sans-serif",
            }}
            variant="h6"
          >
            Hi SURAJ
          </Typography>
          <Link
            style={{
              fontSize: "0.75rem",
              fontWeight: "500",
              color: "rgba(59,130,246,0.95)",
            }}
            to="/my-info"
          >
            View My Info
          </Link>
        </div>
        <IconButton>
          <SettingsOutlinedIcon
            fontSize="small"
            style={{
              opacity: 0.8,
              transform: "rotate(30deg)",
              //   marginLeft: "0.8rem",
            }}
          />
        </IconButton>
      </div>
      <List>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-list" : "")}
        >
          <ListItem className="menuList">
            <img src={home} alt="home" />
            Home
          </ListItem>
        </NavLink>
        <NavLink
          to="/feeds"
          className={({ isActive }) => (isActive ? "active-list" : "")}
        >
          <ListItem className="menuList">
            <img src={feeds} alt="feeds" />
            Feeds
          </ListItem>
        </NavLink>
        <ListItem
          onClick={() => setTodoOpen((prev) => !prev)}
          className="menuList"
          sx={{
            padding: "0.29rem 0 !important",
            paddingLeft: todoOpen ? "1.4rem !important" : "1.65rem !important",
            borderLeft: todoOpen ? "4px solid #3b82f6" : "",
            margin: "0.5rem 0 !important",
          }}
        >
          <img src={todo} alt="todo" />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "0.3rem",
            }}
          >
            To do
            {todoOpen ? (
              <ExpandLessIcon sx={{ fontSize: "1.2rem" }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
            )}
          </div>
        </ListItem>
        <Collapse in={todoOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            style={{
              borderLeft: "1px solid grey",
              padding: 0,
              margin: "0rem 0 0 2rem",
              fontSize: "0.75rem",
              opacity: 0.8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <NavLink
              to="/todo/review"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Review
              </ListItem>
            </NavLink>
          </List>
        </Collapse>
        <ListItem
          onClick={() => setSalaryOpen((prev) => !prev)}
          className="menuList"
          sx={{
            padding: "0.3rem 0 !important",
            paddingLeft: salaryOpen
              ? "1.05rem !important"
              : "1.3rem !important",
            borderLeft: salaryOpen ? "4px solid #3b82f6" : "",
            margin: "0.5rem 0 !important",
          }}
        >
          <img src={salary} alt="salary" />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "0.3rem",
            }}
          >
            Salary
            {salaryOpen ? (
              <ExpandLessIcon sx={{ fontSize: "1.2rem" }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
            )}
          </div>
        </ListItem>
        <Collapse in={salaryOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            style={{
              borderLeft: "1px solid grey",
              padding: 0,
              margin: "0rem 0 0 2rem",
              fontSize: "0.75rem",
              opacity: 0.8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <NavLink
              to="/salary/payslips"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Payslips
              </ListItem>
            </NavLink>
            <NavLink
              to="/salary/ytd-reports"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                YTD Reports
              </ListItem>
            </NavLink>
            <NavLink
              to="/salary/it-statement"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                IT Statement
              </ListItem>
            </NavLink>
            <NavLink
              to="/salary/it-declaration"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                IT Declaration
              </ListItem>
            </NavLink>
            <NavLink
              to="/salary/loans-and-advances"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Loans and Advances
              </ListItem>
            </NavLink>
            <NavLink
              to="/salary/reimbursement"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Reimbursement
              </ListItem>
            </NavLink>
            <NavLink
              to="/salary/proof-of-investment"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Proof Of Investment
              </ListItem>
            </NavLink>
            <NavLink
              to="/salary/salary-revision"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Salary Revision
              </ListItem>
            </NavLink>
          </List>
        </Collapse>
        <ListItem
          onClick={handleClick}
          className="menuList"
          sx={{
            padding: "0.3rem 0 !important",
            paddingLeft: leaveOpen ? "1.25rem !important" : "1.5rem !important",
            borderLeft: leaveOpen ? "4px solid #3b82f6" : "",
            margin: "0.5rem 0 !important",
          }}
        >
          <img src={leave} alt="leave" />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "0.3rem",
            }}
          >
            Leave
            {leaveOpen ? (
              <ExpandLessIcon sx={{ fontSize: "1.2rem" }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
            )}
          </div>
        </ListItem>
        <Collapse in={leaveOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            style={{
              borderLeft: "1px solid grey",
              padding: 0,
              margin: "0rem 0 0 2rem",
              fontSize: "0.75rem",
              opacity: 0.8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <NavLink
              to="/leave/leave-apply"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Leave Apply
              </ListItem>
            </NavLink>
            <NavLink
              to="/leave/leave-balances"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Leave Balances
              </ListItem>
            </NavLink>
            <NavLink
              to="/leave/leave-calendar"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Leave Calendar
              </ListItem>
            </NavLink>
            <NavLink
              to="/leave/holiday-calendar"
              className={({ isActive }) => (isActive ? "active-list" : "")}
            >
              <ListItem className="menuList" style={{ margin: "0rem" }}>
                Holiday Calendar
              </ListItem>
            </NavLink>
          </List>
        </Collapse>
        <NavLink
          to="/document-center"
          className={({ isActive }) => (isActive ? "active-list" : "")}
        >
          <ListItem className="menuList">
            <img src={document} alt="document" />
            Document Center
          </ListItem>
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) => (isActive ? "active-list" : "")}
        >
          <ListItem className="menuList">
            <img src={people} alt="people" />
            People
          </ListItem>
        </NavLink>
        <NavLink
          to="/helpdesk"
          className={({ isActive }) => (isActive ? "active-list" : "")}
        >
          <ListItem className="menuList">
            <img src={info} alt="info" />
            Helpdesk
          </ListItem>
        </NavLink>
        <NavLink
          to="/workflow-delegates"
          className={({ isActive }) => (isActive ? "active-list" : "")}
        >
          <ListItem className="menuList">
            <img src={flow} alt="flow" />
            Workflow Delegates
          </ListItem>
        </NavLink>
      </List>

      {/* <IconButton className={classes.settingsButton}>
        <SettingsIcon />
      </IconButton> */}
    </Drawer>
  );
};

export default Sidebar;
