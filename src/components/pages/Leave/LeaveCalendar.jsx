import * as React from "react";
import { makeStyles } from "@mui/styles";
import "./LeaveCalender.css";

const style = makeStyles({});

export default function LeaveCalendar() {
  const classes = style();

  return (
    <div className="details-container">
      <div>
        <section className="view-details-box">
          <section
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  color: "#7f8fa4",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                Approved by
              </span>
              <span style={{ color: "#5bc67e", fontSize: "0.9rem" }}>
                APPROVED
              </span>
            </div>
            <div>
              <p style={{ fontSize: "0.9rem" }}>admin</p>
            </div>
            <div className="date-box">
              <div>
                <p>From date</p>
                <p>Jul 31, 2023</p>
                <p>session 1</p>
              </div>
              <div>
                <p>To date</p>
                <p>Jul 31, 2023</p>
                <p>session 1</p>
              </div>
              <div>
                <p>No of days</p>
                <p>0.5</p>
              </div>
            </div>
            <div className="balance-box">
              <span>Balance : 2.5</span>
              <span>Emergency Leave</span>
            </div>
          </section>
        </section>
        <section className="details-summary">
          <dl>
            <p>Details</p>
            <br />
            <dt>Applying to</dt>
            <dd>Ameya Gadre</dd>
            <br />
            <dt>Reason</dt>
            <dd>
              Feeling unwell, need medical attention, and visiting the hospital.
              Requesting leave due to health concerns.
            </dd>
            <br />
            <dt>Contact</dt>
            <dd>8850812764</dd>
            <br />
            <dt>CC to</dt>
            <dd style={{ fontWeight: 600 }}>
              SUPRIYA LOKHANDE (E211202) , VISHNU DEEVI (E210401)
            </dd>
          </dl>
        </section>
      </div>
      <div className="timeline">
        <p style={{ color: "#7f8fa4", fontWeight: 600, fontSize: "12.5px" }}>
          Application Timeline
        </p>
        <br />
        <div className="timeline-div">
          <div className="dot">
            <p style={{ marginTop: "-28px" }}>Approved</p>
            <p>
              by
              <b style={{ fontWeight: 600, color: "#828fa5" }}> admin</b>
            </p>
            <div style={{marginTop:'-5px'}}>
              <span>31 Jul, 2023</span>
              <span>11:52 AM</span>
            </div>
          </div>
          <div className="dot2">
            <p style={{ marginTop: "8px" }}>Submitted</p>
            <div>
              <span>31 Jul, 2023</span>
              <span>09:22 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
