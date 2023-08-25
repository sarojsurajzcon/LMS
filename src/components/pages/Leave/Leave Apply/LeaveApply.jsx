import { useEffect } from "react";
import { Button } from "@mui/material";
import "./LeaveApply.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LeaveHistory from "./LeaveHistory";
import Apply from "./Apply/Apply";

export default function LeaveApply() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.pathname == "/leave/leave-apply") {
      navigate("/leave/leave-apply/apply");
    }
  }, [location?.pathname, navigate]);

  return (
    <>
      <header className="leave-apply-header">
        <NavLink
          to="/leave/leave-apply/apply"
          className={({ isActive }) =>
            isActive ? "leavy-apply-main-link" : ""
          }
        >
          <Button
            sx={{
              textDecoration: "none",
              borderRadius: "5px 0px 0px 5px",
              borderRight: "none !important",
            }}
            variant="contained"
            className="action-btn leave-active"
          >
            Apply
          </Button>
        </NavLink>
        <NavLink
          to="/leave/leave-apply/pending"
          className={({ isActive }) =>
            isActive ? "leavy-apply-main-link" : ""
          }
        >
          <Button
            sx={{
              textDecoration: "none",
              borderRadius: "0px !important",
            }}
            variant="contained"
            className="action-btn"
          >
            Pending
          </Button>
        </NavLink>
        <NavLink
          to="/leave/leave-apply/history"
          className={({ isActive }) =>
            isActive ? "leavy-apply-main-link" : ""
          }
        >
          <Button
            sx={{
              textDecoration: "none",
              borderRadius: "0px 5px 5px 0px",
              borderLeft: "none !important",
            }}
            variant="contained"
            className="action-btn"
          >
            History
          </Button>
        </NavLink>
      </header>

      <div className="main-content">
        {location?.pathname == "/leave/leave-apply/apply" && <Apply />}
        {location?.pathname == "/leave/leave-apply/pending" && <Pending />}
        {location?.pathname == "/leave/leave-apply/history" && <LeaveHistory />}
      </div>
    </>
  );
}

function Pending() {
  return <div>Pending Component Content</div>;
}
