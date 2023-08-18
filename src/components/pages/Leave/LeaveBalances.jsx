import React, { useState } from "react";
import {Button, Autocomplete, TextField, Box} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "./LeaveBalances.css";

// Get the current year

const currentYear = new Date().getFullYear();

// Create an array of years from 2018 to the current year
const yearRange = Array.from(
  { length: currentYear - 2018 + 1 },
  (_, index) => currentYear - index
);

// Custom styled linear progress bar
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#24a7f8",
  },
}));

export default function LeaveBalances() {
  const [selectedYear, setSelectedYear] = useState(currentYear);

    // Handle year selection change
  const handleYearChange = (_, value) => {
    setSelectedYear(value);
  };

  return (
    <div className="leave-container">
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
            />
          )}
        />
      </section>
      <section className="container">
        <div className="box">
          <div className="container-header">
            <span>Loss Of Pay</span>
            <span>Granted:0</span>
          </div>
          <div className="inner-container">
            <p >0</p>
            <p >Balance</p>
          </div>
        </div>
        <div className="box">
          <div className="container-header">
            <span>Emergency Leave</span>
            <span>Granted:3</span>
          </div>
          <div className="inner-container">
            <p >2.5</p>
            <p >Balance</p>
          </div>
          <Box sx={{ flexGrow: 1, margin: "0 1rem 1rem" }}>
            <p className="progress-p">0.5 of 3 Consumed</p>
            <BorderLinearProgress variant="determinate" value={20} />
          </Box>
        </div>
        <div className="box">
          <div className="container-header">
            <span>Consolidated Leave</span>
            <span>Granted:3</span>
          </div>
          <div className="inner-container">
            <p >2</p>
            <p >Balance</p>
          </div>
          <Box sx={{ flexGrow: 1, margin: "0 1rem 1rem" }}>
            <p className="progress-p">1 of 3 Consumed</p>
            <BorderLinearProgress variant="determinate" value={35} />
          </Box>
        </div>
      </section>
    </div>
  );
}
