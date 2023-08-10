import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import './Apply.css'

export default function Apply() {
  return (
    <section style={{ display: "flex" }}>
      <aside className="leave-nav">
        <NavLink
          to="/leave/leave-apply/leave"
          className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
          sx={{
            textDecoration: "none",
          }}
        >
          <ListItem
            className="leave-menu-list"
            sx={{
              padding: "0.3rem 0 !important",
              paddingLeft: "1.65rem !important",
            }}
          >
            Leave
          </ListItem>
        </NavLink>
        <NavLink
          to="/leave/leave-apply/restricted-holiday"
          className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
          sx={{
            textDecoration: "none",
          }}
        >
          <ListItem
            className="leave-menu-list"
            sx={{
              padding: "0.3rem 0 !important",
              paddingLeft: "1.65rem !important",
            }}
          >
            Restricted Holiday
          </ListItem>
        </NavLink>
        <NavLink
          to="/leave/leave-apply/leave-cancel"
          className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
          sx={{
            textDecoration: "none",
          }}
        >
          <ListItem
            className="leave-menu-list"
            sx={{
              padding: "0.3rem 0 !important",
              paddingLeft: "1.65rem !important",
            }}
          >
            Leave Cancel
          </ListItem>
        </NavLink>
        <NavLink
          to="/leave/leave-apply/comp-off-grant"
          className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
          sx={{
            textDecoration: "none",
          }}
        >
          <ListItem
            className="leave-menu-list"
            sx={{
              padding: "0.3rem 0 !important",
              paddingLeft: "1.65rem !important",
            }}
          >
            Comp Off Grant
          </ListItem>
        </NavLink>
      </aside>
    </section>
  );
}
