import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography, InputLabel } from "@mui/material";
import zcon from "../assets/zcon.png";
import greyHR from "../assets/greyHR.png";
import "./Login.css";
import google from "../assets/google.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: "435px !important",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 12px 34px 0 rgba(57,67,87,0.1)",
}));

const inputStyle = {
  width: "100%",
  marginBottom: "1rem",
  borderColor: "#bfdeff",
  padding: "12px",
  border: " 1px solid #dee2e6",
  borderRadius: "5px",
};

const cred = {
  loginId: "suraj",
  password: "123456",
};
const Login = () => {
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [credMatched, setCredMatched] = React.useState(false);
  // State to hold form data
  const [formData, setFormData] = React.useState({
    loginId: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can access form data from the `formData` state and do whatever you need here
    // console.log(JSON.stringify(cred) === JSON.stringify(formData))
    if (!formData.loginId || !formData.password) {
      setErrorMsg("Username and password is required.");
      setError(true);
    } else if (JSON.stringify(cred) !== JSON.stringify(formData)) {
      setErrorMsg(`Seems that either username or password isn't right. We could help
        you reset your password.`);
      setError(true);
      setCredMatched(false);
    } else {
      console.log("login Success", formData);
      setCredMatched(true);
      setError(false);
      setErrorMsg("");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <FormContainer>
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", textAlign: "center" }}
        >
          <header>
            <img src={greyHR} alt="greyHR" width={"140px"} />
          </header>
          <Typography
            //   variant="h1"
            //   component="h1"
            style={{
              marginBottom: "2rem",
              color: "rgba(57,70,87,0.9)",
              fontSize: "26px",
              fontWeight: "900",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Hello there! 👋
          </Typography>
          {/* error box container  */}
          {error && (
            <Box
              style={{
                fontWeight: "600",
                fontFamily: "Open Sans",
                color: "rgba(57,70,87,0.9)",
                backgroundColor: "#fff7eb",
                padding: "0.8rem",
                borderRadius: "5px",
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              {
                <Typography
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: "0.5rem",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "14px",
                    //   opacity:'0.9'
                  }}
                >
                  {error && formData.loginId && formData.password && "Whoops!"}
                </Typography>
              }
              <Typography
                style={{
                  fontSize: "14px",
                  opacity: "0.9",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {errorMsg}
              </Typography>
            </Box>
          )}
          <Box style={{ width: "100%", textAlign: "left" }}>
            <InputLabel
              htmlFor="login-id"
              style={{
                color: "rgba(103,122,142,0.9)",
                fontSize: "13px",
                marginBottom: "10px",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "600",
              }}
            >
              Login ID
            </InputLabel>
            <input
              name="loginId"
              id="loginId"
              placeholder="Employee No"
              style={{ ...inputStyle }}
              value={formData.loginId}
              onChange={handleInputChange}
            />
            <InputLabel
              htmlFor="password"
              style={{
                color: "rgba(103,122,142,0.9)",
                fontSize: "13px",
                marginBottom: "10px",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "600",
              }}
            >
              Password
            </InputLabel>
            <input
              name="password"
              placeholder="Password"
              id="password"
              type="password"
              style={{ ...inputStyle }}
              value={formData.password}
              onChange={handleInputChange}
            />
          </Box>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <a
              href=""
              color="primary"
              style={{
                marginBottom: "1rem",
                color: "#568fe0",
                fontFamily: "'Open Sans', sans-serif",
                fontSize:'14px',
                fontWeight:'600'
              }}
            >
              Forgot Password?
            </a>
          </Box>
          <button
            style={{
              width: "100%",
              backgroundColor: "#388ce0",
              padding: "0.9rem",
              border: "none",
              outline: "none",
              color: "white",
              borderRadius: "5px",
              fontWeight: "600",
              fontSize: "14px",
              fontFamily: "Open Sans, sans-serif",
            }}
            className="submit-btn"
            type="submit"
          >
            Log in
          </button>
          <div className="divider">
            <hr
              style={{
                width: "95%",
                borderColor: "#edeff2",
                opacity: "0.1",
                marginBottom: "-13px",
              }}
            />
            <p
              style={{
                backgroundColor: "white",
                position: "relative",
                zIndex: 1,
                width: "fit-content",
                padding: "0 15px",
                color: "#a9b3c2",
                fontSize: "14px",
              }}
            >
              Or sign in with
            </p>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={google} alt="Google Icon" />
            </div>
            <div className="icon">
              <img src={fb} alt="Facebook Icon" />
            </div>
            <div className="icon">
              <img src={linkedin} alt="LinkedIn Icon" />
            </div>
          </div>
        </form>
      </FormContainer>
    </Box>
  );
};

export default Login;
