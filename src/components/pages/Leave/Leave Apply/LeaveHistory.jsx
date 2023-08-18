import * as React from "react";
import { makeStyles } from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import "./LeaveHistory.css";

const style = makeStyles({
  accordionDetails: {
    padding: "0 !important",
  },
});

export default function LeaveHistory() {
  const classes = style();

  return (
    <div className="leave-history-container">
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                border: "1px solid #36acf9",
                borderRadius: "100%",
                color: "#36acf9",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <section className="summary-box">
            <div className="title-box">
              <Typography className="accordion-title">Category</Typography>
              <Typography className="accordion-subtitle">Leave</Typography>
            </div>
            <div className="title-box">
              <Typography className="accordion-title">Leave Type</Typography>
              <Typography className="accordion-subtitle">
                Emegency Leave
              </Typography>
            </div>
            <div className="title-box">
              <Typography className="accordion-title">No. of days</Typography>
              <Typography className="accordion-subtitle">0.5</Typography>
            </div>
            <div className="title-box">
              <Typography style={{ fontSize: "0.8rem", color: "#5bc67e" }}>
                APPROVED
              </Typography>
            </div>
          </section>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <section className="accordion-details">
            <section className="details-box">
              <p>
                <span>Duration :</span>
                <span>
                  <b>31 jul 2023 </b>
                  (Session 1) to
                  <b>31 jul 2023 </b>
                  (Session 1)
                </span>
              </p>
              <p>
                <span>Reason :</span>
                <span>
                  Feeling unwell, need medical attention, and visiting the
                  hospital. Requesting leave due to health concerns.
                </span>
              </p>
            </section>
          </section>
          <section className="view-detail-box">
            <div>
              <Typography style={{ fontSize: "12px", color: "#7f8fa4" }}>
                Applied on
              </Typography>
              <Typography style={{ fontSize: "14px", fontWeight: "500" }}>
                31 jul, 2023
              </Typography>
            </div>
            <div>
              <NavLink to="/leave/leave-apply/history/view-details">
                <p id="view-detail-link">View Details</p>
              </NavLink>
            </div>
          </section>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
