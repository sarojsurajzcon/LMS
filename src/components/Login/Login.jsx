import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography, InputLabel } from "@mui/material";
import zcon from "../../assets/zcon.png";
import greyHR from "../../assets/greyHR.png";
import "./Login.css";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import ImageCarousel from "./ImageCarousel";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/Path";

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: "380px !important",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  
  boxShadow: "0 12px 34px 0 rgba(57,67,87,0.1)",
  margin: "1rem !important",
  marginTop: "2rem !important",
}));

const inputStyle = {
  width: "100%",
  marginBottom: "1rem",
  borderColor: "#bfdeff",
  padding: "10px",
  border: "1px solid #dee2e6",
  borderRadius: "6px",
};

const cred = {
  loginId: "suraj",
  password: "123456",
};
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { HOME } = ROUTES;
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isForgotPassword, setIsForgotPassword] = React.useState(false);
  //State to hold Whoops! paragraph boolean
  const [showWhoopsPara, setPara] = React.useState(false);
  // State to hold form data
  const [formData, setFormData] = React.useState({
    loginId: "",
    password: "",
  });
  const data = useSelector((state) => state.auth.data);

  console.log("auth", data);
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
    if (!formData.loginId || !formData.password) {
      setErrorMsg("Username and password is required.");
      setError(true);
      setPara(false);
    } else if (JSON.stringify(cred) !== JSON.stringify(formData)) {
      setErrorMsg(`Seems that either username or password isn't right. We could help
        you reset your password.`);
      setError(true);
      setPara(true);
    } else {
      console.log("login Success", formData);
      setPara(false);
      setError(false);
      setErrorMsg("");
      navigate(HOME);
    }
  };

  //handle forgot password
  const handleForgotPassword = () => {
    setIsForgotPassword((prev) => !prev);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      padding="0 1rem"
      paddingBottom="60px"
    >
      {/* <FormContainer> */}
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "380px",
            backgroundColor: "white",
            padding:'1.6rem',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius:'10px',
            boxShadow: "0 12px 34px 0 rgba(57,67,87,0.1)",
            margin: "1rem !important",
            marginTop: "2rem !important",
          }}
        >
          <header style={{ marginBottom: "0.2rem" }}>
            <img src={greyHR} alt="greyHR" width={"110px"} />
          </header>
          <Typography
            style={{
              // marginBottom: "1.8rem",
              color: "rgba(57,70,87,0.85)",
              fontSize: "21px",
              fontWeight: "800",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            {isForgotPassword
              ? `Forgot password? That's okay! Let's change it 😊`
              : "Hello there! 👋"}
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
                marginTop: "1.9rem",
                textAlign: "left",
                width: "100%",
              }}
            >
              {error && showWhoopsPara && (
                <Typography
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: "0.5rem",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  Whoops!
                </Typography>
              )}
              <Typography
                style={{
                  fontSize: "12.5px",
                  opacity: "0.9",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {errorMsg}
              </Typography>
            </Box>
          )}
          <Box
            style={{ width: "100%", textAlign: "left", marginTop: "1.2rem" }}
          >
            <InputLabel
              htmlFor="login-id"
              style={{
                color: "rgba(103,122,142,0.9)",
                fontSize: "11px",
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
              style={{
                ...inputStyle,
                border: error ? "0.5px solid #ff7575" : "1px solid #dee2e6",
              }}
              value={formData.loginId}
              onChange={handleInputChange}
            />

            {!isForgotPassword && (
              <>
                <InputLabel
                  htmlFor="password"
                  style={{
                    color: "rgba(103,122,142,0.9)",
                    fontSize: "11px",
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
                  style={{
                    ...inputStyle,
                    border: error ? "0.5px solid #ff7575" : "1px solid #dee2e6",
                  }}
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </>
            )}
          </Box>

          {/* conditionaly rendering the forgot password and login button for vice-versa elements position */}

          {isForgotPassword ? (
            <>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#388ce0",
                  padding: "0.6rem",
                  border: "none",
                  outline: "none",
                  color: "white",
                  borderRadius: "5px",
                  fontWeight: "600",
                  fontSize: "13px",
                  fontFamily: "Open Sans, sans-serif",
                  marginBottom: "1rem",
                }}
                className="submit-btn"
                type="submit"
              >
                {isForgotPassword ? "Ok, got it!" : "Log in"}
              </button>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <p
                  id="forgotPassword"
                  color="primary"
                  style={{
                    marginBottom: "1rem",
                    color: "#388ce0",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                  onClick={handleForgotPassword}
                >
                  {isForgotPassword ? "Back to login" : "Forgot password?"}
                </p>
              </Box>
            </>
          ) : (
            <>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <p
                  id="forgotPassword"
                  color="primary"
                  style={{
                    marginBottom: "1rem",
                    color: "#388ce0",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                  onClick={handleForgotPassword}
                >
                  {isForgotPassword ? "Back to login" : "Forgot password?"}
                </p>
              </Box>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#388ce0",
                  padding: "0.6rem",
                  border: "none",
                  outline: "none",
                  color: "white",
                  borderRadius: "5px",
                  fontWeight: "600",
                  fontSize: "13px",
                  fontFamily: "Open Sans, sans-serif",
                  cursor: "pointer",
                }}
                className="submit-btn"
                type="submit"
              >
                {isForgotPassword ? "Ok, got it!" : "Log in"}
              </button>
            </>
          )}
          {!isForgotPassword && (
            <>
              <div className="divider">
                <hr
                  style={{
                    width: "95%",
                    borderColor: "#edeff2",
                    opacity: "0.1",
                    marginBottom: "-10px",
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
                    fontSize: "11px",
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
            </>
          )}
        </form>
      {/* </FormContainer> */}
      <ImageCarousel />
      <Footer />
    </Box>
  );
};

export default Login;
