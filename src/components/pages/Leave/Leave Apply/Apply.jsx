import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import {
  Box,
  useMediaQuery,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { makeStyles } from "@mui/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import "./Apply.css";
const useStyles = makeStyles((theme) => ({
  date: {
    width: "100%",
  },
}));

export default function Apply() {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [isHide, setIsHide] = React.useState(false);
  const [leaveType, setLeaveType] = React.useState("");
  const [fromDate, setFromDate] = React.useState(dayjs(""));
  const [toDate, setToDate] = React.useState(dayjs(""));
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: dayjs(),
    toDate: dayjs(),
    sessions1: "",
    sessions2: "",
    contactDetails: "",
    reason: "",
    selectedFile: null,
  });

  const handleFormDataChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = (event) => {
    setLeaveType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <section
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "flex",
      }}
    >
      <aside className="leave-nav">
        <NavLink
          to="/leave/leave-apply/apply"
          className={({ isActive }) => (isActive ? "leave-apply-link" : "")}
          sx={{
            textDecoration: "none",
          }}
        >
          <ListItem
            className="leave-menu-list active"
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
              whiteSpace: "nowrap",
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
              whiteSpace: "nowrap",
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
              whiteSpace: "nowrap",
            }}
          >
            Comp Off Grant
          </ListItem>
        </NavLink>
      </aside>
      <div className="apply-container">
        {isHide && (
          <Box
            style={{
              fontWeight: "600",
              fontFamily: "Open Sans",
              color: "rgba(57,70,87,0.9)",
              backgroundColor: "#ffffe8",
              padding: "0.8rem",
              borderRadius: "5px",
              textAlign: "left",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <Typography
              style={{
                fontFamily: "'Open Sans', sans-serif",
                marginBottom: "0.5rem",
                color: "#333",
                fontSize: "11.8px",
              }}
            >
              Leave is earned by an employee and granted by the employer to take
              time off work. The employee is free to avail this leave in
              accordance with the company policy.
            </Typography>
            <Typography
              onClick={() => setIsHide((prev) => !prev)}
              className="hide-btn"
            >
              Hide
            </Typography>
          </Box>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ fontSize: "0.9rem", fontWeight: "600", opacity: 0.8 }}
          >
            Applying for Leave
          </Typography>
          {!isHide && (
            <Typography
              onClick={() => setIsHide((prev) => !prev)}
              className="hide-btn"
            >
              Info
            </Typography>
          )}
        </div>
        <form action="" style={{ margin: "1rem 0" }} onSubmit={handleSubmit}>
          <div
            style={{ display: "flex", width: "100%", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: isSmallScreen ? "column" : "row",
              }}
            >
              <section className="input-div-container">
                <div className="input-div">
                  <InputLabel>
                    Leave Type <span style={{ color: "red" }}>*</span>{" "}
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      className="select-input"
                      value={formData.leaveType}
                      onChange={(e) =>
                        handleFormDataChange("leaveType", e.target.value)
                      }
                    >
                      <MenuItem value={"Loss Of Pay"}>Loss Of Pay</MenuItem>
                      <MenuItem value={"Emergency Leave"}>
                        Emergency Leave
                      </MenuItem>
                      <MenuItem value={"Consolidated Leave"}>
                        Consolidated Leave
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <InputLabel>
                    From date <span style={{ color: "red" }}>*</span>{" "}
                  </InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className={classes.date}
                      value={formData.fromDate}
                      onChange={(newValue) =>
                        handleFormDataChange("fromDate", newValue)
                      }
                    />
                  </LocalizationProvider>
                  <InputLabel>
                    To date <span style={{ color: "red" }}>*</span>{" "}
                  </InputLabel>
                  {/* <FormControl fullWidth> */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      // className={classes.date}
                      value={formData.toDate}
                      onChange={(newValue) =>
                        handleFormDataChange("toDate", newValue)
                      }
                    />
                  </LocalizationProvider>
                  {/* </FormControl> */}
                </div>
                <div className="input-div">
                  <InputLabel>
                    Sessions <span style={{ color: "red" }}>*</span>{" "}
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      className="select-input"
                      value={formData.sessions1}
                      onChange={(e) =>
                        handleFormDataChange("sessions1", e.target.value)
                      }
                    >
                      <MenuItem value={"Session 1"}>Session 1</MenuItem>
                      <MenuItem value={"Session 2"}>Session 2</MenuItem>
                    </Select>
                  </FormControl>
                  <InputLabel>
                    Sessions <span style={{ color: "red" }}>*</span>{" "}
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      className="select-input"
                      value={formData.sessions2}
                      onChange={(e) =>
                        handleFormDataChange("sessions2", e.target.value)
                      }
                    >
                      <MenuItem value={"Session 1"}>Session 1</MenuItem>
                      <MenuItem value={"Session 2"}>Session 2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </section>
              <section className="balance-apply-container">
                <div style={{ marginTop: "2rem" }}>
                  <span>
                    <p>Balance:</p>
                    <p>Applying for:</p>
                  </span>
                </div>
              </section>
            </div>

            <section style={{ marginTop: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#7f8fa",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                <AccountCircleIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "#7f8fa4",
                    margin: "0 0.5rem",
                  }}
                />
                <p>Applying to </p>
                <ArrowDropDownIcon />
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  // alignItems: "center",
                  flexDirection: "column",
                  color: "#7f8fa",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                <p style={{ marginLeft: "0.8rem" }}>CC to </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // marginLeft: "-0.2rem",
                  }}
                >
                  <AddCircleOutlineIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: "#7f8fa4",
                      margin: "0 0.5rem",
                    }}
                  />
                  Add
                </div>
              </div>
              {/* <br /> */}
              <div className="input-div">
                <InputLabel>Contact details</InputLabel>
                <FormControl fullWidth>
                  <TextField
                    className="select-input"
                    value={formData.contactDetails}
                    onChange={(e) =>
                      handleFormDataChange("contactDetails", e.target.value)
                    }
                  />
                </FormControl>
              </div>
              {/* <br /> */}
              <div style={{ margin: "0 1rem" }}>
                <InputLabel>Reason</InputLabel>
                <FormControl fullWidth>
                  <TextField
                    value={formData.reason}
                    onChange={(e) =>
                      handleFormDataChange("reason", e.target.value)
                    }
                    placeholder="Enter a reason"
                    multiline
                    rows={1.5}
                  />
                </FormControl>
              </div>
              <div>
                <Paper
                  elevation={1}
                  // variant="outlined"
                  sx={{
                    mt: 2,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "none",
                    mx: 2,
                  }}
                >
                  <input
                    type="file"
                    id="file-input"
                    accept=".pdf,.xls,.xlsx,.doc,.docx,.txt,.ppt,.pptx,.gif,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="file-input">
                    {!selectedFile && (
                      <IconButton
                        component="span"
                        color="primary"
                        sx={{ rotate: "-15deg" }}
                      >
                        <AttachFileIcon />
                      </IconButton>
                    )}
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{ fontSize: "0.75rem" }}
                    >
                      <span style={{ cursor: "pointer" }}>
                        {selectedFile ? selectedFile.name : "Attach File"}
                      </span>
                      {!selectedFile && (
                        <span style={{ marginLeft: "2rem" }}>
                          File Types: pdf , xls , xlsx , doc , docx , txt , ppt
                          , pptx , gif , jpg , jpeg , png
                        </span>
                      )}
                    </Typography>
                  </label>
                  {/* {selectedFile && (
                    <Box mt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AttachFileIcon />}
                      >
                        Upload
                      </Button>
                    </Box>
                  )} */}
                </Paper>
              </div>
            </section>
            <section className="submit-action-container">
              <Button
                type="submit"
                sx={{
                  textDecoration: "none",
                  borderRadius: "5px",
                  backgroundColor: "#24a7f8 !important",
                  color: "white !important",
                }}
                variant="contained"
              >
                Submit
              </Button>
              <Button
                sx={{
                  textDecoration: "none",
                  borderRadius: "5px",
                  color: "#24a7f8 !important",
                  outline: "1px solid #24a7f8",
                }}
                variant="text"
              >
                Cancel
              </Button>
            </section>
          </div>
        </form>
      </div>
    </section>
  );
}
