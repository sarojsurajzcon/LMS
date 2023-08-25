import appLoader from "../../assets/appLoader.gif";

// Styles for the container that holds the GIF
const gifContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", // 100% viewport height
  zIndex: 1, // Ensures it appears above other content
};

// Styles for the centered GIF
const centeredGifStyle = {
  maxWidth: "100%", // Ensure the GIF doesn't exceed its container's width
  maxHeight: "80vh", // Limit the GIF's height to 80% of viewport height
};

function GifComponent() {
  return (
    <div style={gifContainerStyle}>
      {/* Display the animated GIF */}
      <img src={appLoader} alt="Animated GIF" style={centeredGifStyle} />
    </div>
  );
}

export default GifComponent;
