import React, { useState } from "react";
import {
  Box,
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
import { makeStyles } from "@mui/styles";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SideNav from "./SideNav";
import "./Apply.css";

const useStyles = makeStyles(() => ({
  date: {
    width: "100%",
  },
}));

export default function Apply() {
  const classes = useStyles();
  // State for hiding/showing information box
  const [isHide, setIsHide] = React.useState(false);

  // State for selected file
  const [selectedFile, setSelectedFile] = useState(null);

  // Form data state
  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    sessions1: "",
    sessions2: "",
    contactDetails: "",
    reason: "",
    selectedFile: null,
  });

  // Handle form data change
  const handleFormDataChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Toggle information box
  const toggleInfo = () => {
    setIsHide((prev) => !prev);
  };

  return (
    <section className="apply-box">
      <SideNav />
      <div className="apply-container">
        {isHide && (
          <Box className="info-box">
            <Typography className="info-para">
              Leave is earned by an employee and granted by the employer to take
              time off work. The employee is free to avail this leave in
              accordance with the company policy.
            </Typography>
            <Typography onClick={toggleInfo} className="hide-btn">
              Hide
            </Typography>
          </Box>
        )}
        <div className="form-header">
          <Typography
            sx={{ fontSize: "0.9rem", fontWeight: "600", opacity: 0.8 }}
          >
            Applying for Leave
          </Typography>
          {!isHide && (
            <Typography onClick={toggleInfo} className="hide-btn">
              Info
            </Typography>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input-box">
              <section className="input-div-container">
                <div className="input-div">
                  <InputLabel>
                    Leave Type
                    <Typography component="span" fontSize="small" color="error">
                      *
                    </Typography>
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      className="select-input"
                      value={formData.leaveType}
                      onChange={(e) =>
                        handleFormDataChange("leaveType", e.target.value)
                      }
                      displayEmpty
                    >
                      <MenuItem value="" disabled style={{ display: "none" }}>
                        Select type
                      </MenuItem>
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
                    From date{" "}
                    <Typography component="span" fontSize="small" color="error">
                      *
                    </Typography>{" "}
                  </InputLabel>
                  <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        className={classes.date}
                        value={formData.fromDate}
                        placeholder="Select date"
                        onChange={(newValue) =>
                          handleFormDataChange("fromDate", newValue)
                        }
                       
                      />
                    </LocalizationProvider>
                  </FormControl>
                  <InputLabel>
                    To date{" "}
                    <Typography component="span" fontSize="small" color="error">
                      *
                    </Typography>{" "}
                  </InputLabel>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={formData.toDate}
                      onChange={(newValue) =>
                        handleFormDataChange("toDate", newValue)
                      }
                    />
                  </LocalizationProvider>
                </div>
                <div className="input-div">
                  <InputLabel>
                    Sessions{" "}
                    <Typography component="span" fontSize="small" color="error">
                      *
                    </Typography>{" "}
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      className="select-input"
                      value={formData.sessions1 || "Session 1"}
                      onChange={(e) =>
                        handleFormDataChange("sessions1", e.target.value)
                      }
                    >
                      <MenuItem defaultChecked value={"Session 1"}>
                        Session 1
                      </MenuItem>
                      <MenuItem value={"Session 2"}>Session 2</MenuItem>
                    </Select>
                  </FormControl>
                  <InputLabel>
                    Sessions{" "}
                    <Typography component="span" fontSize="small" color="error">
                      *
                    </Typography>{" "}
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      className="select-input"
                      value={formData.sessions2 || "Session 2"}
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
                <div className="mt-2">
                  <span>
                    <p>Balance:</p>
                    <p>Applying for:</p>
                  </span>
                </div>
              </section>
            </div>

            <section className="mt-2">
              <div className="iconContainer">
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
              <div className="addIconBox">
                <p className="cc-paragraph">CC to </p>
                <div className="d-flex align-item-center">
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
              <div className="mx-1">
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
                      <a>{selectedFile ? selectedFile.name : "Attach File"}</a>
                      {!selectedFile && (
                        <span className="ml-2">
                          File Types: pdf , xls , xlsx , doc , docx , txt , ppt
                          , pptx , gif , jpg , jpeg , png
                        </span>
                      )}
                    </Typography>
                  </label>
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
