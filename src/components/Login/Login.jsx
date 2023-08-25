import React from "react";
import { Box, Typography, InputLabel } from "@mui/material";
import greyHR from "../../assets/greyHR.png";
import "./Login.css";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/Path";

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

      <form onSubmit={handleSubmit} className="login-form">
        <header style={{ marginBottom: "0.2rem" }}>
          <img src={greyHR} alt="greyHR" width={"110px"} />
        </header>
        <Typography className="forgot-password-paragraph">
          {isForgotPassword
            ? `Forgot password? That's okay! Let's change it 😊`
            : "Hello there! 👋"}
        </Typography>

        {/* error box container  */}

        {error && (
          <Box className="error-msg-box">
            {error && showWhoopsPara && (
              <Typography className="whoops-paragraph">Whoops!</Typography>
            )}
            <Typography className="err-msg">{errorMsg}</Typography>
          </Box>
        )}
        <Box className="input-box">
          <InputLabel htmlFor="login-id" className="input-label">
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
              <InputLabel htmlFor="password" className="input-label">
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
            <button className="submit-btn" type="submit">
              {isForgotPassword ? "Ok, got it!" : "Log in"}
            </button>
            <Box className="forgot-paragraph-box">
              <p
                id="forgotPassword-paragraph"
                color="primary"
                onClick={handleForgotPassword}
              >
                {isForgotPassword ? "Back to login" : "Forgot password?"}
              </p>
            </Box>
          </>
        ) : (
          <>
            <Box className="forgot-paragraph-box">
              <p
                id="forgotPassword-paragraph"
                color="primary"
                onClick={handleForgotPassword}
              >
                {isForgotPassword ? "Back to login" : "Forgot password?"}
              </p>
            </Box>
            <button className="submit-btn" type="submit">
              {isForgotPassword ? "Ok, got it!" : "Log in"}
            </button>
          </>
        )}
        {!isForgotPassword && (
          <>
            <div className="divider">
              <hr id="hr-line" />
              <p className="sing-in-paragraph">Or sign in with</p>
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
