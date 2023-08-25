import { NavLink } from "react-router-dom";
import { ListItem } from "@mui/material";
import "./SideNav.css";

export default function SideNav() {
  return (
    <aside className="leave-nav">
      <NavLink
        to="/leave/leave-apply/apply"
        className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
      >
        <ListItem className="leave-menu-list active">Leave</ListItem>
      </NavLink>
      <NavLink
        to="/leave/leave-apply/restricted-holiday"
        className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
      >
        <ListItem className="leave-menu-list">Restricted Holiday</ListItem>
      </NavLink>
      <NavLink
        to="/leave/leave-apply/leave-cancel"
        className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
        sx={{
          textDecoration: "none",
        }}
      >
        <ListItem className="leave-menu-list">Leave Cancel</ListItem>
      </NavLink>
      <NavLink
        to="/leave/leave-apply/comp-off-grant"
        className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
      >
        <ListItem className="leave-menu-list">Comp Off Grant</ListItem>
      </NavLink>
    </aside>
  );
}
