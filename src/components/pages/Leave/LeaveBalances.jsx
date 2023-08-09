import React, { useState } from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./LeaveBalances.css";

const currentYear = new Date().getFullYear();
const yearRange = Array.from(
  { length: currentYear - 2018 + 1 },
  (_, index) => currentYear - index
);

const LeaveBalances = () => {
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleYearChange = (_, value) => {
    setSelectedYear(value);
  };

  return (
    <div style={{ background: "#f7f7f7", height: "90vh" }}>
      <section className="action-container">
        <div style={{ marginRight: "-20px" }}>
          <Button variant="outlined" color="primary" className="action-btn">
            Apply
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#24a7f8" }}
            className="action-btn"
          >
            <FileDownloadOutlinedIcon />
          </Button>
        </div>

        <Autocomplete
          sx={{
            width: "10rem",
          }}
          options={yearRange}
          value={selectedYear}
          onChange={handleYearChange}
          getOptionLabel={(option) => option.toString()} // Convert option to string
          renderInput={(params) => (
            <TextField
              sx={{
                scale: "0.62",
                border: "1px solid #c6cdd5",
                borderRadius: "5px",
              }}
              {...params}

              // inputProps={{ className: "year-select" }}
            />
          )}
        />
      </section>
      <section class="container">
        <div class="box">
          <div className="container-header">
            <span>Loss Of Pay</span>
            <span>Granted:0</span>
          </div>
          <div className="inner-container">
            <p style={{fontSize:'25px'}}>0</p>
            <p style={{fontSize:'12px'}}>Balance</p>
          </div>
        </div>
        <div class="box">
          <div className="container-header">
            <span>Emergency Leave</span>
            <span>Granted:0</span>
          </div>
          <div className="inner-container">
            <p style={{fontSize:'25px'}}>0</p>
            <p style={{fontSize:'12px'}}>Balance</p>
          </div>
        </div>
        <div class="box">
          <div className="container-header">
            <span>Consolidated Leave</span>
            <span>Granted:0</span>
          </div>
          <div className="inner-container">
            <p style={{fontSize:'25px'}}>0</p>
            <p style={{fontSize:'12px'}}>Balance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeaveBalances;
