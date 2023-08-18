import * as React from "react";
import { makeStyles } from "@mui/styles";
import "./LeaveHistoryDetails.css";

export default function LeaveHistoryDetails() {
  return (
    <div className="details-container">
      <div>
        <section className="view-details-box">
          <section>
            <div>
              <span>Approved by</span>
              <span id="approval">APPROVED</span>
            </div>
            <div>
              <p id="admin">admin</p>
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
            <dd id="cc">SUPRIYA LOKHANDE (E211202) , VISHNU DEEVI (E210401)</dd>
          </dl>
        </section>
      </div>
      <div className="timeline">
        <p>Application Timeline</p>
        <br />
        <div className="timeline-div">
          <div className="dot">
            <p style={{ marginTop: "-28px" }}>Approved</p>
            <p>
              by
              <b> admin</b>
            </p>
            <div style={{ marginTop: "-5px" }}>
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
