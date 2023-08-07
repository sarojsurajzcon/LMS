import React from "react";
import appLoader from "../../assets/appLoader.gif";

const gifContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  zIndex: 1,
};

const centeredGifStyle = {
  maxWidth: "100%",
  maxHeight: "80vh",
};

function GifComponent() {
  return (
    <div style={gifContainerStyle}>
      <img src={appLoader} alt="Animated GIF" style={centeredGifStyle} />
    </div>
  );
}

export default GifComponent;
