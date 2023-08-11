import React, { useState } from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import "./LeaveBalances.css";

const currentYear = new Date().getFullYear();
const yearRange = Array.from(
  { length: currentYear - 2018 + 1 },
  (_, index) => currentYear - index
);
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

function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

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
      <section className="container">
        <div className="box">
          <div className="container-header">
            <span>Loss Of Pay</span>
            <span>Granted:0</span>
          </div>
          <div className="inner-container">
            <p style={{ fontSize: "25px" }}>0</p>
            <p style={{ fontSize: "12px" }}>Balance</p>
          </div>
        </div>
        <div className="box">
          <div className="container-header">
            <span>Emergency Leave</span>
            <span>Granted:3</span>
          </div>
          <div className="inner-container">
            <p style={{ fontSize: "25px" }}>2.5</p>
            <p style={{ fontSize: "12px" }}>Balance</p>
          </div>
          <Box sx={{ flexGrow: 1, margin: "0 1rem 1rem" }}>
            <p style={{ fontSize: "0.63rem" }}>0.5 of 3 Consumed</p>
            <BorderLinearProgress variant="determinate" value={20} />
          </Box>
        </div>
        <div className="box">
          <div className="container-header">
            <span>Consolidated Leave</span>
            <span>Granted:3</span>
          </div>
          <div className="inner-container">
            <p style={{ fontSize: "25px" }}>2</p>
            <p style={{ fontSize: "12px" }}>Balance</p>
          </div>
          <Box sx={{ flexGrow: 1, margin: "0 1rem 1rem" }}>
            <p style={{ fontSize: "0.63rem" }}>1 of 3 Consumed</p>
            <BorderLinearProgress variant="determinate" value={35} />
          </Box>
        </div>
      </section>
    </div>
  );
};

export default LeaveBalances;
